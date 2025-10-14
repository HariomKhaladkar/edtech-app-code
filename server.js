const express = require('express');
const app = express();
const PORT = 8080;

// Read the message from an environment variable, with a fallback default
const message = process.env.GREETING_MESSAGE || "Hello from the default User Service!";

app.get('/', (req, res) => {
  // Use the dynamic message
  res.send('Hello from Version 8.0! This pipeline is TESTED!');
});

app.listen(PORT, () => {
  console.log(`User service is running on port ${PORT}`);
});