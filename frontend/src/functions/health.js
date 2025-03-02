const health = (healthAmount) => {
    // จำลองการส่ง API ไปยังเซิร์ฟเวอร์เพื่ออัปเดตพลังชีวิตของบอส
    console.log(`Boss Health: ${healthAmount}`);
    return Promise.resolve(); // จำลองการตอบกลับจาก API
  };
  
export default health;