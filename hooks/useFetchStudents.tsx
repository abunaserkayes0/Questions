import axios from "axios";
import { useEffect, useState } from "react";

const useFetchStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);
  const fetchStudents = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => console.log(error));
  };
  return { students };
};

export default useFetchStudents;
