const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

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
