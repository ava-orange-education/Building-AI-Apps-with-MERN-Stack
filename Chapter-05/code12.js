import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SmartRecommendations() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const response = await axios.get('https://api.example.com/recommendations');
      setRecommendations(response.data);
    };
    fetchRecommendations();
  }, []);

  return (
    <div>
      <h2>Recommended for You</h2>
      <ul>
        {recommendations.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SmartRecommendations;
