"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import UniqueQuestion from "@/Components/UniqueQuestion/UniqueQuestion";

export default function page() {
  const { id } = useParams();
  const [uniqueQuestion, setUniqueQuestion] = useState();
  useEffect(() => {
    axios
      .get(`http://143.110.190.164:3000/teacher/question/find/${id}`)
      .then((response) => setUniqueQuestion(response.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <UniqueQuestion uniqueQuestion={uniqueQuestion}/>
    </>
  );
}
