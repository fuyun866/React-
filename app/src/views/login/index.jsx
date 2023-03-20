// 登录页面
import { useCallback, useState, useRef } from "react";
import { message } from "antd";
import {userLogin} from "@/tools/requests/userRequest"
import "./index.scss";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"

const Login = () => {
  // 全局消息提示
  const [messageApi, contextHolder] = message.useMessage();

  // 单选框值变化时触发
  const handleCheckedChange = useCallback((e) => {
    setCheckVal(e.target.checked);
  }, []);

  // 路由跳转
  const navigate = useNavigate()

  // 获取账号密码dom节点
  const accountVal = useRef(null);
  const psdVal = useRef(null);

  // 仓库更改数据
  const dispatch = useDispatch()

  // 登录提交
  const onFinish = useCallback(() => {
    let val1 = accountVal.current.value;
    let val2 = psdVal.current.value;
    if (!val1 || !val2) {
      return messageApi.open({
        type: "error",
        content: "账号或密码不能为空！",
      });
    }
    userLogin({
      username:val1,
        password:val2
    }).then((data)=>{
        dispatch({type:"user/initalUserInfo",payload:{
          username:val1,
          password:val2
        }})
        localStorage.setItem("token",data.data.token);
        if(data.code){
           navigate("/Home")
        }else{
          messageApi.open({
            type: "error",
            content: "账号登录错误",
          });
        }
    })
    // eslint-disable-next-line
  }, [messageApi]);

  // 注册功能，未完成
  // const onFinish1 = useCallback(() => {
  //   let val1 = accountVal.current.value;
  //   let val2 = psdVal.current.value;
  //   if (!val1 || !val2) {
  //     return messageApi.open({
  //       type: "error",
  //       content: "账号或密码不能为空！",
  //     });
  //   }
  //   userRegister({
  //       account:val1,
  //       password:val2
  //   }).then((data)=>{
      
  //   })

  // }, [messageApi]);

  const [checkVal, setCheckVal] = useState(true);
  return (
    <div className="wrapper">
      <div className="login-card">
    {contextHolder}
      <div className="column">
        <h1>登陆</h1>
        <p>欢迎来到我的世界，请输入账号密码！</p>
        <form>
          <div className="form-item">
            <input
              type="text"
              ref={accountVal}
              className="form-element"
              placeholder="用户名"
            />
          </div>
          <div className="form-item">
            <input
              type="password"
              ref={psdVal}
              className="form-element"
              placeholder="密码"
            />
          </div>
          <div className="form-checkbox-item">
            <input
              type="checkbox"
              id="rememberMe"
              checked={checkVal}
              onChange={handleCheckedChange}
            />
            <label>记住我</label>
          </div>
          <div className="flex">
            <button type="button" onClick={onFinish}>
              登陆
            </button>
            <a href="/#">忘记密码，点我重置！</a>
          </div>
          <p style={{ marginTop: "3rem", marginBottom: "1.5rem" }}>
            第三方账号登入
          </p>
          <div className="social-buttons">
            <a href="/#" className="wechat">
              <i className="bi bi-wechat"></i>
            </a>
            <a href="/#" className="twitter">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="/#" className="github">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </form>
      </div>
      <div className="column">
        <h2>自然选择号欢迎您登舰！</h2>
        <p>如果你没有账号，你想要现在注册一个吗？</p>
        <a href="/#">注册</a>
      </div>
    </div>
    </div>
  );
};

export default Login;
