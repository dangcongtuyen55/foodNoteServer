import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI, {
      // ✅ Từ Mongoose 6 trở lên, các tùy chọn này tự bật mặc định
      // nên bạn KHÔNG cần `useUnifiedTopology`, `useNewUrlParser`, hay `useCreateIndex`
    });

    console.log("✅ MongoDB connected success");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
};
export default connectDB;
