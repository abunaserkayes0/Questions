  import { Button } from "antd";
  import React from "react";

  export default function AllStudentsClassRoom({}: any) {
    return (
      <div className="bg-gray-100 flex items-center justify-center">
        <div className="bg-white text-center p-8 rounded shadow-md w-full my-5 sm:w-96">
          <div className="mb-4 flex-col font-semibold">
            <p>Jhon Tom</p>
            <p>Class-11</p>
            <p>203023042024</p>
          </div>
          <div className="mb-4 flex-col font-semibold">
            <p>Jhon Lanthem</p>
            <p>Class-10</p>
            <p>203023042021</p>
          </div>
        </div>
      </div>
    );
  }
