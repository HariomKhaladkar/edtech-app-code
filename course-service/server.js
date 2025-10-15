const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello from the Course Service! The FINAL, SECURE, and TESTED pipeline! yay');
});

app.listen(PORT, () => {
  console.log(`Course service is running on port ${PORT}`);
});