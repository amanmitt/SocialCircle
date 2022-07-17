const app = require("./app");
const { connectDatabase } = require("./config/database");
connectDatabase();

app.listen(5000, () => {
  console.log(`Server is running at 5000`);
});
