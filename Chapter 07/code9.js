const express = require('express');
const bodyParser = require('body-parser');
const sentimentMiddleware = require('./sentimentMiddleware');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/analyze', sentimentMiddleware, (req, res) => {
  res.json({ sentiment: req.sentiment });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
