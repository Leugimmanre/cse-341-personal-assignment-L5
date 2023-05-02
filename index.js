const express = require('express');
const routes = require('./routes/routes.js');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require("./config/db.js");


dotenv.config();
connectDB();

const PORT = process.env.PORT2 || 4000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

