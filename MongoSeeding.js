import { MongoClient } from "mongodb";
// Replace the uri string with your MongoDB deployment's connection string.
async function run() {
  const uri = "mongodb://0.0.0.0:27017";
  const client = new MongoClient(uri);
var i;
  for(i=0;i<1001;i++)
{
  const uri = "mongodb://0.0.0.0:27017";
  const client = new MongoClient(uri);
  try {
    const database = client.db("admin");
    const haiku = database.collection("first");
    // create a document to insert
    const doc = {
      title: "Record of a Shriveled Datum",
      content: "No bytes, no problem. Just insert a document, in MongoDB",
    }
    const result = await haiku.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }}
}
run().catch(console.dir);