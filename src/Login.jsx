import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${baseUrl}/login`, {
        password: password,
        username: username,
      })
      .then((res) => {
        const token = res.data.data.token;
        console.log("token", token);
        localStorage.setItem("token", token);
        navigate("/home");
      })
      .catch((error) => {
        alert("Failed Login: " + error.message);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-700">
      <form className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl mb-6 font-bold text-gray-800 text-center">
          TODO List
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">username</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter your username"
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
            id="password"
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter your password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={(e) => {
            handleLogin(e);
          }}
        >
          Sign In
        </button>
        <div className="flex justify-center pt-10">
          <div className="text-xl">
            Dont have account?{" "}
            <span>
              <Link to="/register">register here!</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
