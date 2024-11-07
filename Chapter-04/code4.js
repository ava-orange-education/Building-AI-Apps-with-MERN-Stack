const tf = require('@tensorflow/tfjs');

const model = tf.sequential();

model.add(tf.layers.dense({units: 10, inputShape: [4], activation: 'relu'}));

model.add(tf.layers.dense({units: 3, activation: 'softmax'}));

model.compile({
  loss: 'categoricalCrossentropy',
  optimizer: 'adam',
  metrics: ['accuracy']
});

model.summary();
