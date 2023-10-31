const mongoose = require('mongoose');
require("dotenv").config()
const db = () => mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => console.log('db connected successfuly'))
  .catch((e) => console.log('db connection error', e));


module.exports = db