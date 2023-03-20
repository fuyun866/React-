import React from "react";
import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import RoleManagement from "../../components/root/RoleManagement";
import UserManagement from "../../components/root/UserManagement";

const Root = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: (<span><AndroidOutlined />角色管理</span>),
            children:<RoleManagement />
          },
          {
            key: "2",
            label: (<span><AppleOutlined />用户管理</span>),
            children:<UserManagement />
          },
        ]}
      />
    </div>
  );
};

export default Root;
