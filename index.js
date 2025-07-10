const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Jenkins!');
});

if (require.main === module) {
  // Only listen if this file is run directly (not required/imported)
  app.listen(3000, () => console.log('Server running on port 3000'));
}

module.exports = app;

