"use client";
import questions from "../data/db";
import { usePathname } from "next/navigation";

export default function page() {
  const pathname = usePathname();
  const id = parseInt(pathname.slice(1, 2));
  const singleQuestion = questions.find((question) => question.id == id);

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
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
}
