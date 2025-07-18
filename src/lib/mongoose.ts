import mongoose from "mongoose";
const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable in .env.local"
  );
}

const connect_to_database = () =>
  mongoose
    .connect(MONGODB_URI)
    .then((res) => console.log("MongoDb is Connected"))
    .catch((err) => console.log(err));

export default connect_to_database;
