"use client";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import React from "react";
import { Controller, useForm } from "react-hook-form";

export default function SignUp() {
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
      <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="bg-white p-10 rounded shadow-md w-full sm:w-96">
          <h2 className="font-semibold text-center text-3xl mb-5">Sign Up</h2>
          <Form onFinish={handleSubmit(onSubmit)}>
            <Controller
              name="UserName"
              control={control}
              rules={{ required: "UserName is required" }}
              render={({ field }) => (
                <Form.Item
                  name="UserName"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input placeholder="UserName" className="p-3" {...field} />
                </Form.Item>
              )}
            />

            <Controller
              name="email"
              control={control}
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input placeholder="Email" className="p-3" {...field} />
                </Form.Item>
              )}
            />

            <Controller
              name="password"
              control={control}
              rules={{ required: "Password is required" }}
              render={({ field }) => (
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                    {
                      len: 6,
                      message: "Password must be at least 6 characters",
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Password"
                    className="p-3"
                    {...field}
                  />
                </Form.Item>
              )}
            />
            <Controller
              name="confirmPassword"
              control={control}
              rules={{ required: "Password is required" }}
              render={({ field }) => (
                <Form.Item
                  name="confirmPassword"
                  dependencies={["password"]}
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("Password did not match")
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    placeholder="Confirm-Password"
                    className="p-3"
                    {...field}
                  />
                </Form.Item>
              )}
            />
            <p>
              Already Have An Account?
              <Link href="/login" className="underline">
                Login
              </Link>
            </p>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                className="bg-black text-white hover:bg-white hover:text-black"
                size="large"
                htmlType="submit"
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}
