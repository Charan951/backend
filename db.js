const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.Mongo_url);
        console.log(`✅ MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('❌ Unable to connect to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
