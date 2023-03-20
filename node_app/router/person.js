const express = require("express")
const router = express.Router()
const {handerUploadImg,handerInfoSubmit} = require("../manager/handerPerson")

// 上传图片
router.post("/uploadImg",handerUploadImg)

// 个人信息修改
router.post("/infoSubmit",handerInfoSubmit)




module.exports = router;