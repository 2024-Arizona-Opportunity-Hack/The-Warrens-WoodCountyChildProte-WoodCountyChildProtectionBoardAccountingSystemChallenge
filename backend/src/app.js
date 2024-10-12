const express = require('express');
const cors = require('cors');

//routes
const fundRoutes = require('./routes/fundRoutes')

const app = express();

//middleware set up
app.use(express.json());
app.use(cors());

//routes
app.use('/api/fund', fundRoutes);

module.exports = app;