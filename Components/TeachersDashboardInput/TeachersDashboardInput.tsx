import useFetchTeachers from "@/hooks/useFetchTeachers";
import { TreeSelect } from "antd";
import React, { useState } from "react";

export default function TeachersDashboardInput() {
  const { teachers } = useFetchTeachers();
  console.log(teachers);

  const transformData = (teacher: any) =>
    teachers.map((teacher: any) => ({
      value: teacher.firstName,
      title: teacher.firstName,
    }));

  const treeData = transformData(teachers);

  const [value, setValue] = useState();

  const onChange = (newValue: any) => {
    setValue(newValue);
  };

  return (
    <TreeSelect
      showSearch
      style={{
        width: "100%",
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: "auto",
      }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
    />
  );
}
