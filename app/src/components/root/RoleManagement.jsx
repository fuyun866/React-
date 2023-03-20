import { useState } from "react";
import { Button, Drawer, Form, Input, Select, Tree } from "antd";
import { items1 } from "@/data/homeData.js";
import { roleAddition } from "@/tools/requests/rootRequest.js";
import { useSelector } from "react-redux";
export default function RoleManagement() {
  const [open, setOpen] = useState(false);
  //   抽屉打开
  const showDrawer = () => {
    setOpen(true);
  };
  //   抽屉关闭
  const onClose = () => {
    setOpen(false);
    form.resetFields();
    setTreeVal({});
  };

  const _id = useSelector((state) => state.user.userInfo?._id);

  const [form] = Form.useForm();

  //   表单提交完成
  const onFinish = async (values) => {
    console.log("Success:", values, treeVal);
    let data = await roleAddition({ ...values, ...treeVal, _id });
    console.log(data, "角色添加");
    if (data.code === 3) {
      setOpen(false);
      //   清空表单
      form.resetFields();
      setTreeVal({treeKeyArr:[],treeNodeArr:[]});
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  //   权限列表
  const options = [
    {
      value: "1",
      label: "一级权限",
    },
    {
      value: "2",
      label: "二级权限",
    },
    {
      value: "3",
      label: "用户代理",
    },
  ];

  //   树形权限数据
  const [treeVal, setTreeVal] = useState({treeKeyArr:[],treeNodeArr:[]});

//   后台管理
  //   树形列表选中某项时
  const onCheck = (checkedKeys, info) => {
    setTreeVal({ treeKeyArr: checkedKeys, treeNodeArr: info.checkedNodes });
  };

  return (
    <div>
      <Button type="primary" onClick={showDrawer}>
        新建角色
      </Button>
      <Drawer title="创建权限" placement="right" onClose={onClose} open={open}>
        <Form
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 18 }}
          initialValues={{
            permissionLevel: "1",
          }}
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >

          <Form.Item
            label="角色名称"
            name="roleName"
            rules={[
              {
                required: true,
                message: "请输入角色名称",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="权限描述"
            name="permissionDesc"
            rules={[
              {
                required: true,
                message: "请输入角色描述",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="权限等级"
            name="permissionLevel"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Select options={options} />
          </Form.Item>

          <Form.Item label="选中权限">
            <Tree
              checkable
              treeData={items1}
              onCheck={onCheck}
              selectedKeys={[]}
              checkedKeys={treeVal.treeKeyArr}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}
