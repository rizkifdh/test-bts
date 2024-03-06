import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const handleRegister = () => {
    axios
      .post(`${baseUrl}/register`, {
        email: email,
        username: username,
        password: password,
      })
      .then((res) => {
        alert("Success Register");
      })
      .catch((error) => {
        alert("Failed Register: Account already registered");
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-700">
      <form className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl mb-6 font-bold text-gray-800 text-center">
          Register - TODO List
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">email</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">username</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter username"
            onChange={(e) => {
              setusername(e.target.value);
            }}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleRegister}
        >
          Sign Up
        </button>
        <div className="flex justify-center pt-10">
          <div className="text-xl">
            Already have account?{" "}
            <span className="underline hover:font-bold">
              <Link to="/login">login here!</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
