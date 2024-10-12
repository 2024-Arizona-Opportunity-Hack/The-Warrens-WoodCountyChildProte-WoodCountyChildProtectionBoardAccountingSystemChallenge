require('dotenv').config();

const app = require('./App');
//const config = require('./src/config/config');

// Start the server
const PORT = /*config.port ||*/ 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});