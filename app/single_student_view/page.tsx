"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Avatar, Space } from "antd";
import useFetchStudents from "@/hooks/useFetchStudents";
const { Header, Content, Footer } = Layout;
export default function SingleStudentView() {
  const [student, setStudent] = useState({});
  const { students } = useFetchStudents();
  const handelSingleStudent = (id: any) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setStudent(response.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <section className="grid grid-rows-2 grid-flow-col gap-4 p-5">
        <div className="row-span-1 col-span-1">
          <h1 className="font-semibold text-xl">All Students Profile</h1>
          {students.map((student) => (
            <div
              key={student.id}
              onClick={() => handelSingleStudent(student.id)}
              className=" cursor-pointer shadow-md p-3 my-3"
            >
              <h2>{student.name}</h2>
              <h3>{student.phone}</h3>
            </div>
          ))}
        </div>
        <div className="row-span-3 col-span-3">
          <Layout style={{ minHeight: "100vh" }}>
            <Layout className="site-layout">
              <Header
                className="site-layout-background"
                style={{ padding: 0 }}
              />
              <Content style={{ margin: "16px" }}>
                <div className="site-layout-content">
                  <section className="flex gap-4">
                    <div>
                      <Space wrap size={16}>
                        <Avatar
                          shape="square"
                          size={64}
                          icon={<UserOutlined />}
                        />
                      </Space>
                    </div>
                    <div>
                      <h1>{student.name}</h1>
                      <h3>{student.id}</h3>
                      <h3>{student.username}</h3>
                    </div>
                  </section>
                </div>
              </Content>
              <Footer style={{ textAlign: "center" }}>Your Footer</Footer>
            </Layout>
          </Layout>
        </div>
      </section>
    </>
  );
}
