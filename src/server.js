require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");

const port = process.env.PORT;

require("./database");

const routes = require("./routes");

app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
