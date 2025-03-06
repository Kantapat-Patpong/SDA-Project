import React from 'react';
import './boss_zone.css';

const BossZone = ({ bossHealth }) => {

  const calBlood = () => {
    return (bossHealth / 100000) * 100;
  };

  return (
    <div className='boss-zone'>
      <img src='../../images/boss.png' alt='boss' className='boss-image'/>
      <h2>Boss Health : {bossHealth}</h2>
      <div className='bloodgauge'>
        <div className='bloodleft' style={{ width: `${calBlood()}%` }}></div>
      </div>
    </div>
  );
};

export default BossZone;