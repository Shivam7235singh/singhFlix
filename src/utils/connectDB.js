import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  throw new Error(
    "Please define the MONGODB_URL environment variable inside .env.local"
  );
}

// Global cache object to store the connection
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  // If a connection is already cached, return it
  if (cached.conn) {
    return cached.conn;
  }

  // If no promise exists, create one for establishing a new connection
  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // Disables mongoose buffering for better error handling
    };

    cached.promise = mongoose.connect(MONGODB_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise; // Await the resolved promise
  } catch (error) {
    cached.promise = null; // Reset the promise in case of an error
    throw error; // Re-throw the error for debugging
  }

  return cached.conn;
};

export default connectDB;
