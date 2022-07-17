const mongoose = require("mongoose");
const dotenv = require("dotenv");

exports.connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost:27017/SocialCircle")
    .then((con) => console.log(`Database Connected: ${con.connection.host}`))
    .catch((err) => console.log(err));
};
