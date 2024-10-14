import "./RegisterPage.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function RegisterPage() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handelSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await axios.post("http://localhost:8800/api/auth/register", {
        username,
        email,
        password,
      });
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "An unexpected error occurred");
    } finally {
      setIsLoading(true);
    }
  };

  return (
    <>
      <div className="register">
        <div className="register-formContainer">
          <form onSubmit={handelSubmit}>
            <h1>Create an Account</h1>
            <input name="username" type="text" placeholder="Username" />
            <input name="email" type="text" placeholder="Email" />
            <input name="password" type="password" placeholder="Password" />
            <button disabled={isLoading}>
              {isLoading ? "loading..." : "Register"}
            </button>
            {error && <span className="error">{error}</span>}
            <Link to="/login" className="redirect">
              Do you have an account? Login
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
