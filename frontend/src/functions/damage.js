const damage = (damageAmount) => {
    // จำลองการส่ง API ไปยังเซิร์ฟเวอร์เพื่อลดพลังชีวิตของบอส
    console.log(`Damage: ${damageAmount}`);
    return Promise.resolve(); // จำลองการตอบกลับจาก API
  };
  
export default damage;