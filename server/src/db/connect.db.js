import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

const dbURI = process.env.MONGO_URI;


const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {

    });

    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); // Exit process if DB connection fails
  }

  // Reconnect logic
  mongoose.connection.on('disconnected', () => {
    console.warn('MongoDB connection lost. Attempting to reconnect...');
  });

  mongoose.connection.on('reconnected', () => {
    console.log('MongoDB reconnected');
  });

  mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err.message}`);
  });
};

export default connectDB;
