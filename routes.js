const express =  require('express');
const app = express();

//Import our page routes
const pageRoutes = require('./routes/pages');

// Reigster our page routes 
app.use('/', pageRoutes);

//export the changes
module.exports = app;