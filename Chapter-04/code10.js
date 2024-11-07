// Import TensorFlow.js
const tf = require('@tensorflow/tfjs');

// Define a simple neural network model
const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });

// Generate some synthetic data for training
const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
const ys = tf.tensor2d([2, 3, 5, 7], [4, 1]);

// Train the model
async function train() {
  await model.fit(xs, ys, { epochs: 100 });
}

// Evaluate the model
async function evaluate() {
  const loss = model.evaluate(xs, ys);
  console.log('Loss:', await loss.data());
}

// Run the training and evaluation
async function main() {
  await train();
  await evaluate();
}

main().then(() => console.log('Done'));
