const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('Request URL:', req.originalUrl);
  next();
});

router.get('/user/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

const app = express();
app.use('/api', router);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
