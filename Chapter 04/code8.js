const tf = require('@tensorflow/tfjs');

// Example data: features and labels
const features = tf.tensor2d([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]);
const labels = tf.tensor2d([[0], [1], [0], [1], [0], [1]]);

// Split the data into training (80%) and test (20%) sets
const [trainFeatures, testFeatures] = tf.split(features, [4, 2]);
const [trainLabels, testLabels] = tf.split(labels, [4, 2]);
