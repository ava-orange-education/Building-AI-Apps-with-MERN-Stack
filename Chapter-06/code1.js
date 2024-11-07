  // Import MongoClient from the MongoDB package
  const { MongoClient } = require('mongodb');

  // Connection URI
  const uri = 'mongodb://localhost:27017';

  // Create a new MongoClient
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  // Connect to the MongoDB server
  async function connectToMongoDB() {
    try {
      await client.connect();
      console.log('Connected to MongoDB');
      const database = client.db('myDatabase');
      const collection = database.collection('myCollection');
      // Perform operations on the collection
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    } finally {
      await client.close();
    }
  }

  connectToMongoDB();