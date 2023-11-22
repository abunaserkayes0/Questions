"use client";
import React, { useState } from "react";

export default function CreateClassroom() {
  const [divCount, setDivCount] = useState(1);

  const createNewDiv = () => {
    setDivCount(divCount + 1);
  };
  const dynamicDiv = Array.from({ length: divCount }, (_, index) => (
    <div key={index} className="created-div">
      <div className="mb-4">
        <input
          type="number"
          id="student_id"
          name="student"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
    </div>
  ));
  const handelClassroom = (e: any) => {
    e.preventDefault();
    const from = e.target;
    const students_id = from.student;
    const student = [];
    for (const student_id of students_id) {
      const student_value = student_id.value;
      student.push(student_value);
    }
    console.log(student);
  };
  return (
    <>
      <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
          <form onSubmit={handelClassroom}>
            <div className="mb-4">
              <label
                htmlFor="classroom_name"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Classroom Name
              </label>
              <input
                type="text"
                id="classroom_name"
                name="classroom_name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="teacher_id"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Teacher_id
              </label>
              <input
                type="number"
                id="teacher_id"
                name="teacher_id"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <h3 className="text-center font-semibold mb-3">Student Id</h3>
            {dynamicDiv}
            <button
              onClick={createNewDiv}
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 mb-5"
            >
              Add More Student
            </button>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 mb-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
