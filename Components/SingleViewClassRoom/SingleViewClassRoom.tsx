"use client";
import { Button, Modal } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import UpdateClassRoom from "../UpdateClassRoom/UpdateClassRoom";

export default function SingleViewClassRoom({
  classRoom,
  index,
  classRooms,
  setClassRooms,
}: any) {
  const {
    _id,
    name,
    teacher: { firstName, lastName },
    students,
  } = classRoom;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handelDelete = (id: any) => {
    axios
      .delete(`http://143.110.190.164:3000/teacher/classroom/delete/${id}`)
      .then((response) => {
        if (response.data.message === "Classroom deleted successfully") {
          const restClassrooms = classRooms.filter(
            (classRoom: any) => classRoom._id !== _id
          );
          setClassRooms(restClassrooms);
        }
      })
      .catch((error) => console.log(error));
  };
  const handelUpdate = (id: any) => {
    console.log(id);
  };
  return (
    <>
      <article className="bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full my-5 sm:w-96">
          <div className="flex justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">ClassRoom {index + 1}</h2>
            </div>
            <div className="flex gap-2">
              <Button onClick={showModal} htmlType="submit" size="large">
                <MdEdit />
              </Button>
              <Modal
                okType="default"
                cancelButtonProps={{ style: { display: "none" } }}
                okButtonProps={{ style: { display: "none" } }}
                title="Update Question"
                open={isModalOpen}
                onCancel={handleCancel}
              >
                <UpdateClassRoom />
              </Modal>
              <Button htmlType="submit" onClick={() => showModal} size="large">
                <MdDelete />
              </Button>
            </div>
          </div>

          <div className="mb-4 flex justify-between">
            <label
              htmlFor="username"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              ClassRoom
            </label>
            <span>{name}</span>
          </div>

          <div className="mb-4 flex justify-between">
            <label
              htmlFor="username"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Course Teacher
            </label>
            <span>{firstName + " " + lastName}</span>
          </div>

          <div className="mb-4 flex justify-between">
            <label
              htmlFor="username"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Students
            </label>
            <span>
              {students.length > 0 ? (
                students.map((student: any) => (
                  <p key={student._id}>{student.firstName + ","}</p>
                ))
              ) : (
                <p>No Student found</p>
              )}
            </span>
          </div>
        </div>
      </article>
    </>
  );
}
