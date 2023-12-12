"use client";
import React, { useState } from "react";
import { Button, Card, Form, Input, Upload, message } from "antd";
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
// Upload-image
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";

import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export default function CreateStudentProfile() {
  const router = useRouter();
  const [form] = Form.useForm();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    const userData = {
      firstName: data.firstname,
      lastName: data.lastname,
      username: data.username,
      email: data.email,
      password: data.password,
    };

    axios
      .post(`http://143.110.190.164:3000/student/profile/create`, userData)
      .then((response) => {
        if (response.status === 201) {
          toast.success("Data created successfully...");
        }
      })
      .catch((err) => console.log(err));
      reset();
  };
  // Image-Upload
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
                Create Student Profile
              </h2>
              <Card className="shadow">
                <Controller
                  name={`firstname`}
                  control={control}
                  render={({ field }) => (
                    <Form.Item>
                      <Input {...field} placeholder="First-Name" />
                      <ErrorMessage
                        errors={errors}
                        name="firstname"
                        render={({ message }) => (
                          <p className="text-red-400">{message}</p>
                        )}
                      />
                    </Form.Item>
                  )}
                />
                <Controller
                  name={`lastname`}
                  control={control}
                  render={({ field }) => (
                    <Form.Item>
                      <Input {...field} placeholder="Last-Name" />
                      <ErrorMessage
                        errors={errors}
                        name="lastname"
                        render={({ message }) => (
                          <p className="text-red-400">{message}</p>
                        )}
                      />
                    </Form.Item>
                  )}
                />
                <Controller
                  name={`username`}
                  control={control}
                  render={({ field }) => (
                    <Form.Item>
                      <Input {...field} placeholder="Username" />
                      <ErrorMessage
                        errors={errors}
                        name="username"
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
                  name={`password`}
                  control={control}
                  render={({ field }) => (
                    <Form.Item>
                      <Input.Password {...field} placeholder="Password" />
                      <ErrorMessage
                        errors={errors}
                        name="password"
                        render={({ message }) => (
                          <p className="text-red-400">{message}</p>
                        )}
                      />
                    </Form.Item>
                  )}
                />
                {/* <Controller
                  name="picture"
                  control={control}
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
                /> */}
              </Card>
            </div>
          )}
        </Form.List>
        <Form.Item>
          <div className="my-5">
            <Button
              className="bg-black text-white my-5 hover:bg-white hover:text-black"
              htmlType="submit"
            >
              Submit
            </Button>
          </div>
        </Form.Item>
      </Form>
    </>
  );
}
