// 个人设置页
import { Button, Form, Input, Card, Upload,message } from "antd";
import { rules } from "@/data/personRules.js";
import { PlusOutlined } from "@ant-design/icons";
import "./index.scss";
import { useCallback, useState,useEffect } from "react";
import {infoSubmit} from "@/tools/requests/userRequest"
import { useDispatch,useSelector } from "react-redux";

// 风清扬
// 123qwe
// 19556634824@qq.com
// 19556634824
const Person = () => {
  const dispatch = useDispatch()
  // 从仓库获取个人信息
  const userInfo1 = useSelector((state) => {
    return state.user.userInfo;
  });
  // 全局消息提示
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(()=>{
    if(userInfo1){
      setImageUrl(userInfo1.userAvatar)
      let info = JSON.parse(JSON.stringify(userInfo1))
      delete info["userAvatar"];
      setUserInfo(info)
    }
  },[userInfo1])
  // 提交个人信息修改
  const onFinish =async (values) => {
    values.userAvatar = imageUrl;
    let data = await infoSubmit(values)
    messageApi.open({
      type: "success",
      content: data.value,
    });
    localStorage.setItem("token",data.token)
    dispatch({type:"user/initalUserInfo",payload:data.data})
  };
  
  // 图片路径
  const [imageUrl, setImageUrl] = useState("");

  const [userInfo,setUserInfo] = useState(null)


  // 图片上传后后端返回
  const handleChange = useCallback(({file}) => {
    if(file.status === "done"){
      setImageUrl("http://localhost:4000/imgs/avatar/"+file.response.data.filename)
    }
  }, []);

  // 返回上传图片的全部信息
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };


  return (
    <Card
      size="small"
      title="个人设置"
      style={{
        height: "100%",
      }}
    >
       {contextHolder}
        {userInfo?(<Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 24 }}
        style={{ maxWidth: 600 }}
        initialValues={userInfo}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item label="用户名" name="username">
          <Input disabled />
        </Form.Item>

        <Form.Item label="昵称" name="userNick" rules={rules.nameRules}>
          <Input />
        </Form.Item>

        <Form.Item label="密码" name="password" rules={rules.passwordRules}>
          <Input.Password />
        </Form.Item>

        <Form.Item label="邮箱" name="userEmail" rules={rules.emailRules}>
          <Input />
        </Form.Item>

        <Form.Item label="手机号码" name="userPhone" rules={rules.phoneRules}>
          <Input />
        </Form.Item>

        <Form.Item
          label="头像"
          name="userAvatar"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload
            name="avatar"
            listType="picture-circle"
            className="avatar-uploader"
            showUploadList={false}
            action="http://localhost:4000/person/uploadImg"
            onChange={handleChange}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
            ) : (
              <PlusOutlined />
            )}
          </Upload>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>):(<></>)}
    </Card>
  );
};
export default Person;
