"use client";
import React from "react";
import { Button, Card, Form, Input, Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function page() {
  const [form] = Form.useForm();
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
                <Card
                  size="small"
                  title={`Question-${index + 1}`}
                  key={field.key}
                  extra={
                    <CloseOutlined
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  }
                >
                  <Controller
                    name={`question_title-${index + 1}`}
                    control={control}
                    render={({ field }) => (
                      <Form.Item>
                        <Input.TextArea
                          {...field}
                          placeholder="Question-Title"
                        />
                        <ErrorMessage
                          errors={errors}
                          name="question_title"
                          render={({ message }) => (
                            <p className="text-red-400">{message}</p>
                          )}
                        />
                      </Form.Item>
                    )}
                  />
                  <Controller
                    name={`question_first_${index + 1}`}
                    control={control}
                    render={({ field }) => (
                      <Form.Item>
                        <Input {...field} placeholder="First_question" />
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
                    name={`question_second_${index + 1}`}
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
                    name={`question_third_${index + 1}`}
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
                    name={`question_fourth_${index + 1}`}
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

                  <Controller
                    name={`correct_answer_${index + 1}`}
                    control={control}
                    render={({ field }) => (
                      <Form.Item>
                        <Input {...field} placeholder="Correct_question" />
                        <ErrorMessage
                          errors={errors}
                          name="correct_answer"
                          render={({ message }) => (
                            <p className="text-red-400">{message}</p>
                          )}
                        />
                      </Form.Item>
                    )}
                  />
                </Card>
              ))}

              <Button
                className="bg-black text-white hover:bg-white hover:text-black mb-5"
                onClick={() => add()}
                block
              >
                + Add Item
              </Button>
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
