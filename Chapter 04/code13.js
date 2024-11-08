const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/predict', async (req, res) => {
  const input = tf.tensor2d(req.body.input, [1, 2]);
  const prediction = model.predict(input);
  const output = prediction.dataSync();
  res.json({prediction: output});
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
