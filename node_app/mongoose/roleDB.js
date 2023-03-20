var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const userDB = require("./userDB")

var roleSchema = new Schema({
    roleName: String,
    permissionDesc: String,
    permissionLevel: String,
    treeNodeArr: Array,
    treeKeyArr: Array,
    userId: {
        type:Schema.Types.ObjectId,
        ref:userDB
    },
    date: { type: Date, default: Date.now },
});

var roleDB = mongoose.model('role', roleSchema);

module.exports = roleDB;

