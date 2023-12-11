import { Button } from "antd";
import React from "react";

export default function ViewClassroom({ question, index }: any) {
  return (
    <div
      className="bg-gray-100 flex items-center justify-center"
      key={question?._id}
    >
      <div className="bg-white p-8 rounded shadow-md w-full my-5 sm:w-96">
        <h2 className="text-2xl font-bold mb-4">Create ClassRoom</h2>

        <div className="mb-4 flex justify-between">
          <label
            htmlFor="username"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            ClassRoom
          </label>
          <span>{question?.options[0]}</span>
        </div>

        <div className="mb-4 flex justify-between">
          <label
            htmlFor="username"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Course Teacher
          </label>
          <span>{question?.options[1]}</span>
        </div>

        <div className="mb-4 flex justify-between">
          <label
            htmlFor="username"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Selected Students
          </label>
          <span>{question?.options[2]}</span>
        </div>

        <Button
          className="bg-black text-white hover:bg-white hover:text-black w-full  mb-5"
          htmlType="submit"
          size="large"
        >
          Edit
        </Button>
        <Button
          className="bg-black text-white hover:bg-white hover:text-black w-full  mb-5"
          htmlType="submit"
          size="large"
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
