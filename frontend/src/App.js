import React, { useState, useEffect } from "react";
import BossZone from "./components/boss_zone";
import PlayerZone from "./components/player_zone";
import "./App.css";

const App = () => {
  const [bossHealth, setBossHealth] = useState("Loading...");

  // ฟังก์ชันดึงค่า HP ของบอส
  async function fetchBossHP() {
    try {
      const response = await fetch(
        "https://get-boss-hp-617724883475.asia-southeast1.run.app/boss-hp"
      );
      const data = await response.json();
      console.log(data);
      if (data.current_hp >= 0) {
        setBossHealth(data.current_hp);
      } else {
        setBossHealth("Error loading HP");
      }
    } catch (error) {
      console.error("Error fetching boss HP:", error);
      setBossHealth("Error fetching HP");
    }
  }

  // เรียก API ตอนโหลด component
  useEffect(() => {
    fetchBossHP();
  }, []);
  async function attackBoss(damage) {
    try {
      const response = await fetch(
        "https://record-damage-617724883475.asia-southeast1.run.app/attack",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ damage: damage }),
          mode: "cors",
        }
      );

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error attacking boss:", error);
    }
  }
  return (
    <div className="container">
      <BossZone bossHealth={bossHealth} />
      <PlayerZone onDamage={attackBoss} />
    </div>
  );
};

export default App;
