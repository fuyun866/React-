const express = require("express")
const router = express.Router()
const {loginManage,registerManage,avoidManage,exitManager} = require("../manager/login.js")

// 用户登录
router.post("/userLogin",loginManage)

// 用户注册
router.post("/userRegister",registerManage)

// 用户免登录
router.post("/avoidLogin",avoidManage)

// 退出登录
router.get("/exitLogin",exitManager)




module.exports = router;