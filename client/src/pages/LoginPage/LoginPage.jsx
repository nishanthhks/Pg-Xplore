import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./loginPage.scss";
import axios from "axios";

export default function LoginPage() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handelSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/login",
        {
          username,
          password,
        },
        {
          withCredentials: true, // Ensure cookies are sent and received
        }
      );
      console.log(res);
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="login">
        <div className="login-formContainer">
          <form onSubmit={handelSubmit}>
            <h1>Welcome Back</h1>
            <input
              name="username"
              type="text"
              placeholder="Username"
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
            />
            <button disabled={isLoading}>Login</button>
            {error && <span className="error">{error}</span>}
            <Link to="/register" className="redirect">
              new here ? register
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
