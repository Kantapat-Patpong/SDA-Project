const express = require('express');
const { createClient } = require('@redis/client');
const app = express();
const port = 3001;

// เชื่อมต่อกับ Redis ที่อยู่ในคอนเทนเนอร์ Docker
const redisClient = createClient({
  url: 'redis://localhost:6379'  // หาก Redis ทำงานใน localhost
});

redisClient.connect()
  .then(() => {
    console.log('Connected to Redis');
  })
  .catch((err) => {
    console.error('Error connecting to Redis:', err);
  });

// Route สำหรับเช็คเลือดบอส
app.get('/boss/hp', async (req, res) => {
  try {
    const bossHealth = await redisClient.get('bossHealth');
    res.json({ bossHealth: bossHealth || 100000 });  // ถ้ายังไม่ตั้งค่าไว้ จะคืนค่า 100000
  } catch (err) {
    res.status(500).send('Error getting boss health');
  }
});

// Route สำหรับลดเลือดบอส (GET)
app.get('/boss/hit', async (req, res) => {
    try {
      const currentHealth = await redisClient.get('bossHealth') || 100000;
      const newHealth = currentHealth - 1;  // ลดเลือดบอสลง 1
      await redisClient.set('bossHealth', newHealth);
      res.json({ newHealth });
    } catch (err) {
      res.status(500).send('Error hitting boss');
    }
  });  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
