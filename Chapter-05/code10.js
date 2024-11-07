import React, { useState, useEffect } from 'react';
  import * as tf from '@tensorflow/tfjs';

  function ProductRecommendations() {
    const [model, setModel] = useState(null);
    const [userPreferences, setUserPreferences] = useState([]);
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
      async function loadModel() {
        const loadedModel = await tf.loadLayersModel('recommendation-model.json');
        setModel(loadedModel);
      }
      loadModel();
    }, []);

    const getRecommendations = async () => {
      if (model) {
        const inputTensor = tf.tensor([userPreferences]);
        const predictionTensor = model.predict(inputTensor);
        const recommendedProducts = predictionTensor.dataSync();
        setRecommendations(recommendedProducts);
      }
    };

    return (
      <div>
        <button onClick={getRecommendations}>Get Recommendations</button>
        <ul>
          {recommendations.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
      </div>
    );
  }

  export default ProductRecommendations;

// recommendation-model.json :- 

// [
//   {
//     "user_id": 1,
//     "product_id": 2,
//     "rating": 5,
//   },
//   {
//     "user_id": 1,
//     "product_id": 3,
//     "rating": 4,
//   },
//   {
//     "user_id": 2,
//     "product_id": 1,
//     "rating": 3,
//   },
//   {
//     "user_id": 2,
//     "product_id": 3,
//     "rating": 5,
//   }
// ]
