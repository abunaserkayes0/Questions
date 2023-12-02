import React, { useState } from "react";
import UpdatePage from "../UpdatePage/UpdatePage";
import { Button, Modal } from "antd";

export default function UniqueQuestion({ uniqueQuestion }: any) {
  
  return (
    <div
      className="bg-gray-100 flex items-center justify-center"
      key={uniqueQuestion?._id}
    >
      <div className="bg-white p-8 rounded shadow-md w-full my-5 sm:w-96">
        <h2 className="text-2xl font-bold mb-4">
          Question
        </h2>

        <div className="mb-4 flex justify-between">
          <label
            htmlFor="username"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Option-1
          </label>
          <span>{uniqueQuestion?.options[0]}</span>
        </div>

        <div className="mb-4 flex justify-between">
          <label
            htmlFor="username"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Option-2
          </label>
          <span>{uniqueQuestion?.options[1]}</span>
        </div>

        <div className="mb-4 flex justify-between">
          <label
            htmlFor="username"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Option-3
          </label>
          <span>{uniqueQuestion?.options[2]}</span>
        </div>

        <div className="mb-4 flex justify-between">
          <label
            htmlFor="username"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Option-4
          </label>
          <span>{uniqueQuestion?.options[3]}</span>
        </div>
        <Button
          
          htmlType="submit"
          className="bg-black text-white hover:bg-white hover:text-black w-full mb-5"
          size="large"
        >
          Edit
        </Button>
        
      </div>
    </div>
  );
}
