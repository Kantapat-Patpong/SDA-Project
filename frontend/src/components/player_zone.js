import React, { useState } from 'react';
import randomLetter from '../functions/random_letter.js';
import letterDetection from '../functions/letter_detection.js';
import './player_zone.css';

const PlayerZone = ({ onDamage }) => {
  const [currentLetter, setCurrentLetter] = useState(randomLetter());
  const [damage, setDamage] = useState(0)
  const [nextLetter, setNextLetter] = useState(randomLetter());
  const [userInput, setUserInput] = useState('');

  const handleInputChange = async (e) => {
    const input = e.target.value;
    setUserInput(input);

    if (letterDetection(input, currentLetter)) {
      await onDamage(10000); // กำหนดค่าความเสียหาย
      setDamage(damage + 1);
      setCurrentLetter(nextLetter);
      setNextLetter(randomLetter());
      setUserInput('');
    }
  };

  return (
    <div class='player-zone'>
      <p class='text-current'>Type: {currentLetter}</p>
      <p class='text'>Next: {nextLetter}</p>
      <p class='text'>Damage: {damage}</p>
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