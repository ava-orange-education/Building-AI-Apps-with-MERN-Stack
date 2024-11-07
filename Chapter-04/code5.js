const axios = require('axios');
  const fs = require('fs');
  const MongoClient = require('mongodb').MongoClient;

  // Fetching data from an API
  axios.get('https://api.example.com/data')
    .then(response => {
      const data = response.data;
      // Process the data
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });

  // Reading data from a file
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    const jsonData = JSON.parse(data);
    // Process the data
  });

  // Fetching data from a MongoDB database
  MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
      console.error('Error connecting to MongoDB:', err);
      return;
    }
    const db = client.db('mydatabase');
    db.collection('mycollection').find({}).toArray((err, data) => {
      if (err) {
        console.error('Error fetching data from MongoDB:', err);
        return;
      }
    });
  });
