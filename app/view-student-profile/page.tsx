"use client";
import axios from "axios";
import React, { useState } from "react";
import SingleTableRow from "@/Components/SingleTableRow/SingleTableRow";
import { useRouter } from "next/navigation";
import useFetchStudents from "@/hooks/useFetchStudents";
import { log } from "console";

export default function viewStudentProfile() {
  const router = useRouter();
  const [student, setStudent] = useState({});
  const { students } = useFetchStudents();

  const handelClick = (id: any) => {
    axios
      .get(`http://143.110.190.164:3000/student/profile/find/${id}`)
      .then((response) => setStudent(response.data))
      .catch((error) => console.log(error));
    router.push(`/single-student-view`);
  };

  return (
    <>
      <div className="bg-gray-100 p-8">
        <div className="mx-auto">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="grid grid-cols-4">
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>UserName</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student: any) => (
                  <tr
                    key={student._id}
                    className="cursor-pointer"
                    onClick={() => handelClick(student._id)}
                  >
                    <SingleTableRow
                      firstName={student.firstName}
                      lastName={student.lastName}
                      username={student.username}
                      email={student.email}
                    />
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
