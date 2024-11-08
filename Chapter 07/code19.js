const tf = require('@tensorflow/tfjs-node');
  const express = require('express');
  const bodyParser = require('body-parser');

  const app = express();
  const port = 3000;

  let model;

  async function loadModel() {
    model = await tf.loadLayersModel('file://path/to/model/model.json');
  }

  loadModel();

  app.use(bodyParser.json());

  app.post('/predict', async (req, res) => {
    const inputData = req.body.data;
    const inputTensor = tf.tensor(inputData);
    const prediction = model.predict(inputTensor);
    const outputData = prediction.dataSync();
    res.json({ result: outputData });
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
