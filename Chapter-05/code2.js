import React, { useState } from 'react';

  function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    return (
      <div>
        <label>
          First name:
          <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label>
          Last name:
          <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <p>Your full name is: {firstName} {lastName}</p>
      </div>
    );
  }