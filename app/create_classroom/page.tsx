"use client";
import React from "react";
import { Button, Card, Form, Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function CreateClassroom() {
  const [form] = Form.useForm();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <Form
        form={form}
        name="dynamic_form_complex"
        autoComplete="off"
        onFinish={handleSubmit(onSubmit)}
        initialValues={{ items: [{}] }}
        className="my-10 mx-auto w-1/4"
      >
        <Controller
          name="classroom"
          control={control}
          rules={{ required: "Classroom is required" }}
          render={({ field }) => (
            <Form.Item>
              <Input {...field} placeholder="Classroom" />
              <ErrorMessage
                errors={errors}
                name="classroom"
                render={({ message }) => (
                  <p className="text-red-400">{message}</p>
                )}
              />
            </Form.Item>
          )}
        />
        <Controller
          name="teacher_id"
          control={control}
          rules={{ required: "Teacher is required" }}
          render={({ field }) => (
            <Form.Item>
              <Input {...field} placeholder="Teacher id" />
              <ErrorMessage
                errors={errors}
                name="classroom"
                render={({ message }) => (
                  <p className="text-red-400">{message}</p>
                )}
              />
            </Form.Item>
          )}
        />
        <h2 className="text-center font-bold mb-3">Student Id</h2>
        <Form.List name="items">
          {(fields, { add, remove }) => (
            <div>
              {fields.map((field, index) => (
                <Card
                  size="small"
                  title={`Question ${field.name + 1}`}
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
                    name={`name-${index + 1}`}
                    control={control}
                    rules={{ required: "name required" }}
                    render={({ field }) => (
                      <Form.Item
                        className="mb-3"
                        rules={[
                          { required: true, message: "Missing first name" },
                        ]}
                      >
                        <Input placeholder="First Name" {...field} />
                      </Form.Item>
                    )}
                  />
                </Card>
              ))}
              <Button
                className="bg-black text-white hover:bg-white hover:text-black mb-3"
                size="large"
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
            className="bg-black text-white hover:bg-white hover:text-black mb-3 my-0 mx-auto block"
            htmlType="submit"
            size="large"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
