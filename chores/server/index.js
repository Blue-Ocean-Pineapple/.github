require("dotenv").config();
const express = require("express");
var cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3001;


const db = require('./database/db.js');
var router = require('./routes/index.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', router);
app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
