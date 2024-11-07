const tf = require('@tensorflow/tfjs');

// Example data: features and labels
const features = tf.tensor2d([[1, 2], [2, 3], [3, 4], [4, 5]], [4, 2]);
const labels = tf.tensor2d([[0], [1], [0], [1]], [4, 1]);

// Calculate the mean and variance
const { mean, variance } = tf.moments(features, 0);

// Calculate the standard deviation
const std = tf.sqrt(variance);

// Normalize the data
const normalizedFeatures = features.sub(mean).div(std);

// Print the normalized features
normalizedFeatures.print();
