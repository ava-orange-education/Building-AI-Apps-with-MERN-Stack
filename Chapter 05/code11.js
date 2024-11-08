import React, { useState } from 'react';
import axios from 'axios';

function PredictiveTextInput() {
  const [inputText, setInputText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (text) => {
    const response = await axios.post('https://api.example.com/predict', { text });
    setSuggestions(response.data.suggestions);
  };

  const handleChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    fetchSuggestions(text);
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleChange} />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
}

export default PredictiveTextInput;
