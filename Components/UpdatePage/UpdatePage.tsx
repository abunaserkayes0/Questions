"use client";
import React, { useEffect, useState } from "react";
import { Button, Card, Form, Input } from "antd";
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import Spinner from "../Spinner/Spinner";

export default function UpdatePage({ id, handleCancel }: any) {
  const [form] = Form.useForm();
  const [singleQuestion, setSingleQuestion] = useState({});

  const [isLoading, setIsLoading] = useState(true);
  const [firstField, setFirstField] = useState("");
  const [secondField, setSecondField] = useState("");
  const [thirdField, setThirdField] = useState("");
  const [fourthField, setFourthField] = useState("");

  if (isLoading) {
    <Spinner />;
  }
  useEffect(() => {
    axios
      .get(`http://143.110.190.164:3000/teacher/question/find/${id}`)
      .then((response) => {
        const questionOptions = response.data.options;
        setFirstField(questionOptions[0]);
        setSecondField(questionOptions[1]);
        setThirdField(questionOptions[2]);
        setFourthField(questionOptions[3]);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    const userData = {
      text: data.question_title,
      options: [
        (data.question_first = firstField),
        (data.question_second = secondField),
        (data.question_third = thirdField),
        (data.question_fourth = fourthField),
      ],
      correctOption: data.correct_answer,
    };
    axios
      .put(
        `http://143.110.190.164:3000/teacher/question/update/${id}`,
        userData
      )
      .then((response) => {
        setSingleQuestion(response.data);
        handleCancel();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Form
        onFinish={handleSubmit(onSubmit)}
        form={form}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
        }}
        autoComplete="off"
        initialValues={{ items: [{}] }}
      >
        <Form.List name="items">
          {(fields, { add, remove }) => (
            <div
              style={{
                display: "flex",
                rowGap: 20,
                minWidth: 500,
                flexDirection: "column",
              }}
            >
              {fields.map((field, index) => (
                <Card size="small" key={field.key}>
                  <Controller
                    name="question_first"
                    control={control}
                    render={({ field }) => (
                      <Form.Item>
                        <Input
                          {...field}
                          placeholder="First_question"
                          value={firstField}
                          onChange={(e) => setFirstField(e.target.value)}
                        />
                        <ErrorMessage
                          errors={errors}
                          name="question_1"
                          render={({ message }) => (
                            <p className="text-red-400">{message}</p>
                          )}
                        />
                      </Form.Item>
                    )}
                  />
                  <Controller
                    name={`question_second`}
                    control={control}
                    render={({ field }) => (
                      <Form.Item>
                        <Input
                          {...field}
                          value={secondField}
                          onChange={(e) => {
                            setSecondField(e.target.value);
                          }}
                          placeholder="Second_question"
                        />
                        <ErrorMessage
                          errors={errors}
                          name="question_2"
                          render={({ message }) => (
                            <p className="text-red-400">{message}</p>
                          )}
                        />
                      </Form.Item>
                    )}
                  />

                  <Controller
                    name={`question_third`}
                    control={control}
                    render={({ field }) => (
                      <Form.Item>
                        <Input
                          {...field}
                          value={thirdField}
                          onChange={(e) => {
                            setThirdField(e.target.value);
                          }}
                          placeholder="Third_question"
                        />
                        <ErrorMessage
                          errors={errors}
                          name="question_3"
                          render={({ message }) => (
                            <p className="text-red-400">{message}</p>
                          )}
                        />
                      </Form.Item>
                    )}
                  />

                  <Controller
                    name={`question_fourth`}
                    control={control}
                    render={({ field }) => (
                      <Form.Item>
                        <Input
                          {...field}
                          value={fourthField}
                          onChange={(e) => {
                            setFourthField(e.target.value);
                          }}
                          placeholder="Fourth_question"
                        />
                        <ErrorMessage
                          errors={errors}
                          name="question_4"
                          render={({ message }) => (
                            <p className="text-red-400">{message}</p>
                          )}
                        />
                      </Form.Item>
                    )}
                  />
                </Card>
              ))}
            </div>
          )}
        </Form.List>
        <Form.Item>
          <Button
            className="bg-black text-white hover:bg-white hover:text-black"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
