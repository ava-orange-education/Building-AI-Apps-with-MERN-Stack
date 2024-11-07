const tf = require('@tensorflow/tfjs');
const fs = require('fs');

// Load data
const rawData = JSON.parse(fs.readFileSync('data.json', 'utf8'));

// Separate numerical and categorical data
const numericalData = rawData.map(row => row.slice(0, 3));
const categoricalData = rawData.map(row => row[3]);

// Convert numerical data to tensor
let numericalTensor = tf.tensor2d(numericalData);

// Handle missing values
numericalTensor = numericalTensor.where(numericalTensor.isNaN(), numericalTensor.mean());

// Standardize numerical data
const { mean, variance } = tf.moments(numericalTensor, 0);
const std = tf.sqrt(variance);
numericalTensor = numericalTensor.sub(mean).div(std);

// One-hot encode categorical variables
const categories = ['cat', 'dog', 'fish'];
const categoricalLabels = categoricalData.map(label => categories.indexOf(label));
const categoricalTensor = tf.oneHot(tf.tensor1d(categoricalLabels, 'int32'), categories.length);

// Print the preprocessed data
numericalTensor.print();
categoricalTensor.print();


// 	data.json:-
// 		[
//   [1, 2, 3, "cat"],
//   [4, 5, 6, "dog"],
//   [7, 8, 9, "fish"],
//   [10, 11, 12, "cat"],
//   [13, 14, 15, "dog"],
//   [16, 17, 18, "fish"],
//   [19, 20, 21, "cat"],
//   [22, 23, 24, "dog"],
//   [25, 26, 27, "fish"],
//   [28, 29, 30, "cat"]
// ]			
