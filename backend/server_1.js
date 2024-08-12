const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // cors 미들웨어 추가

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // 모든 출처에서의 요청을 허용

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Simulated user data (in a real app, use a database)
let users = [
  { id: 1, username: "user1", password: "password1", score: 100 },
  { id: 2, username: "user2", password: "password2", score: 150 },
];

// POST endpoint to handle login check
app.post("/check_login", (req, res) => {
  const { username, password } = req.body;

  // Find user by username and password
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    // If user found, send user data back to client
    res.status(200).json({ username: user.username, score: user.score });
    console.error("로그인");
  } else {
    // If user not found, send error status back to client
    res.status(401).json({ error: "Invalid username or password" });
    console.error("Invalid username or password");
  }
});

// POST endpoint to handle score update
app.post("/check_score", (req, res) => {
  const { username, score } = req.body;

  // Find user by username
  const user = users.find((u) => u.username === username);

  if (user) {
    // Update user's score
    user.score = score;

    // Send updated user data back to client
    res.status(200).json({ username: user.username, score: user.score });
  } else {
    // If user not found, send error status back to client
    res.status(404).json({ error: "User not found" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// node server.js
