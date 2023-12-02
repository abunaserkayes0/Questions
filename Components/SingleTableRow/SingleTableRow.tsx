"use client"
import React from "react";

export default function SingleTableRow({ student }: any) {
  const { name, phone, username, website } = student;
  return (
    <td className="grid grid-cols-4 items-center py-2">
      <span className="text-center">{name}</span>
      <span className="text-center">{phone}</span>
      <span className="text-center">{username}</span>
      <span className="text-center">{website}</span>
    </td>
  );
}
