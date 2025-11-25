import mongoose from "mongoose";
const mongodbport = process.env.MONGODB

const connectDB = async () => {
  try {
    await mongoose.connect(mongodbport);
    console.log("'✅ MongoDB Connected'");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;

