import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchQuestion = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    axios
      .get("http://143.110.190.164:3000/teacher/question/find/all")
      .then((response) => setQuestions(response.data))
      .catch((err) => console.log(err));
  }, []);

  return { questions, setQuestions };
};

export default useFetchQuestion;
