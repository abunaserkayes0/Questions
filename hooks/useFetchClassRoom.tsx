import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchClassRoom = () => {
  const [classrooms, setClassRooms] = useState([]);
  useEffect(() => {
    axios
      .get("http://143.110.190.164:3000/teacher/exam/find/all")
      .then((response) => setClassRooms(response.data))
      .catch((err) => console.log(err));
  }, []);

  return { classrooms, setClassRooms };
};

export default useFetchClassRoom;
