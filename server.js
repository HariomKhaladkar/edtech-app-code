 
const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  // Change this line
res.send('Hello from the User Service! Version 2.0.0 is LIVE!');
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});