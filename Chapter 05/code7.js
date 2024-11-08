import React, { useState, useEffect } from 'react';
  import * as tf from '@tensorflow/tfjs';

  function SentimentAnalysis() {
    const [model, setModel] = useState(null);
    const [inputText, setInputText] = useState('');
    const [prediction, setPrediction] = useState('');

    useEffect(() => {
      async function loadModel() {
        const loadedModel = await tf.loadLayersModel('model.json');
        setModel(loadedModel);
      }
      loadModel();
    }, []);

    const analyzeSentiment = async () => {
      if (model) {
        const inputTensor = tf.tensor([inputText]);
        const predictionTensor = model.predict(inputTensor);
        const predictionValue = predictionTensor.dataSync()[0];
        setPrediction(predictionValue > 0.5 ? 'Positive' : 'Negative');
      }
    };

    return (
      <div>
        <textarea value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <button onClick={analyzeSentiment}>Analyze Sentiment</button>
        <p>Prediction: {prediction}</p>
      </div>
    );
  }

  export default SentimentAnalysis;

// model.json :- 
// [
//   {
//     "text": "This movie was absolutely amazing!",
//     "sentiment": 1
//   },
//   {
//     "text": "The food was terrible, wouldn't recommend it.",
//     "sentiment": 0
//   }
// ]
