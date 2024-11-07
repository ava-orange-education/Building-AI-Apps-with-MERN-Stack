const express = require('express');
const bodyParser = require('body-parser');
const sanitizeInput = require('./sanitizeInput');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/register', sanitizeInput, (req, res) => {
  res.send('Data is sanitized');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
