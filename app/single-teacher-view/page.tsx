"use client";
import axios from "axios";
import React, { useState } from "react";
import useFetchTeachers from "@/hooks/useFetchTeachers";
import TeacherDashboard from "@/Components/TeacherDashboard/TeacherDashboard";

export default function SingleStudentView() {
  const [teacher, setTeacher] = useState({});
  const { teachers } = useFetchTeachers();
  const [isLoading, setIsLoading] = useState(true);

  const handelSingleTeacher = (id: any) => {
    axios
      .get(`http://143.110.190.164:3000/teacher/profile/find/${id}`)
      .then((response) => {
        setTeacher(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <section className="grid grid-rows-2 grid-flow-col gap-4 p-5">
        <div className="row-span-1 col-span-1">
          <h1 className="font-semibold text-xl">All Teachers Profile</h1>
          {teachers.map((teacher: any) => (
            <div
              key={teacher._id}
              onClick={() => handelSingleTeacher(teacher._id)}
              className=" cursor-pointer shadow-md p-3 my-3"
            >
              <h2>{teacher.firstName}</h2>
              <h3>{teacher.lastName}</h3>
            </div>
          ))}
        </div>
        <TeacherDashboard teacher={teacher} />
      </section>
    </>
  );
}
