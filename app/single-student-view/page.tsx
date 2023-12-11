"use client";
import axios from "axios";
import React, { useState } from "react";
import useFetchStudents from "@/hooks/useFetchStudents";
import StudentDashboard from "@/Components/StudentDashboard/StudentDashboard";
import { useParams } from "next/navigation";

export default function SingleStudentView() {
  const id = useParams();
  console.log(id);
  
  const [student, setStudent] = useState({});
  const { students } = useFetchStudents();
  const [isLoading, setIsLoading] = useState(true);

  const handelSingleStudent = (id: any) => {
    axios
      .get(`http://143.110.190.164:3000/student/profile/find/${id}`)
      .then((response) => {
        setStudent(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <section className="grid grid-rows-2 grid-flow-col gap-4 p-5">
        <div className="row-span-1 col-span-1">
          <h1 className="font-semibold text-xl">All Students Profile</h1>
          {students.map((student: any) => (
            <div
              key={student._id}
              onClick={() => handelSingleStudent(student._id)}
              className=" cursor-pointer shadow-md p-3 my-3"
            >
              <h2>{student.firstName}</h2>
              <h3>{student.lastName}</h3>
            </div>
          ))}
        </div>
        <StudentDashboard student={student} />
      </section>
    </>
  );
}
