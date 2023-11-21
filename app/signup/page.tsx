"use client";
import React, { useState } from "react";

export default function SignUp() {
  const [error, setError] = useState("");

  const handelSignUp = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.password_confirmation.value;
    const signUpUser = {
      username,
      email,
      password,
      confirmPassword,
    };

    console.log(password.length);
    

    if (password !== confirmPassword) {
      setError("Password did not match");
      return;
    }
    if ((password.length && confirmPassword.length) < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    console.log(signUpUser);
    setError("");

    form.reset();
  };
  return (
    <>
      <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
          <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>

          <form onSubmit={handelSignUp}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
              {error && <p className="text-red-500">{error}</p>}
            </div>

            <div className="mb-6">
              <label
                htmlFor="password_confirmation"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
              {error && <p className="text-red-500">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
