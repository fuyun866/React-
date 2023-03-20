const mongoose = require("mongoose")


mongoose.connect("mongodb://127.0.0.1:27017/react后台管理").then(()=>{
    console.log("连接成功");
}).catch((err)=>{
    console.log("连接失败",err);
})
