import React, { useState } from 'react';
  import axios from 'axios';

  function ApiRequestComponent() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');

    const handleRequest = async () => {
      try {
        const result = await axios.post('https://api.example.com/endpoint', { input });
        setResponse(result.data);
        setError('');
      } catch (err) {
        setError('Error making request');
        setResponse('');
      }
    };

    return (
      <div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleRequest}>Send Request</button>
        {response && <p>Response: {response}</p>}
        {error && <p>{error}</p>}
      </div>
    );
  }

  export default ApiRequestComponent;
