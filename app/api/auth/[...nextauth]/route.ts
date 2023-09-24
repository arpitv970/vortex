import User from '@/models/user';
import { connectToDB } from '@/utils/database';
import NextAuth, { Profile, Session } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const C_ID = process.env.GOOGLE_ID || '';
const C_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: C_ID,
      clientSecret: C_SECRET,
    })
  ],
  callbacks: {

    // Serverless functions --> lamda functions

    // FIX: Try to find appropriate session type which also have user id, email, name etc...
    async session({ session }: { session: any }) {
      /* 
        NOTE: the  logic of session is like:
        - find the user from the stored session
        - now, update the user's id of the session
       */
      const sessionUser = await User.findOne({
        email: session.user?.email,
      });

      if (session.user != undefined) {
        session.user.id = sessionUser._id.toString();
      }

      return session;
    },

    async signIn({ profile }: { profile?: Profile }): Promise<any> {
      /*
      NOTE: The logic for this is: 
      - connect to db
      - check for the user, wheather it already exists
      - if not, create & save the new user
      */

      try {
        await connectToDB();

        const userExist = await User.findOne({
          email: profile?.email,
        });

        if (!userExist) {
          const nameArr: string[] | undefined = profile?.name?.split(' ');
          await User.create({
            email: profile?.email,
            profile: {
              first_name: profile?.name?.split(' ')[0],
              last_name: profile?.name?.split(' ')[1],
              avatar: profile?.image,
            }
          });
        }

        return true

      } catch (error) {
        console.log(error);
      }
    }
  }
});

export { handler as GET, handler as POST };
