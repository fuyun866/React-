import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

// 头部导航数据
export const items1 = [
    {key:"/Home",label:"首页",title:"首页"},
    {key:"/Home/root",label:"后台管理员",title:"后台管理员"},
    {key:"/Home/member",label:"会员",title:"会员"},
    
    {key:"/Home/funds",label:"资金",title:"首页"},
    {key:"/Home/statistics",label:"统计",title:"统计"},
    {key:"/Home/proxy",label:"用户代理",title:"用户代理"},
]

// 侧边栏导航数据
export const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  });