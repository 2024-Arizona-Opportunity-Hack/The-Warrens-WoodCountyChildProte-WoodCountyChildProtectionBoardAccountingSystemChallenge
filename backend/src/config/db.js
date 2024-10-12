const { MongoClient, ServerApiVersion } = require('mongodb');

// Use the connection string from environment variables
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let dbInstance;

// Function to connect to MongoDB
async function connectDB() {
    // If a connection already exists, return it
    if (dbInstance) {
        return dbInstance;  
    }

    try {
        // Connect the client to the MongoDB Atlas cluster
        await client.connect();
        console.log("Connected to MongoDB Atlas");

        // Replace 'myDatabase' with your actual database name
        dbInstance = client.db('myDatabase');
        return dbInstance;
    } catch (error) {
        console.error("Error connecting to MongoDB Atlas:", error);
        process.exit(1);  // Exit if connection fails
    }
}

module.exports = { connectDB };
