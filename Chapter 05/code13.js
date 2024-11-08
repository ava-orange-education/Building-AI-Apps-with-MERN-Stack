import React, { useState } from 'react';

  function VoiceInterface() {
    const [transcript, setTranscript] = useState('');

    const startListening = () => {
      const recognition = new window.webkitSpeechRecognition();
      recognition.onresult = (event) => {
        setTranscript(event.results[0][0].transcript);
      };
      recognition.start();
    };

    return (
      <div>
        <button onClick={startListening}>Start Listening</button>
        <p>Transcript: {transcript}</p>
      </div>
    );
  }

  export default VoiceInterface;
