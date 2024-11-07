import React, { useState, useEffect } from 'react';
  import * as tf from '@tensorflow/tfjs';

  function SpamDetection() {
    const [model, setModel] = useState(null);
    const [emailText, setEmailText] = useState('');
    const [isSpam, setIsSpam] = useState(false);

    useEffect(() => {
      async function loadModel() {
        const loadedModel = await tf.loadLayersModel('semi-supervised-model.json');
        setModel(loadedModel);
      }
      loadModel();
    }, []);

    const detectSpam = async () => {
      if (model) {
        const inputTensor = tf.tensor([emailText]);
        const predictionTensor = model.predict(inputTensor);
        const predictionValue = predictionTensor.dataSync()[0];
        setIsSpam(predictionValue > 0.5);
      }
    };

    return (
      <div>
        <textarea value={emailText} onChange={(e) => setEmailText(e.target.value)} />
        <button onClick={detectSpam}>Detect Spam</button>
        <p>{isSpam ? 'Spam' : 'Not Spam'}</p>
      </div>
    );
  }

  export default SpamDetection;

// semi-supervised-model.json :-

// [
//   {"text": "This is a great product!", "label": 1}, 
//   {"text": "I hate this product.", "label": 0}, 
//   {"text": "Buy now, limited time offer!", "label": 1},
//   {"text": "Unsubscribe from this email.", "label": 1}
// ]
