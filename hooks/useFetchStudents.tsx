import axios from "axios";
import { useEffect, useState } from "react";

const useFetchStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);
  const fetchStudents = () => {
    axios
      .get(`http://143.110.190.164:3000/student/profile/find/all`)
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => console.log(error));
  };
  return { students, setStudents };
};

export default useFetchStudents;
