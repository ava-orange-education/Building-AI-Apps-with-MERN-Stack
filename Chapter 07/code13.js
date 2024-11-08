const tf = require('@tensorflow/tfjs-node');
const loadModel = require('./model');

const modelPromise = loadModel();

async function textClassificationMiddleware(req, res, next) {
  try {
    const model = await modelPromise;
    const inputText = req.body.text; // Assuming input text is sent in the request body
    const inputTensor = tf.tensor([inputText]);
    const prediction = model.predict(inputTensor);
    const classIndex = prediction.argMax(-1).dataSync()[0];
    req.classification = classIndex;
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = textClassificationMiddleware;
