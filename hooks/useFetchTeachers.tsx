import axios from "axios";
import { useEffect, useState } from "react";

const useFetchTeachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);
  const fetchTeachers = () => {
    axios
      .get(`http://143.110.190.164:3000/teacher/profile/find/all`)
      .then((response) => {
        setTeachers(response.data);
      })
      .catch((error) => console.log(error));
  };
  return { teachers, setTeachers };
};

export default useFetchTeachers;
