"use client";
import React, { useEffect, useState } from "react";
import { Button, Card, Form, Input } from "antd";
import questions from "../../../data/db";
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { usePathname } from "next/navigation";

export default function UpdatePage() {
  const pathname = usePathname();
  const id = parseInt(pathname.slice(8));

  const singleQuestion = questions.find((question) => question.id == id);

  const [form] = Form.useForm();

  const [firstField, setFirstField] = useState(singleQuestion?.question_1);
  const [secondField, setSecondField] = useState(singleQuestion?.question_2);
  const [thirdField, setThirdField] = useState(singleQuestion?.question_3);
  const [fourthField, setFourthField] = useState(singleQuestion?.question_4);

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();
  const onSubmit = (data: any) => {
    data.question_first = firstField;
    data.question_second = secondField;
    data.question_third = thirdField;
    data.question_fourth = fourthField;
    console.log(data);
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
