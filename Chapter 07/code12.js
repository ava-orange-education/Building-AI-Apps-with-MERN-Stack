const express = require('express');
const bodyParser = require('body-parser');
const aiMiddleware = require('./aiMiddleware');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/predict', aiMiddleware, (req, res) => {
  res.json({ result: req.aiResult });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
