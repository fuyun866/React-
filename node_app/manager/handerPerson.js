const {upload} = require("../plugins/upload.js")
const userDB = require("../mongoose/userDB")
const multer = require("multer")
const {sign} = require("../plugins/token")

const handerUploadImg = (req,res)=>{
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
          
        } else if (err) {
            
        }
        res.send({code:1,value:"上传成功",data:req.file})
    })
}

const handerInfoSubmit =async (req,res)=>{
    const {username,password,userNick,userEmail,userPhone,userAvatar} = req.body;
    await userDB.updateOne({username},{
        password,userNick,userEmail,userPhone,userAvatar
    })
    let result = await userDB.findOne({username})
    let token = sign({
        userInfo:result
    })
    res.send({code:1,value:"信息修改成功",data:result,token})
}

module.exports = {
    handerUploadImg,
    handerInfoSubmit
}