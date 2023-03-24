import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then((db) => {
      console.log("MongoDB Connection established");
    })
    .catch((err) => {
      console.log(`Error connecting to mongodb database ${err.message}`);
    });
};

export default connectDB;
