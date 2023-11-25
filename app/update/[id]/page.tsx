"use client";
import React, { useState } from "react";
import { Button, Card, Form, Input } from "antd";
import questions from "../../../data/db";
import { Controller, set, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { usePathname } from "next/navigation";

export default function UpdatePage() {
  const pathname = usePathname();
  const id = parseInt(pathname.slice(8));
  const singleQuestion = questions.find((question) => question.id == id);
  const [form] = Form.useForm();

  const [firstField, setFirstField] = useState(singleQuestion?.question_1);
  /* const [secondField, setSecondField] = useState(singleQuestion?.question_2);
  const [thirdField, setThirdField] = useState(singleQuestion?.question_3);
  const [fourthField, setFouthField] = useState(singleQuestion?.question_4); */

  /*  const handelFirstField=(e:any)=>
  {
    const inputField = ;
    setFirstField(inputField)
  } */
  /* const handelSecondField=(e:any)=>
  {
    const inputField = e.target.value;
    setFirstField(inputField)
  }
  const handelThirdField=(e:any)=>
  {
    const inputField = e.target.value;
    setFirstField(inputField)
  } */

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
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
                        <Input {...field} placeholder="Second_question" />
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
                        <Input {...field} placeholder="Third_question" />
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
                        <Input {...field} placeholder="Fourth_question" />
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
