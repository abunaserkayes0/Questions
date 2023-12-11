"use client";
import useFetchStudents from "@/hooks/useFetchStudents";
import useFetchTeachers from "@/hooks/useFetchTeachers";
import { ErrorMessage } from "@hookform/error-message";
import { Button, Form, Input, Select, TreeSelect } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

export default function AddStudentClassRoom() {
  const [value, setValue] = useState();
  const [form] = Form.useForm();
  const { teachers } = useFetchTeachers();
  const { students } = useFetchStudents();
  console.log(students);

  const transformData = (teacher: any) =>
    students.map((teacher: any) => ({
      value: teacher.firstName,
      title: teacher.firstName,
    }));

  const treeData = transformData(teachers);
  const onChange = (newValue: any) => {
    setValue(newValue);
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);

    const userData = {
      classroom: data.classroom,
      teachers: value,
      students: data.students,
    };

    axios
      .put(
        `http://143.110.190.164:3000/teacher/classroom/remove/student/:id`,
        userData
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
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
        <Form.Item className="my-5">
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
