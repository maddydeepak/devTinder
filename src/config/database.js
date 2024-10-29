const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://deepakmongodb:CMCLT7q2J59EYvX5@deepakmongodb.txrsa.mongodb.net/DevTinderDB"
  );
};

module.exports = connectDB;
