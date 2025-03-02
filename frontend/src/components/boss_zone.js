import React from 'react';
import './boss_zone.css';

const BossZone = ({ bossHealth }) => {
  return (
    <div>
      <img src='../../images/boss.png' alt='boss'/>
      <h2>Boss Health: {bossHealth}</h2>
    </div>
  );
};

export default BossZone;