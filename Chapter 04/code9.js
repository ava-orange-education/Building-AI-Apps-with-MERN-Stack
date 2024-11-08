const k = 5;
const foldSize = Math.floor(features.shape[0] / k);

for (let i = 0; i < k; i++) {
  const validationStart = i * foldSize;
  const validationEnd = validationStart + foldSize;

  const validationFeatures = features.slice([validationStart, 0], [foldSize, -1]);
  const validationLabels = labels.slice([validationStart, 0], [foldSize, -1]);

  const trainFeatures = tf.concat([
    features.slice([0, 0], [validationStart, -1]),
    features.slice([validationEnd, 0], [features.shape[0] - validationEnd, -1])
  ]);

  const trainLabels = tf.concat([
    labels.slice([0, 0], [validationStart, -1]),
    labels.slice([validationEnd, 0], [labels.shape[0] - validationEnd, -1])
  ]);

  // Train and evaluate the model for each fold
  await model.fit(trainFeatures, trainLabels, {epochs: 50, batchSize: 2});
  const result = await model.evaluate(validationFeatures, validationLabels);
  console.log(`Fold ${i + 1}: loss = ${result[0].dataSync()}, accuracy = ${result[1].dataSync()}`);
}
