const tf = require('@tensorflow/tfjs');

const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));

model.compile({loss: 'meanSquaredError', optimizer: 'adam'});

const xs = tf.tensor2d([1, 2, 3, 4, 5, 6], [6, 1]);
const ys = tf.tensor2d([3, 6, 9, 12, 15, 18], [6, 1]);

model.fit(xs, ys, {epochs: 100}).then(() => {
  model.predict(tf.tensor2d([7], [1, 1])).print();
});
