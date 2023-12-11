"use client";
import { Button, Modal } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import UpdatePage from "../UpdatePage/UpdatePage";

export default function SingleQuestion({
  question,
  index,
  handelDeleteQuestion,
}: any) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div
      className="bg-gray-100 flex items-center justify-center"
      key={question._id}
    >
      <div className="bg-white p-8 rounded shadow-md w-full my-5 sm:w-96">
        <h2 className="text-2xl font-bold mb-4">Question-{index + 1}</h2>

        <div className="mb-4 flex font-semibold">
          <span>{question.text}</span>
        </div>

        <div className="mb-4 flex justify-between">
          <label
            htmlFor="username"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Option-1
          </label>
          <span>{question.options[0]}</span>
        </div>

        <div className="mb-4 flex justify-between">
          <label
            htmlFor="username"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Option-2
          </label>
          <span>{question.options[1]}</span>
        </div>

        <div className="mb-4 flex justify-between">
          <label
            htmlFor="username"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Option-3
          </label>
          <span>{question.options[2]}</span>
        </div>

        <div className="mb-4 flex justify-between">
          <label
            htmlFor="username"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Option-4
          </label>
          <span>{question.options[3]}</span>
        </div>
        <div className="mb-4 flex justify-between">
          <label
            htmlFor="username"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            CorrectOption
          </label>
          <small>{question.correctOption}</small>
        </div>
        <Button
          className="bg-black text-white hover:bg-white hover:text-black w-full  mb-5"
          onClick={showModal}
          htmlType="submit"
          size="large"
        >
          Edit
        </Button>
        <Modal
          okType="default"
          cancelButtonProps={{ style: { display: "none" } }}
          okButtonProps={{ style: { display: "none" } }}
          title="Update Question"
          open={isModalOpen}
          onCancel={handleCancel}
        >
          <UpdatePage id={question._id} handleCancel={handleCancel} />
        </Modal>
        <Button
          className="bg-black text-white hover:bg-white hover:text-black w-full  mb-5"
          onClick={() => handelDeleteQuestion(question._id)}
          htmlType="submit"
          size="large"
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
