"use client";
import React, { useState } from "react";
import questions from "../data/db";
import { useRouter } from "next/navigation";
import { Button } from "antd";

export default function Questions() {
  const [items, setItems] = useState(questions);
  const router = useRouter();
  return (
    <>
      {items.map((item, index) => {
        return (
          <div
            className="bg-gray-100 flex items-center justify-center"
            key={item.id}
          >
            <div className="bg-white p-8 rounded shadow-md w-full my-5 sm:w-96">
              <h2 className="text-2xl font-bold mb-4">Question-{index + 1}</h2>

              <div className="mb-4 flex justify-between">
                <label
                  htmlFor="username"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  Option-1
                </label>
                <span>{item.question_1}</span>
              </div>

              <div className="mb-4 flex justify-between">
                <label
                  htmlFor="username"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  Option-2
                </label>
                <span>{item.question_2}</span>
              </div>

              <div className="mb-4 flex justify-between">
                <label
                  htmlFor="username"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  Option-3
                </label>
                <span>{item.question_3}</span>
              </div>

              <div className="mb-4 flex justify-between">
                <label
                  htmlFor="username"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  Option-4
                </label>
                <span>{item.question_4}</span>
              </div>
              <Button
                className="bg-black text-white hover:bg-white hover:text-black w-full  mb-5"
                onClick={() => router.push(`/${item.id}`)}
                htmlType="submit"
                size="large"
                
              >
                Edit
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
}
