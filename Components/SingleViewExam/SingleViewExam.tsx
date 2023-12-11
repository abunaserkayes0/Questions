import { Button, Radio } from "antd";
import React, { useState } from "react";

const SingleViewExam = ({ question }: any) => {
  console.log(question);

  const [value, setValue] = useState(1);

  const onChange = (e: any) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <p>{question.text}</p>
      <Radio.Group onChange={onChange} value={value}>
        <p>
          <Radio value={1}>{question.options[0]}</Radio>
        </p>
        <p>
          <Radio value={2}>{question.options[1]}</Radio>
        </p>
        <p>
          <Radio value={3}>{question.options[2]}</Radio>
        </p>
        <p>
          <Radio value={4}>D{question.options[3]}</Radio>
        </p>
      </Radio.Group>
      <Button
        className="bg-black text-white hover:bg-white hover:text-black w-full  mb-5"
        htmlType="submit"
        size="small"
      >
        Edit
      </Button>
      <Button
        className="bg-black text-white hover:bg-white hover:text-black w-full  mb-5"
        htmlType="submit"
        size="small"
      >
        Delete
      </Button>
    </>
  );
};

export default SingleViewExam;
