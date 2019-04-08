// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;


// =======================================
//                  CONFIG
// =======================================
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/personalProjects'

app.use(express.json());
app.use(express.static('public'));

// =======================================
//               Controller
// =======================================

const gameController = require('./controllers/gameRoutes.js')
app.use('/game', gameController)


// =======================================
//               Listener
// =======================================
app.listen(port, () => {
  console.log("the app is now open");
})
// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

// connect to mongoose
mongoose.connect(mongoURI, { useNewUrlParser: true});
mongoose.connection.once('open', () => {
  console.log('connected to mongoose...');
});



































//
