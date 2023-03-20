const express = require("express");
const {roleAdditionManage} = require("../manager/rootManage.js")
const router = express.Router();

router.post("/roleAddition",roleAdditionManage)



module.exports = router