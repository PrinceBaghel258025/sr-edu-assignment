const mongoose = require('mongoose');

const db = () => mongoose
  .connect('mongodb://127.0.0.1:27017/temp')
  .then(() => console.log('db connected successfuly'))
  .catch((e) => console.log('db connection error', e));


module.exports = db