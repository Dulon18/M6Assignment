const express = require('express');
const app = express();

// Import and use routes
const apiRoutes = require('./src/Routes/api.js');
app.use('/api', apiRoutes);

// Server initialization
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
