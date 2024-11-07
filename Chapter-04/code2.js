const tf = require('@tensorflow/tfjs-node-gpu');

// Define a simple tensor.
const tensor = tf.tensor([1, 2, 3, 4]);
tensor.print(); // This will print the tensor's values to the console.

// Simple operation: square the values of the tensor.
const squaredTensor = tensor.square();
squaredTensor.print(); // This will print the squared values.
