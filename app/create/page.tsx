"use client";
import React, { useState } from "react";

export default function CreatePage() {
  const [divCount, setDivCount] = useState(1);

  const createNewDiv = () => {
    setDivCount(divCount + 1);
  };
  const newDiv = Array.from({ length: divCount }, (_, index) => (
    <div key={index} className="created-div">
      <h1 className="font-bold">Question-{index + 1}</h1>
      <div className="mb-4">
        <label
          htmlFor="question_tittle"
          className="block text-gray-600 text-sm font-medium mb-2"
        >
          Question Tittle
        </label>
        <textarea
          id="question_tittle"
          name="question_tittle"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="question_1"
          className="block text-gray-600 text-sm font-medium mb-2"
        >
          Question_1
        </label>
        <input
          type="text"
          id="question_1"
          name="question_1"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="question_1"
          className="block text-gray-600 text-sm font-medium mb-2"
        >
          Question_2
        </label>
        <input
          type="text"
          id="question_2"
          name="question_2"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="question_3"
          className="block text-gray-600 text-sm font-medium mb-2"
        >
          Question_3
        </label>
        <input
          type="text"
          id="question_3"
          name="question_3"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="question_4"
          className="block text-gray-600 text-sm font-medium mb-2"
        >
          Question_4
        </label>
        <input
          type="text"
          id="question_4"
          name="question_4"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="correctAnswer"
          className="block text-gray-600 text-sm font-medium mb-2"
        >
          Correct Answer
        </label>
        <input
          type="text"
          id="correctAnswer"
          name="correctAnswer"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
    </div>
  ));
  const handelSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
          <>{newDiv}</>
          <form onSubmit={handelSubmit}>
            <button
              type="submit"
              onClick={createNewDiv}
              className="w-full bg-blue-500 text-white p-3 mb-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Add More Question
            </button>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 mb-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
