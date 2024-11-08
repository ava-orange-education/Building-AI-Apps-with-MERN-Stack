  // Import Mongoose
  const mongoose = require('mongoose');

  // Connection URI
  const uri = 'mongodb://localhost:27017/myDatabase';

  // Connect to MongoDB using Mongoose
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB with Mongoose'))
    .catch(error => console.error('Error connecting to MongoDB:', error));

  // Define a schema
  const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
  });

  // Create a model
  const User = mongoose.model('User', userSchema);

  // Create and save a new user
  const newUser = new User({ name: 'Alice', age: 28, email: 'alice@example.com' });
  newUser.save()
    .then(() => console.log('User saved'))
    .catch(error => console.error('Error saving user:', error));