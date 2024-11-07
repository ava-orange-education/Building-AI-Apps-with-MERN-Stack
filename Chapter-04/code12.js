const baseModel = await tf.loadLayersModel('model.json');
baseModel.trainable = false; // Freeze the base model layers

const model = tf.sequential();
model.add(baseModel);
model.add(tf.layers.dense({units: 10, activation: 'relu'}));
model.add(tf.layers.dense({units: 1, activation: 'sigmoid'}));

model.compile({
  loss: 'binaryCrossentropy',
  optimizer: 'adam',
  metrics: ['accuracy']
});

await model.fit(trainFeatures, trainLabels, {
  epochs: 10,
  validationData: [valFeatures, valLabels]
});

// model.json :-
// {
//   "modelTopology": {
//     "class_name": "Functional",
//     "config": {
//       "layers": [
//         {
//           "class_name": "InputLayer",
//           "config": {
//             "name": "input_1",
//             "dtype": "float32",
//             "input_shape": [224, 224, 3]
//           }
//         },
//         {
//           "class_name": "Conv2D",
//           "config": {
//             "name": "conv2d",
//             "filters": 32,
//             "kernel_size": [3, 3],
//             "activation": "relu"
//           }
//         },
//         {
//           "class_name": "MaxPooling2D",
//           "config": {
//             "name": "max_pooling2d",
//             "pool_size": [2, 2]
//           }
//         },
//         {
//           "class_name": "Flatten",
//           "config": {
//             "name": "flatten"
//           }
//         }
//       ]
//     }
//   },
//   "weightsManifest": [
//     {
//       "name": "conv2d/kernel",
//       "shape": [3, 3, 3, 32],
//       "dtype": "float32",
//       "paths": ["conv2d_weights.bin"]
//     },
//     {
//       "name": "conv2d/bias",
//       "shape": [32],
//       "dtype": "float32",
//       "paths": ["conv2d_bias.bin"]
//     }
//   ]
// }
