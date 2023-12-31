import React from "react";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, MenuProps, Space } from "antd";
import { SiGoogleclassroom } from "react-icons/si";
import { IoCreateOutline } from "react-icons/io5";
import Link from "next/link";
export default function Navbar() {
  const Questions: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href="/create-question">Create Question</Link>,
    },
    {
      key: "2",
      label: <Link href="/view-questions">View Question</Link>,
    },
  ];
  const classroom: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href="/create-classroom">Create ClassRoom</Link>,
    },
    {
      key: "2",
      label: <Link href="/view-classroom">View ClassRoom</Link>,
    },
    {
      key: "3",
      label: <Link href="/add-student-classroom">Add Student ClassRoom</Link>,
    },
    {
      key: "4",
      label: <Link href="/all-students-classroom">All Student ClassRoom</Link>,
    },
  ];
  const Students: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href="/create-student-profile">Create Student Profile</Link>,
    },
    {
      key: "2",
      label: <Link href="/view-student-profile">View Student Profile</Link>,
    },
    {
      key: "3",
      label: <Link href="/single-student-view">single Student View</Link>,
    },
  ];
  const Teachers: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href="/create-teacher-profile">Create Teacher Profile</Link>,
    },
    {
      key: "2",
      label: <Link href="/view-teacher-profile">View Teacher Profile</Link>,
    },
    {
      key: "3",
      label: <Link href="/single-teacher-view">single Teacher View</Link>,
    },
  ];
  const Exams: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href="/create-exam">Create Exam</Link>,
    },
    {
      key: "2",
      label: <Link href="/view-exam">View Exams</Link>,
    },
  ];
  const SubmitExam: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href="/submit-exam">Create Exam</Link>,
    },
    {
      key: "2",
      label: <Link href="/student-submission-exam">View Exams</Link>,
    },
  ];
  const Meeting: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href="/create-meeting">Create Meeting</Link>,
    },
    {
      key: "2",
      label: <Link href="/view-meeting">View Meeting</Link>,
    },
  ];
  return (
    <>
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<SiGoogleclassroom />}>
          <Dropdown menu={{ items: Questions }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Questions
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Menu.Item>
        <Menu.Item key="3" icon={<IoCreateOutline />}>
          <Dropdown menu={{ items: Students }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Students
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Menu.Item>
        <Menu.Item key="4" icon={<IoCreateOutline />}>
          <Dropdown menu={{ items: classroom }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                ClassRoom
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Menu.Item>
        <Menu.Item key="5" icon={<IoCreateOutline />}>
          <Dropdown menu={{ items: Teachers }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Teachers
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Menu.Item>
        <Menu.Item key="6" icon={<IoCreateOutline />}>
          <Dropdown menu={{ items: Exams }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Exams
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Menu.Item>
        <Menu.Item key="7" icon={<IoCreateOutline />}>
          <Dropdown menu={{ items: Meeting }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Meeting
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Menu.Item>
        <Menu.Item key="8" icon={<IoCreateOutline />}>
          <Dropdown menu={{ items: SubmitExam }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                SubmitExam
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Menu.Item>
        <Menu.Item key="9" icon={<UserOutlined />}>
          <Link href="/login">Login</Link>
        </Menu.Item>
      </Menu>
    </>
  );
}
