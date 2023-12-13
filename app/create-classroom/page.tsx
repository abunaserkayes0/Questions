"use client";
import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select, TreeSelect } from "antd";
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import useFetchTeachers from "@/hooks/useFetchTeachers";
import useFetchStudents from "@/hooks/useFetchStudents";
import axios from "axios";
export default function CreateClassroom() {
  const [value, setValue] = useState(null);
  // const [teacherInfo, setTeacherInfo] = useState({});
  // const [studentInfo, setStudentInfo] = useState<any[]>([]);
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [form] = Form.useForm();
  const { teachers } = useFetchTeachers();
  const { students } = useFetchStudents();

  const transformData = (teacher: any) =>
    teachers.map((teacher: any) => ({
      value: teacher._id,
      title: teacher.firstName + " " + "(" + teacher._id.slice(0, 7) + ")",
    }));

  const treeData = transformData(teachers);
  const onChange = (newValue: any) => {
    setValue(newValue);
  };
  const handleSelectChange = (selectedValues: any) => {
    setSelectedStudents(selectedValues);
  };
  // const [isLoading, setIsLoading] = useState(true);

  /* useEffect(() => {
    setIsLoading(true);
    loadTeacherDetails(value);
  }, [value]); */

  /*  const loadTeacherDetails = (id: any) => {
    if (id === undefined) {
      setIsLoading(false);
      return;
    }
    axios
      .get(`http://143.110.190.164:3000/teacher/profile/find/${id}`)
      .then((response) => {
        setTeacherInfo(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }; */

  /* useEffect(() => {
    setIsLoading(true);
    if (selectedStudents.length > 0) {
      loadStudentDetails(selectedStudents);
    }
  }, [selectedStudents]);
  const loadStudentDetails = (selectedStudents: any) => {
    selectedStudents.forEach((id: any) => {
      axios
        .get(`http://143.110.190.164:3000/student/profile/find/${id}`)
        .then((response) => {
          setStudentInfo([...studentInfo, response.data]);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    });
  }; */

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    const userData = {
      name: data.classroom,
      teacher: value,
      students: selectedStudents,
    };
    axios
      .post(`http://143.110.190.164:3000/teacher/classroom/create`, userData)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    setValue(null);
    setSelectedStudents([]);
    reset();
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
                  value: option._id,
                  label:
                    option.firstName + " " + "(" + option._id.slice(0, 6) + ")",
                }))}
                onChange={handleSelectChange}
                value={selectedStudents}
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
