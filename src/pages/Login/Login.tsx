import "./Login.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthContext";

export function Login() {
const { loginUser} =useAuth();
const navigate = useNavigate();

const [email, setEmail] =useState("");
const [password, setPassword] =useState("");

 const loginHandler =async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
        const { success } =await loginUser(email, password);

        if ( success ) {
            navigate ("/" , {replace: true});
        }
    } catch (error) {
        console.error(error);
    }
    };


    return (
        <div className="login-page">
      <div className="login-page-content">
        <div className="login-form-heading">
          <h1> Login </h1>
          <button
            onClick={() => {
              setEmail("test@gmail.com");
              setPassword("test");
            }}
            className="btn-guest"
          >
            Use guest credentials
          </button>
        </div>
        <div className="login-form">
          <form onSubmit={(e) => loginHandler(e)}>
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              className="input-text input-text-lg input-text-form"
              onChange={(e) => setEmail(() => e.target.value)}
            />
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              className="input-text input-text-lg input-text-form"
              onChange={(e) => setPassword(() => e.target.value)}
            />
            <button type="submit" className="btn btn-primary btn-login">
              Login
            </button>
          </form>
        </div>
        <div>
          Not a member yet?
          <Link to="/signup" className="link-signup">
            Signup
          </Link>
        </div>
      </div>
    </div>

    );
}  




