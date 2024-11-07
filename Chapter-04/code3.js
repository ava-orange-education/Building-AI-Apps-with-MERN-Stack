const w = tf.variable(tf.randomNormal([4, 10]));
const b = tf.variable(tf.zeros([10]));
const x = tf.tensor([1, 2, 3, 4]);
const y = tf.matMul(x, w).add(b).relu();
y.print();
