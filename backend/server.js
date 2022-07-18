const app = require("./app");
const { connectDatabase } = require("./config/database");
connectDatabase();

const PORT = process.env.PORT.replace(/;/g, "");
console.log(PORT);

app.listen(PORT || 6000, () => {
  console.log(`Server is running at ${PORT}`);
});
