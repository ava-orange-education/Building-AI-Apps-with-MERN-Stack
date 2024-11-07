const tf = require('@tensorflow/tfjs');

const model = tf.sequential();
model.add(tf.layers.dense({units: 2, inputShape: [2], activation: 'softmax'}));

model.compile({loss: 'categoricalCrossentropy', optimizer: 'adam'});

const xs = tf.tensor2d([[0, 0], [0, 1], [1, 0], [1, 1]], [4, 2]);
const ys = tf.tensor2d([[1, 0], [0, 1], [0, 1], [1, 0]], [4, 2]);

model.fit(xs, ys, {epochs: 50}).then(() => {
  model.predict(tf.tensor2d([[0.5, 0.5]], [1, 2])).print();
});
