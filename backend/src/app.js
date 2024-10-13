const express = require('express');
const cors = require('cors');

//routes
const fundRoutes = require('./routes/fundRoutes')
const fileUploadRoutes = require('./routes/fileUpload')

const app = express();

//middleware set up
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
  }));

//routes
app.use('/api/fund', fundRoutes);
app.use('/api/fileUpload', fileUploadRoutes)

module.exports = app;