var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  password: String,
  userNick: String,
  userEmail: String,
  userPhone: String,
  userAvatar: String,
  date: { type: Date, default: Date.now },
});

var userDB = mongoose.model('user', userSchema);

module.exports = userDB;

// userNick: '风清扬',
//   password: '123qwe',
//   userEmail: '19556634824@qq.com',
//   userPhone: '19556634824',
//   userAvatar: '
