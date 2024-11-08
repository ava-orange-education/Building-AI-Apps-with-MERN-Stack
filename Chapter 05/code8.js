import React, { useState, useEffect } from 'react';
  import * as tf from '@tensorflow/tfjs';

  function UserClustering() {
    const [model, setModel] = useState(null);
    const [userData, setUserData] = useState([]);
    const [clusters, setClusters] = useState([]);

    useEffect(() => {
      async function loadModel() {
        const kmeans = new tf.KMeans({ k: 3 });
        setModel(kmeans);
      }
      loadModel();
    }, []);

    const clusterUsers = async () => {
      if (model) {
        const userTensor = tf.tensor(userData);
        const clusterIndices = model.fitPredict(userTensor);
        setClusters(clusterIndices);
      }
    };

    return (
      <div>
        <button onClick={clusterUsers}>Cluster Users</button>
        <p>Clusters: {clusters.join(', ')}</p>
      </div>
    );
  }

  export default UserClustering;
