"use client";
import { Button, Modal } from "antd";
import questions from "../../data/db";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import UpdatePage from "@/Components/UpdatePage/UpdatePage";

export default function page() {
  const pathname = usePathname();
  const id = parseInt(pathname.slice(1, 2));
  const singleQuestion = questions.find((question) => question.id == id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="bg-gray-100 flex items-center justify-center"
        key={singleQuestion?.id}
      >
        <div className="bg-white p-8 rounded shadow-md w-full my-5 sm:w-96">
          <h2 className="text-2xl font-bold mb-4">
            Question-{singleQuestion?.id}
          </h2>

          <div className="mb-4 flex justify-between">
            <label
              htmlFor="username"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Option-1
            </label>
            <span>{singleQuestion?.question_1}</span>
          </div>

          <div className="mb-4 flex justify-between">
            <label
              htmlFor="username"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Option-2
            </label>
            <span>{singleQuestion?.question_2}</span>
          </div>

          <div className="mb-4 flex justify-between">
            <label
              htmlFor="username"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Option-3
            </label>
            <span>{singleQuestion?.question_3}</span>
          </div>

          <div className="mb-4 flex justify-between">
            <label
              htmlFor="username"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Option-4
            </label>
            <span>{singleQuestion?.question_4}</span>
          </div>
          <Button
            onClick={showModal}
            htmlType="submit"
            className="bg-black text-white hover:bg-white hover:text-black w-full mb-5"
            size="large"
          >
            Edit
          </Button>
          <Modal
            okType="default"
            title="Update Question"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <UpdatePage />
          </Modal>
        </div>
      </div>
    </>
  );
}
