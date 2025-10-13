const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello from the Course Service! Welcome to your learning journey!');
});

app.listen(PORT, () => {
  console.log(`Course service is running on port ${PORT}`);
});