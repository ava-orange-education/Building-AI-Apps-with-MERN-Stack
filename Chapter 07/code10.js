const tf = require('@tensorflow/tfjs-node');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

async function loadModel() {
  const model = await tf.loadLayersModel('image-classification-model.json');
  return model;
}

const modelPromise = loadModel();

async function imageClassificationMiddleware(req, res, next) {
  try {
    const model = await modelPromise;
    const imagePath = req.file.path;
    const imageBuffer = fs.readFileSync(imagePath);
    const imageTensor = tf.node.decodeImage(imageBuffer);
    const prediction = model.predict(imageTensor);
    const classIndex = prediction.argMax(-1).dataSync()[0];
    req.classification = classIndex;
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = { imageClassificationMiddleware, upload };

// image-classification-model.json :- 

// {
// "format": "layers-model",
// "modelTopology": {
//  "class_name": "Sequential",
//  "config": {
//    "layers": [
//      {
//        "class_name": "Conv2D",
//        "config": {
//          "filters": 32,
//          "kernel_size": [3, 3],
//          "activation": "relu",
//          "input_shape": [28, 28, 1]
//        }
//      },
//      {
//        "class_name": "Dense",
//        "config": {
//          "units": 10,
//          "activation": "softmax"
//        }
//      }
//    ]
//  }
// },
// "weightsManifest": [
//  {
//    "paths": ["group1-shard1of2.bin"],
//    "weights": [
//      {
//        "name": "conv2d/kernel",
//        "shape": [3, 3, 1, 32],
//        "dtype": "float32"
//      },
//    ]
//  },
// ]
// }
