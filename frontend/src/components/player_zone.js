import React, { useState } from 'react';
import randomLetter from '../functions/random_letter.js';
import letterDetection from '../functions/letter_detection.js';
import damage from '../functions/damage.js';

const PlayerZone = ({ onDamage }) => {
  const [currentLetter, setCurrentLetter] = useState(randomLetter());
  const [nextLetter, setNextLetter] = useState(randomLetter());
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (e) => {
    const input = e.target.value;
    setUserInput(input);

    if (letterDetection(input, currentLetter)) {
      onDamage(1); // กำหนดค่าความเสียหาย
      setCurrentLetter(nextLetter);
      setNextLetter(randomLetter());
      setUserInput('');
    }
  };

  return (
    <div>
      <p>Type: {currentLetter}</p>
      <p>Next: {nextLetter}</p>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        maxLength={1}
      />
    </div>
  );
};

export default PlayerZone;