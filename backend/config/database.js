const mongoose = require("mongoose");
const dotenv = require("dotenv");

exports.connectDatabase = () => {
  mongoose
    .connect(
      "mongodb+srv://aman:sBLFEQhM9EEhXQxE@cluster0.dbezb.mongodb.net/SocialCircle?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    )
    .then((con) => console.log(`Database Connected: ${con.connection.host}`))
    .catch((err) => console.log(err));
};
