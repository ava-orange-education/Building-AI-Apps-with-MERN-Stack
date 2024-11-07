const express = require('express');
const bodyParser = require('body-parser');
const { imageClassificationMiddleware, upload } = require('./imageClassificationMiddleware');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/classify', upload.single('image'), imageClassificationMiddleware, (req, res) => {
  res.json({ classification: req.classification });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
