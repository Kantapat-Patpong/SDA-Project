const express = require('express');
const { createClient } = require('@redis/client');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(express.json());  // ให้ Express แปลง JSON request body
app.use(cors());

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
      res.json({ bossHealth: bossHealth || 100000 });  // ส่งข้อมูลกลับไปยัง frontend
    } catch (error) {
      console.error('Error fetching boss health:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

// Route สำหรับลดเลือดบอส (GET)
app.post('/boss/hit', async (req, res) => {
    try {
        const { damage } = req.body;  // ดึง damage จาก body
        if (!damage || typeof damage !== 'number') {
            return res.status(400).json({ error: 'Invalid damage value' });
        }

        let bossHealth = await redisClient.get('bossHealth');  
        bossHealth = bossHealth ? parseInt(bossHealth) : 100000;

        bossHealth -= damage;
        await redisClient.set('bossHealth', bossHealth);

        res.json({ bossHealth });

    } catch (error) {
        console.error('Error handling hit request:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
