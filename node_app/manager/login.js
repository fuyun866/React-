const userDB = require("../mongoose/userDB");
const { sign, verify } = require("../plugins/token");

// 处理用户登录
const loginManage = async (req, res) => {
  let { username, password } = req.body;
  let result = await userDB.findOne({username})
  if(result){
    let token = sign({
      userInfo: result
    });
    return res.send({ code: 1, value: "登录成功", data: { token } });
  }
  res.send({ code: 0, value: "登录失败", data: {} })
};

// 处理用户注册
const registerManage = async (req, res) => {
  let { username, password } = req.body;
  let result = await userDB.findOne({ account });
  if (!result) {
    userDB.create({
      username,
      password,
    });
    res.send({ code: 1, value: "注册成功", data: {} });
  }
};

// 处理用户免登录
const avoidManage = (req, res) => {
  let token = req.headers["authorization"];
  verify(token)
    .then((decoded) => {
      console.log(decoded,"decoded");
      res.send({ code: 1, value: "免登陆成功", data: decoded });
    })
    .catch((err) => {
      res.send({ code: 0, value: "账号身份过期", data: {} });
    });
};

const exitManager = (req,res)=>{
  sign({})
  res.send({code:0,value:"退出登录",data:{}})
}

module.exports = {
  loginManage,
  registerManage,
  avoidManage,
  exitManager
};
