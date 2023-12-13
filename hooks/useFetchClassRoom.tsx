import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchClassRoom = () => {
  const [classRooms, setClassRooms] = useState([]);
  useEffect(() => {
    axios
      .get("http://143.110.190.164:3000/teacher/classroom/find/all")
      .then((response) => setClassRooms(response.data))
      .catch((err) => console.log(err));
  }, []);

  return { classRooms, setClassRooms };
};

export default useFetchClassRoom;
