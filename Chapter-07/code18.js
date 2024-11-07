const express = require('express');
const app = express();
const port = 3000;

app.use(async (req, res, next) => {
  try {
    const result = await someAsyncFunction();
    req.result = result;
    next();
  } catch (error) {
    next(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
