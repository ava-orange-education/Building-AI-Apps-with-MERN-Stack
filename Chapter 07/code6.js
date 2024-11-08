const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('First middleware');
  req.customProperty = 'Custom Value';
  next();
});

app.use((req, res, next) => {
  console.log('Second middleware');
  console.log('Custom Property:', req.customProperty);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
