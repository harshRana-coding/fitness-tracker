import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // For navigation
import "../Components/styles.css";
import Footer from "./footer";
import Header from "./header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!acceptedPolicy) {
      setError("You must accept the privacy policy.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token); // Save token for authentication
        localStorage.setItem("email", email); // Save email
        navigate("/home"); // Navigate to the homepage
      } else {
        setError("Invalid email or password.");
      }
    } catch (error) {
      setError("An error occurred while logging in. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="form-card">
          <h2 className="title">Login</h2>
          <form onSubmit={handleSubmit} className="formBox">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingEmail"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="floatingEmail">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="privacyPolicy"
                checked={acceptedPolicy}
                onChange={(e) => setAcceptedPolicy(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="privacyPolicy">
                I accept the privacy policy
              </label>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="button-container">
              <button type="submit" className="btn btn-primary custom-btn" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;