"use client";
import React from "react";
import useFetchClassRoom from "@/hooks/useFetchClassRoom";
import SingleViewClassRoom from "@/Components/SingleViewClassRoom/SingleViewClassRoom";

export default function ViewClassroom() {
  const { classRooms, setClassRooms } = useFetchClassRoom();

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {classRooms.map((classRoom: any, index: any) => (
        <SingleViewClassRoom
          key={classRoom._id}
          classRoom={classRoom}
          classRooms={classRooms}
          setClassRooms={setClassRooms}
          index={index}
        />
      ))}
    </div>
  );
}
