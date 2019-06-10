const express =  require('express');
const app = express();

//Import our page routes
const pageRoutes = require('./routes/pages');
const blogRoutes = require('./routes/blogs');
const authorsRoutes = require('./routes/authors');
const sessionsRoutes = require('./routes/sessions');


// Reigster our page routes 
app.use('/', pageRoutes);
app.use('/blogs', blogRoutes);
app.use('/authors', authorsRoutes);
app.use('/', sessionsRoutes);


//export the changes
module.exports = app;