"use client";
import SingleViewExam from "@/Components/SingleViewExam/SingleViewExam";
import useFetchQuestion from "@/hooks/useFetchQuestion";
import React from "react";

export default function ViewExam() {
  const { questions } = useFetchQuestion();
  return (
    <div className="bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full my-5 sm:w-96">
        <h2 className="text-2xl font-bold mb-4">Exam name</h2>

        <div className="mb-4 flex justify-between">
          <label
            htmlFor="username"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            classRoom name
          </label>
        </div>
        {questions.map((question: any) => (
          <SingleViewExam question={question} />
        ))}
      </div>
    </div>
  );
}
