import { ErrorMessage } from "@hookform/error-message";
import { Button, Card, Form, Input } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Spinner from "../Spinner/Spinner";

export default function UpdateTeacherDashBoard({ id }: any) {
  const [form] = Form.useForm();

  const [isLoading, setIsLoading] = useState(true);
  const [firstField, setFirstField] = useState("");
  const [secondField, setSecondField] = useState("");
  const [thirdField, setThirdField] = useState("");
  const [fourthField, setFourthField] = useState("");

  if (isLoading) {
    <Spinner />;
  }

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    axios
      .get(`http://143.110.190.164:3000/teacher/profile/find/${id}`)
      .then((response) => {
        setFirstField(response.data.firstName);
        setSecondField(response.data.lastName);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const onSubmit = (data: any) => {
    data.first_field = firstField;
    data.second_field = secondField;

    const userData = {
      firstName: data.first_field,
      lastName: data.second_field,
    };
    axios
      .put(`http://143.110.190.164:3000/teacher/profile/update/${id}`, userData)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <>
        <Form
          onFinish={handleSubmit(onSubmit)}
          form={form}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
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
                  <Card size="small" key={field.key}>
                    <Controller
                      name="first_field"
                      control={control}
                      render={({ field }) => (
                        <Form.Item>
                          <Input
                            {...field}
                            placeholder="First_field"
                            value={firstField}
                            onChange={(e) => setFirstField(e.target.value)}
                          />
                          <ErrorMessage
                            errors={errors}
                            name="field_1"
                            render={({ message }) => (
                              <p className="text-red-400">{message}</p>
                            )}
                          />
                        </Form.Item>
                      )}
                    />
                    <Controller
                      name={`second_field`}
                      control={control}
                      render={({ field }) => (
                        <Form.Item>
                          <Input
                            {...field}
                            value={secondField}
                            onChange={(e) => {
                              setSecondField(e.target.value);
                            }}
                            placeholder="Second_field"
                          />
                          <ErrorMessage
                            errors={errors}
                            name="field_2"
                            render={({ message }) => (
                              <p className="text-red-400">{message}</p>
                            )}
                          />
                        </Form.Item>
                      )}
                    />

                    {/* <Controller
                      name={`third_field`}
                      control={control}
                      render={({ field }) => (
                        <Form.Item>
                          <Input
                            {...field}
                            value={thirdField}
                            onChange={(e) => {
                              setThirdField(e.target.value);
                            }}
                            placeholder="Third_field"
                          />
                          <ErrorMessage
                            errors={errors}
                            name="field_3"
                            render={({ message }) => (
                              <p className="text-red-400">{message}</p>
                            )}
                          />
                        </Form.Item>
                      )}
                    /> */}

                    {/* <Controller
                      name={`fourth_field`}
                      control={control}
                      render={({ field }) => (
                        <Form.Item>
                          <Input
                            {...field}
                            value={fourthField}
                            onChange={(e) => {
                              setFourthField(e.target.value);
                            }}
                            placeholder="Fourth_field"
                          />
                          <ErrorMessage
                            errors={errors}
                            name="field_4"
                            render={({ message }) => (
                              <p className="text-red-400">{message}</p>
                            )}
                          />
                        </Form.Item>
                      )}
                    /> */}
                  </Card>
                ))}
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
    </>
  );
}
