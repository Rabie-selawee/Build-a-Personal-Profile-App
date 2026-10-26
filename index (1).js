import express from 'express';
const app = express();

// 1. المسار الرئيسي /
app.get('/', (req, res) => {
  res.send("Welcome to Camper Bot's homepage!");
});

// 2. مسار الهوايات /hobbies
app.get('/hobbies', (req, res) => {
  res.send("I cycle, go boating, and play guitar.");
});

// 3. مسار المهارات /skills
app.get('/skills', (req, res) => {
  res.send("JavaScript, Node.js, and Express.js!");
});

// 4. مسار الـ API المحدث بالكامل /api/profile
app.get('/api/profile', (req, res) => {
  res.json({
    name: "Camper Bot",
    hobbies: ["cycling", "boating", "guitar"],
    skills: ["JavaScript", "Node.js", "Express.js"]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});