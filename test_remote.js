const { MongoClient } = require('mongodb');
const MONGO_URL = "mongodb+srv://sandesh9580:sandesh54321@pandit.zjt9iqc.mongodb.net/";
const DB_NAME = "pandit_booking";

async function test() {
  console.log("Remote: Connecting to MongoDB...");
  try {
    const client = await MongoClient.connect(MONGO_URL, { serverSelectionTimeoutMS: 5000 });
    console.log("Remote: Successfully connected!");
    await client.close();
  } catch (err) {
    console.error("Remote: Connection failed:", err);
  }
}
test();
