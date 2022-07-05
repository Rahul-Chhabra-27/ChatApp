const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.use(express.static(path.join(__dirname, "../", "static")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
