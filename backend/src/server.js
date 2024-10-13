require('dotenv').config();

const app = require('./app');
//const config = require('./src/config/config');

// Start the server
const PORT = /*config.port ||*/ 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});