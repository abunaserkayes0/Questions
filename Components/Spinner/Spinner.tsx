import { ConfigProvider, Spin } from "antd";
import "antd/dist/antd";
import React from "react";

export default function Spinner() {
  return (
    <div className="flex h-screen items-center justify-center">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary:"#000",
          },
        }}
      >
        <Spin size="large" />
      </ConfigProvider>
    </div>
  );
}
