import mongoose from 'mongoose';

let isConnected = false;
const URI: any = process.env.MONGODB_URI;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected!!');
    return;
  }
  try {
    await mongoose.connect(URI, {
      dbName: 'vortex',
    });
    isConnected = true;
    console.log('MongoDB Connected!!');
  } catch (error) {
    console.log(error);
  }
}
