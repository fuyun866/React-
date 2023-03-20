import myAxios from "./axios"


const baseUrl = "http://localhost:4000"

// 角色添加
export const roleAddition = (val)=>myAxios("post",baseUrl+"/root/roleAddition",val)