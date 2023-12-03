"use client";
import axios from "axios";
import React, { useState } from "react";
import SingleTableRow from "@/Components/SingleTableRow/SingleTableRow";
import { useRouter } from "next/navigation";
import useFetchStudents from "@/hooks/useFetchStudents";

export default function viewStudentProfile() {
  const router = useRouter();
  const [student, setStudent] = useState({});
  const { students } = useFetchStudents();
  const handelClick = (id: any) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setStudent(response.data))
      .catch((error) => console.log(error));
    router.push(`/single_student_view`);
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
                {students.map((student) => (
                  <tr
                    key={student.id}
                    className="cursor-pointer"
                    onClick={() => handelClick(student.id)}
                  >
                    <SingleTableRow student={student} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
