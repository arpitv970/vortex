import { socials } from '@/utils';
import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  /*
    NOTE: Following are the required schema:
      - Email
      - Password (if needed)
      - username (can't have whitespace)
      - Profile
        - First name
        - Last name
        - avatar
        - bio
        - Residence
          - City
          - State / Province
          - Country
          - Zip Code
        - Contact no
      - Social Profiles
        - Insta
        - Twitter
        - Linked In
        - GitHub
      - Vortex
        - ToDO
        - Flow
        - Many more...
      - setting(optional, kuch jyada hi ho gaya ye toh)
        - Theme
        - font family
        - font size
        - Many More...
  */
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    require: [true, 'Email is required!'],
  },
  profile: {
    first_name: {
      type: String,
      required: [true, 'First Name is requried!']
    },
    last_name: {
      type: String,
      required: [true, 'Last Name is requried!']
    },
    avatar: String,
    bio: {
      type: String,
    },
    residence: {
      city: String,
      state: String,
      country: String,
      zip_code: Number,
    }
  },
  contact: Number,
  socialProfiles: [
    {
      instagram: {
        type: String,
        match: socials.instagram,
      },
      twitter: {
        type: String,
        match: socials.twitter,
      },
      github: {
        type: String,
        match: socials.github,
      },
      linkedin: {
        type: String,
        match: socials.linkedin,
      }
    }
  ],
})

const User = models.User || model('User', UserSchema);

export default User;
