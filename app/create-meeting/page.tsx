"use client";
import React, { useState } from "react";
import { Button, Card, Form, Input, Select, TreeSelect } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import useFetchTeachers from "@/hooks/useFetchTeachers";
import useFetchStudents from "@/hooks/useFetchStudents";
export default function CreateMeeting() {
  const { teachers } = useFetchTeachers();
  const { students } = useFetchStudents();
  const [value, setValue] = useState();

  const transformData = (teacher: any) =>
    students.map((teacher: any) => ({
      value: teacher.firstName,
      title: teacher.firstName,
    }));

  const treeData = transformData(teachers);
  const onChange = (newValue: any) => {
    setValue(newValue);
  };

  const [form] = Form.useForm();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    const userData = {
      text: data.question_title,
      options: [
        data.question_first,
        data.question_second,
        data.question_third,
        data.question_fourth,
      ],
      correctOption: data.correct_answer,
    };
    axios
      .post("http://143.110.190.164:3000/teacher/question/create", userData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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
                <Card
                  className="shadow mt-5"
                  size="small"
                  title={`Create Meeting`}
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
                    name={`title`}
                    control={control}
                    render={({ field }) => (
                      <Form.Item>
                        <Input {...field} placeholder="Enter Title" />
                        <ErrorMessage
                          errors={errors}
                          name="title"
                          render={({ message }) => (
                            <p className="text-red-400">{message}</p>
                          )}
                        />
                      </Form.Item>
                    )}
                  />
                  <Controller
                    name={`url`}
                    control={control}
                    render={({ field }) => (
                      <Form.Item>
                        <Input {...field} placeholder="Enter URL" />
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
                    name="teachers"
                    control={control}
                    render={({ field }) => (
                      <Form.Item>
                        <TreeSelect
                          {...field}
                          showSearch
                          style={{
                            width: "100%",
                          }}
                          value={value}
                          dropdownStyle={{
                            maxHeight: 400,
                            overflow: "auto",
                          }}
                          placeholder="Select teachers..."
                          allowClear
                          treeDefaultExpandAll
                          onChange={onChange}
                          treeData={treeData}
                        />
                      </Form.Item>
                    )}
                  />
                  <Controller
                    name="students"
                    control={control}
                    render={({ field }) => (
                      <Form.Item>
                        <Select
                          {...field}
                          mode="multiple"
                          style={{ width: "100%" }}
                          placeholder="Select students..."
                          options={students.map((option: any) => ({
                            value: option.firstName,
                            label: option.firstName.toString(),
                          }))}
                        />
                      </Form.Item>
                    )}
                  />
                  <Controller
                    name={`meetingTime`}
                    control={control}
                    render={({ field }) => (
                      <Form.Item>
                        <Input {...field} placeholder="Enter Meeting Time" />
                        <ErrorMessage
                          errors={errors}
                          name="meetingTime"
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
        <Form.Item className="my-5">
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
