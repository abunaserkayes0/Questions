import axios from "axios";
import { FaEdit } from "react-icons/fa";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Avatar, Space, Modal } from "antd";
import useFetchTeachers from "@/hooks/useFetchTeachers";
import UpdateTeacherDashBoard from "../UpdateTeacherDashboard/UpdateTeacherDashBoard";
import TeachersDashboardInput from "../TeachersDashboardInput/TeachersDashboardInput";
const { Header, Content } = Layout;
export default function TeacherDashboard({ teacher }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { teachers, setTeachers } = useFetchTeachers();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handelDeleted = (id: any) => {
    axios
      .delete(`http://143.110.190.164:3000/teacher/profile/delete/${id}`)
      .then((response) => {
        if (response.data) {
          const teacher = teachers.filter((teacher: any) => teacher._id != id);
          setTeachers(teacher);
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
                        onClick={() => handelDeleted(teacher._id)}
                        className="flex items-center justify-center"
                        shape="circle"
                        size={35}
                        icon={<MdDelete />}
                      />
                    </div>
                  </section>
                  <section>
                    <h1>{teacher.firstName}</h1>
                    <h3>{teacher.userName}</h3>
                    <h3>{teacher.lastName}</h3>
                  </section>
                  <TeachersDashboardInput />
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
            <UpdateTeacherDashBoard id={teacher._id} />
          </Modal>
        </>
      </div>
    </>
  );
}
