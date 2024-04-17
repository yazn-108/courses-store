import mongoose from 'mongoose'
const MONGODB_URL = process.env.MONGODB_URL
const connect = async () => {
  const connectionState = mongoose.connection.readyState;
  if (connectionState === 1) {
    console.log("already connected");
    return;
  }
  if (connectionState === 2) {
    console.log("connecting...");
    return;
  }
  try {
    mongoose.connect(MONGODB_URL, {
      dbName: "restApi",
      bufferCommands: true
    })
    console.log("connected")
  } catch (error) {
    console.log("error in connection" + error)
    throw new Error("error in connection")
  }
}
export default connect