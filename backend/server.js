const app = require("./app");
const { connectDatabase } = require("./config/database");
const cloudinary = require("cloudinary");
connectDatabase();

cloudinary.config({
  cloud_name: "yoursocialcloud",
  api_key: "456635136228931",
  api_secret: "FHmOmBdCeUEz75XFQ4bC6THd84U",
});

const PORT = process.env.PORT.replace(/;/g, "");
console.log(PORT);

app.listen(PORT || 6000, () => {
  console.log(`Server is running at ${PORT}`);
});
