"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import UniqueQuestion from "@/Components/UniqueQuestion/UniqueQuestion";
import Spinner from "@/Components/Spinner/Spinner";

export default function page() {
  const { id } = useParams();
  const [uniqueQuestion, setUniqueQuestion] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`http://143.110.190.164:3000/teacher/question/find/${id}`)
      .then((response) => {
        setUniqueQuestion(response.data);
        setIsLoading(false)
      })
      .catch((err) => console.log(err));
  }, [id]);
  
  return isLoading ? (
    <Spinner />
  ) : (
    <UniqueQuestion uniqueQuestion={uniqueQuestion} />
  );
}
