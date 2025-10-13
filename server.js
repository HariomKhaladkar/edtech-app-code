 
const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  // Change this line
res.send('Hello from Version 6.0! The AUTOMATION is RESTORED!');
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});