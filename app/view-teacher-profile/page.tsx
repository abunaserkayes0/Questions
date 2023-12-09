"use client";
import SingleTableRow from "@/Components/SingleTableRow/SingleTableRow";
import useFetchTeachers from "@/hooks/useFetchTeachers";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function ViewTeacherProfile() {
  const router = useRouter();
  const [student, setStudent] = useState({});
  const { teachers, setTeachers } = useFetchTeachers();
  const handelClick = (id: any) => {
    axios
      .get(`http://143.110.190.164:3000/teacher/profile/find/${id}`)
      .then((response) => setStudent(response.data))
      .catch((error) => console.log(error));
    router.push(`/single-teacher-view`);
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
                {teachers.map((teacher: any) => (
                  <tr
                    key={teacher._id}
                    className="cursor-pointer"
                    onClick={() => handelClick(teacher._id)}
                  >
                    <SingleTableRow
                      firstName={teacher.firstName}
                      lastName={teacher.lastName}
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
