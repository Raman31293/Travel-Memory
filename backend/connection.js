// connection to mongodb
const mongoose = require('mongoose')

const URL = process.env.MONGO_URI;

mongoose.connect(URL)

mongoose.Promise = global.Promise

const db = mongoose.connection

db.once('open', () => {
    console.log('Connected to MongoDB');
  }).on('error', console.error.bind(console, 'DB EROOR'))

module.exports = {db,mongoose}