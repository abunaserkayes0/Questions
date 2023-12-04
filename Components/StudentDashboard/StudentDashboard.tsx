import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { FaEdit } from "react-icons/fa";
import { Layout, Avatar, Space, Modal } from "antd";
import UpdateStudentDashBoard from "../UpdateStudentDashBoard/UpdateStudentDashBoard";
const { Header, Content } = Layout;
export default function StudentDashboard({ student }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
                    <div>
                      <Avatar
                        onClick={showModal}
                        className="flex items-center justify-center"
                        shape="circle"
                        size={20}
                        icon={<FaEdit />}
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
            <UpdateStudentDashBoard  id={student._id} />
          </Modal>
        </>
      </div>
    </>
  );
}
