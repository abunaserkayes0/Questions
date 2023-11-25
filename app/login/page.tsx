"use client";
import React, { useContext } from "react";
import { AuthContext } from "../layout";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import "antd/dist/antd";
import Link from "next/link";

export default function Login() {
  const value = useContext(AuthContext);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="bg-white p-10 rounded shadow-md w-full sm:w-96">
          <h2 className="font-semibold text-center text-3xl mb-5">Log In</h2>
          <Form onFinish={handleSubmit(onSubmit)}>
            {/* Email Verification */}
            <Controller
              name="email"
              control={control}
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <Form.Item>
                  <Input
                    type="email"
                    prefix={
                      <UserOutlined className="site-form-item-icon p-3" />
                    }
                    placeholder="Email"
                    {...field}
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
            {/* Password Verification */}
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "password must be at least 6 characters",
                },
              }}
              render={({ field }) => (
                <Form.Item>
                  <Input.Password
                    type="password"
                    prefix={
                      <LockOutlined className="site-form-item-icon p-3" />
                    }
                    placeholder="Password"
                    {...field}
                  />
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
            <p>New User?<Link href="/signup" className="underline">SignUp</Link></p>
            <Form.Item className=" flex items-center justify-center">
              <Button
                htmlType="submit"
                className="bg-black text-white hover:bg-white hover:text-black"
                size="large"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}
