const { MongoClient, Collection } = require('mongodb');

const uri = process.env.MONGODB_URI;

const db = module.exports;

const client = new MongoClient(uri);

db.connect= async function () {
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();
            console.log("Connected successfully to server");
            return;
      } catch {
            console.log('error');
      }
}


db.searchData = async (collectionName, payload) => {
    const data = await client.db('MERN-project').collection(collectionName).find(payload).toArray();
    return data;
}

db.insertData = async (collectionName, payload) => {
      const data = await client.db('MERN-project').collection(collectionName).insertOne(payload);
      return data;
}