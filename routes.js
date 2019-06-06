const express =  require('express');
const app = express();

//Import our page routes
const pageRoutes = require('./routes/pages');
const blogRoutes = require('./routes/blogs');

// Reigster our page routes 
app.use('/', pageRoutes);
app.use('/blogs', blogRoutes);

//export the changes
module.exports = app;