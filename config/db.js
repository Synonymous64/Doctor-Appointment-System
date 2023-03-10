const mongoose = require('mongoose');
const color = require('colors');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB connected ${mongoose.connection.host}`.bgGreen.white);
    } catch (err) {
        console.log(`MongoDB Server Issue ${err}`.bgRed.white);
    }
};

module.exports = connectDB;