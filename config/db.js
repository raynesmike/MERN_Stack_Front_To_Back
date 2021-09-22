const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// Mongoose returns a promise thats why we have to use async and await

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    useNewUrlParser: true;

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exiting 1 since we got a Failure
    process.exit(1);
  }
};

module.exports = connectDB;
