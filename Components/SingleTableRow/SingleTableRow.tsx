"use client"
import React from "react";

export default function SingleTableRow({ student }: any) {
  const { firstName, lastName, username, email } = student;
  return (
    <td className="grid grid-cols-4 items-center py-2">
      <span className="text-center">{firstName}</span>
      <span className="text-center">{lastName}</span>
      <span className="text-center">{username}</span>
      <span className="text-center">{email}</span>
    </td>
  );
}
