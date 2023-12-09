"use client";
import React, { useState } from "react";
import { Button, Card, Form, Input, Upload, message } from "antd";
import { Controller, useForm } from "react-hook-form";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
export default function CreateTeacherProfile() {
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
      picture: "",
      dateOfBirth: data.dateOfBirth,
      classrooms: [],
      exams: [],
    };

    axios
      .post(`http://143.110.190.164:3000/teacher/profile/create`, userData)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const getBase64 = (img: any, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
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
              <h2 className="text-2xl font-semibold mt-5">
                Create Teacher Profile
              </h2>
              <Card>
                <Controller
                  name={`firstName`}
                  control={control}
                  render={({ field }) => (
                    <Form.Item>
                      <Input {...field} placeholder="first_name" />
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
                      <Input {...field} placeholder="last_name" />
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
                <Controller
                  name={`email`}
                  control={control}
                  render={({ field }) => (
                    <Form.Item>
                      <Input {...field} placeholder="email" />
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
                  name="picture"
                  control={control}
                  defaultValue={[]}
                  render={({ field }) => (
                    <Upload
                      {...field}
                      name="avatar"
                      listType="picture-card"
                      className="avatar-uploader"
                      showUploadList={false}
                      action="https://run.mocky.io/v3/89acec74-6b0b-406f-a1a6-1713c59af852"
                      beforeUpload={beforeUpload}
                      onChange={handleChange}
                    >
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt="avatar"
                          style={{ width: "100%" }}
                        />
                      ) : (
                        uploadButton
                      )}
                    </Upload>
                  )}
                />
              </Card>
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
