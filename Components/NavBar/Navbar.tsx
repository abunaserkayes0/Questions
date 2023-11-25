import React from "react";
import {
  HomeOutlined,
  AppstoreOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import {SiGoogleclassroom} from 'react-icons/si';
import { IoCreateOutline } from "react-icons/io5";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<SiGoogleclassroom />}>
          <Link href="/create">Create</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<IoCreateOutline />}>
          <Link href="/create_classroom">Create_Classroom</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          <Link href="/login">Login</Link>
        </Menu.Item>
      </Menu>
    </>
  );
}
