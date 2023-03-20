import myAxios from "./axios"


const baseUrl = "http://localhost:4000"
// 管理员注册
export const userRegister = (val)=>myAxios("post",baseUrl+"/userRegister",val)
// 管理员登录
export const userLogin = (val)=>myAxios("post",baseUrl+"/userLogin",val)
// 管理员免登录
export const avoidLogin = (val)=>myAxios("post",baseUrl+"/avoidLogin",val)
// 退出登录
export const exitLogin = (val)=>myAxios("get",baseUrl+"/exitLogin",val)
// 个人信息提交
export const infoSubmit = (val)=>myAxios("post",baseUrl+"/person/infoSubmit",val)
