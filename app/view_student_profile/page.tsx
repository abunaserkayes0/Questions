"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import SingleTableRow from "@/Components/SingleTableRow/SingleTableRow";
const { Column, ColumnGroup } = Table;

export default function viewStudentProfile() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetchStudents();
  }, []);
  const fetchStudents = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="bg-gray-100 p-8">
        <div className="mx-auto">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="grid grid-cols-4">
                  <th>Name</th>
                  <th>Phone</th>
                  <th>UserName</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {students.map((student, index) => (
                    <SingleTableRow key={index} student={student} />
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
