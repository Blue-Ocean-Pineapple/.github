require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const db = require('./database/db.js');
var router = require('./routes/index.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);
app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
