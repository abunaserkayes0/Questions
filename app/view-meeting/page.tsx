import { Button } from "antd";
import React from "react";

export default function ViewMeeting() {
  return (
    <div className="bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full my-5 sm:w-96">
        <h2 className="text-2xl font-bold mb-4">Meeting</h2>

        <div className="mb-4 flex font-semibold">
          <span>Meeting Title</span>
        </div>

        <div className="mb-4 flex justify-normal">
          <span>Meeting URL</span>
        </div>

        <div className="mb-4 flex justify-normal">
          <span>Teachers Name</span>
        </div>

        <div className="mb-4 flex justify-normal">
          <span>Selected Students</span>
        </div>

        <div className="mb-4 flex justify-normal">
          <span>Meeting time</span>
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
