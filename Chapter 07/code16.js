const express = require('express');
const bodyParser = require('body-parser');
const validateInput = require('./validateInput');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/submit', validateInput, (req, res) => {
  res.send('Data is valid');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
