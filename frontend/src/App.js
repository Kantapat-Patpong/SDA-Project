import React, { useState } from 'react';
import BossZone from './components/boss_zone';
import PlayerZone from './components/player_zone';
import health from './functions/health';
import './App.css'

const App = () => {
  const [bossHealth, setBossHealth] = useState(100000);

  const handleDamage = (damageAmount) => {
    if (bossHealth - damageAmount <= 0) {
      setBossHealth(0);
    } else {
      setBossHealth(bossHealth - damageAmount);
    }
    health(bossHealth);
  };

  return (
    <div class='container'>
      <BossZone bossHealth={bossHealth} />
      <PlayerZone onDamage={handleDamage} />
    </div>
  );
};

export default App;