const { connectDB } = require('../config/db');

async function getFund(req, res) {
    try {
        const db = await connectDB();
        const fundCollection = db.collection('funds');
        const funds = await fundCollection.find({}).toArray();

        res.status(200).json(funds);
    } catch (error) {
        console.error('Error fetching funds', error);
        res.status(500).json({ message: 'Server error' });
    }
}

// Insert a new fund
async function insertFund(req, res) {
    try {
        const { name, amount, description } = req.body; // Extract data from request body

        console.log(req.body);
        if (!name || !amount) {
            return res.status(400).json({ message: 'Name and amount are required' });
        }

        const db = await connectDB();
        const fundCollection = db.collection('funds'); // Assuming you have a 'funds' collection
        const result = await fundCollection.insertOne({ name, amount, description });

        res.status(201).json({ message: 'Fund created successfully', fund: result });
    } catch (error) {
        console.error('Error inserting fund', error);
        res.status(500).json({ message: 'Server error' });
    }
}

// Delete a fund
async function deleteFund(req, res) {
    try {
        const { id } = req.params; // Fund ID from URL

        const db = await connectDB();
        const fundCollection = db.collection('funds');
        const result = await fundCollection.deleteOne({ _id: new require('mongodb').ObjectId(id) });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Fund not found' });
        }

        res.status(200).json({ message: 'Fund deleted successfully' });
    } catch (error) {
        console.error('Error deleting fund', error);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = { getFund, insertFund, deleteFund };
