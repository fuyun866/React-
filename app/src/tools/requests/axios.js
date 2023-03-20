import axios from "axios";
import { message } from "antd";

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    let token = localStorage.getItem("token");
    if (token) {
      config.headers["authorization"] = token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    switch (response.data.code) {
      case 0:
        message.error({
          content: response.data.value,
          duration: 2,
        });
        break;
      case 1:
        message.success({
          content: response.data.value,
          duration: 2,
        });
        break;
      default:
        break;
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const myAxios = async (method, url, datas) => {
  let {data}  = await axios({
    method,
    url,
    data: method === "get" ? null : datas,
    params: method === "get" ? datas : null,
  });
  return data;
  // if(data.code === "200"){
  //   return data;
  // }
};

export default myAxios;
