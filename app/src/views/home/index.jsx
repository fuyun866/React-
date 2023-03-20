// 首页
import { Layout, Menu, Avatar, Popover } from "antd";
import { items1, items2 } from "@/data/homeData.js";
import { avoidLogin, exitLogin } from "@/tools/requests/userRequest.js";
import { useCallback, useEffect } from "react";
import { useNavigate,  Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";

const { Header, Content, Sider } = Layout;
const Home = () => {
  // 路由，仓库
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 从仓库获取个人信息
  const userInfo = useSelector((state) => {
    return state.user.userInfo;
  });

  
  // 设置退出登录
  const handerExit = useCallback(async () => {
    localStorage.removeItem("token");
    await exitLogin();
    navigate("/login")
  }, [navigate]);
  // 初始化获取数据
  // 在这免登录有个小bug,登录界面刷新如果没有token，首页界面仍然会闪一下
  useEffect(() => {
    avoidLogin({}).then((data) => {
      if (!data.code) {
        return navigate("/login");
      }
      dispatch({ type: "user/initalUserInfo", payload: data.data.userInfo });
    });
  }, [navigate, dispatch]);

  const handerMenu = ({key})=>{
      navigate(key)
  }

  return (
    <Layout>
      <Header className="header">
        <div className="float-left w-12 h-12 my-2 mr-28 bg-center bg-cover rounded-full  bg-[url('../imgs/01.png')] "></div>
        <div className="flex float-right h-16">
          <p className="mr-2 text-violet-50">{userInfo?.username}</p>
          <Popover
            placement="bottom"
            content={
              <div>
                  <p className="cursor-pointer" onClick={()=>{navigate("/home/person",{state:userInfo})}}>个人设置</p>
                  <p className="cursor-pointer" onClick={handerExit}>退出登录</p>
              </div>
            }
            trigger="click"
            className="flex"
          >
            <Avatar
              size={48}
              className="cursor-pointer"
              src={require("../../assets/imgs/avatar.jpg")}
            />
          </Popover>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["/Home"]}
          items={items1}
          onClick={handerMenu}
        />
      </Header>
      <Layout className="layout-sider">
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items2}
            theme="dark"
          />
        </Sider>
        <Layout>
          {/* <Breadcrumb items={[{ title: 'Home' },{ title: 'App' },{ title: 'List' }]} /> */}
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Outlet></Outlet>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Home;
