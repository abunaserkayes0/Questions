import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Layout, Avatar, Space, Modal } from "antd";
import UpdateStudentDashBoard from "../UpdateStudentDashBoard/UpdateStudentDashBoard";
import useFetchStudents from "@/hooks/useFetchStudents";
import axios from "axios";
const { Header, Content } = Layout;
export default function StudentDashboard({ student }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { students, setStudents } = useFetchStudents();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handelDeleted = (id: any) => {
    axios
      .delete(`http://143.110.190.164:3000/student/profile/delete/${id}`)
      .then((response) => {
        if (response.data) {
          const student = students.filter((student: any) => student._id != id);
          setStudents(student);
        }
      })
      .then((error) => console.log(error));
  };
  return (
    <>
      <div className="row-span-3 col-span-3">
        <>
          <Layout style={{ minHeight: "100vh" }}>
            <Layout className="site-layout">
              <Header
                className="site-layout-background"
                style={{ padding: 0 }}
              />
              <Content style={{ margin: "16px" }}>
                <div>
                  <section className="flex justify-between items-center gap-4">
                    <div>
                      <Space wrap size={16}>
                        <Avatar
                          shape="square"
                          size={64}
                          icon={<UserOutlined />}
                        />
                      </Space>
                    </div>
                    <div className="flex gap-3">
                      <Avatar
                        onClick={showModal}
                        className="flex items-center justify-center"
                        shape="circle"
                        size={35}
                        icon={<FaEdit />}
                      />
                      <Avatar
                        onClick={() => handelDeleted(student._id)}
                        className="flex items-center justify-center"
                        shape="circle"
                        size={35}
                        icon={<MdDelete />}
                      />
                    </div>
                  </section>
                  <section>
                    <h1>{student.firstName}</h1>
                    <h3>{student.userName}</h3>
                    <h3>{student.lastName}</h3>
                  </section>
                </div>
              </Content>
            </Layout>
          </Layout>
          <Modal
            okType="default"
            cancelButtonProps={{ style: { display: "none" } }}
            okButtonProps={{ style: { display: "none" } }}
            title="Update Question"
            open={isModalOpen}
            onCancel={handleCancel}
          >
            <UpdateStudentDashBoard id={student._id} />
          </Modal>
        </>
      </div>
    </>
  );
}
