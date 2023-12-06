"use client";
import React from "react";
import { Button, Card, Form, Input } from "antd";
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { CloseOutlined } from "@ant-design/icons";
import axios from "axios";
export default function CreateStudentProfile() {
  const [form] = Form.useForm();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    const userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.userName,
      password: "",
      email: data.userEmail,
      picture: null,
      dateOfBirth: data.dateOfBirth,
      classrooms: [],
      exams: [],
    };

    axios
      .post(`http://143.110.190.164:3000/student/profile/create`, userData)
      .then((response) => console.log(response))
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
              <h2 className="text-4xl font-semibold">Create Student Profile</h2>
              <Card>
                <section className="flex gap-5 mb-5">
                  <Controller
                    name={`firstName`}
                    control={control}
                    render={({ field }) => (
                      <Form.Item>
                        <Input
                          {...field}
                          placeholder="first_name"
                          className="text-xl"
                        />
                        <ErrorMessage
                          errors={errors}
                          name="first_name"
                          render={({ message }) => (
                            <p className="text-red-400">{message}</p>
                          )}
                        />
                      </Form.Item>
                    )}
                  />
                  <Controller
                    name={`lastName`}
                    control={control}
                    render={({ field }) => (
                      <Form.Item>
                        <Input
                          {...field}
                          placeholder="last_name"
                          className="text-xl"
                        />
                        <ErrorMessage
                          errors={errors}
                          name="last_name"
                          render={({ message }) => (
                            <p className="text-red-400">{message}</p>
                          )}
                        />
                      </Form.Item>
                    )}
                  />
                </section>
                <section className="flex mb-5 ">
                  <Controller
                    name={`userName`}
                    control={control}
                    render={({ field }) => (
                      <Form.Item>
                        <Input
                          {...field}
                          placeholder="Username"
                          className="text-xl"
                        />
                        <ErrorMessage
                          errors={errors}
                          name="Username"
                          render={({ message }) => (
                            <p className="text-red-400">{message}</p>
                          )}
                        />
                      </Form.Item>
                    )}
                  />
                </section>
                <section className="flex mb-5 gap-5">
                  <Controller
                    name={`dateOfBirth`}
                    control={control}
                    render={({ field }) => (
                      <Form.Item>
                        <Input
                          {...field}
                          placeholder="Date_of_birth"
                          className="text-xl"
                        />
                        <ErrorMessage
                          errors={errors}
                          name="date_of_birth"
                          render={({ message }) => (
                            <p className="text-red-400">{message}</p>
                          )}
                        />
                      </Form.Item>
                    )}
                  />

                  <Controller
                    name={`email`}
                    control={control}
                    render={({ field }) => (
                      <Form.Item>
                        <Input
                          {...field}
                          placeholder="email"
                          className="text-xl"
                        />
                        <ErrorMessage
                          errors={errors}
                          name="email"
                          render={({ message }) => (
                            <p className="text-red-400">{message}</p>
                          )}
                        />
                      </Form.Item>
                    )}
                  />
                  <Controller
                    name={`picture`}
                    control={control}
                    render={({ field }) => (
                      <Form.Item>
                        <Input
                          {...field}
                          placeholder="picture"
                          className="text-xl"
                        />
                        <ErrorMessage
                          errors={errors}
                          name="picture"
                          render={({ message }) => (
                            <p className="text-red-400">{message}</p>
                          )}
                        />
                      </Form.Item>
                    )}
                  />
                </section>
              </Card>
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
