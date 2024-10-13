const { connectDB } = require('../config/db');

// Insert multiple funds (bulk upload)
async function uploadFile(req, res) {
    try {
        const fundData = req.body; // Extract data from the request body (should be an array)

        // Log the incoming data for debugging
        console.log('Received fund data:', fundData);

        // Validate that the data is an array
        if (!Array.isArray(fundData) || fundData.length === 0) {
            return res.status(400).json({ message: 'Invalid data format. Expected an array of funds.' });
        }

        // Validate each fund object in the array
        const invalidFunds = fundData.filter(fund => !fund.fund_source || !fund.total_amount);

        if (invalidFunds.length > 0) {
            return res.status(400).json({
                message: `Some funds are missing required fields. Ensure each fund has 'fund_source' and 'total_amount'.`,
                invalidFunds
            });
        }

        const db = await connectDB();
        const fundCollection = db.collection('funds'); // Assuming you have a 'funds' collection

        // Insert all funds at once using insertMany
        const result = await fundCollection.insertMany(fundData);

        // Respond with the inserted fund count and details
        res.status(201).json({
            message: `${result.insertedCount} funds uploaded successfully`,
            insertedIds: result.insertedIds,
        });
    } catch (error) {
        console.error('Error inserting funds:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = { uploadFile };