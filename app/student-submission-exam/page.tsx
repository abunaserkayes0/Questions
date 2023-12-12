"use client";

import { Button } from "antd";

export default function StudentSubmissionExam() {
  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full my-5 sm:w-96">
          <h2 className="text-2xl font-bold mb-4">Submission Exam</h2>

          <div className="mb-4 flex font-semibold">
            <span>Exam Name</span>
          </div>

          <div className="mb-4 flex justify-normal">
            <span> Selected Teachers Name</span>
          </div>

          <div className="mb-4 flex justify-normal">
            <span>Selected Students Name</span>
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
    </>
  );
}
