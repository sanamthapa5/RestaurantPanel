import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/Dashboard");
  };

  return (
    <div className="Login-login-container">
      <div className="Login-image-section">
        <img
          src="https://media.istockphoto.com/id/1161996776/photo/stack-of-pancakes-with-maple-syrup-and-fresh-blueberries.jpg?s=612x612&w=0&k=20&c=YHiFq3dlQwXbQtYnxYFrAXzmai31lTRTvmgD0zFKwMM="
          alt="Login"
        />
      </div>
      <div className="Login-form-section">
        <img
          src="https://stackfood-admin.6amtech.com/storage/app/public/business/2022-04-17-625c012c3c07d.png"
          alt="Logo"
          className="Login-form-logo"
        />
        <h2 className="Login-signinpanel">Signin To Your Panel</h2>
        <form onSubmit={handleLogin}>
          <div className="Login-input-group">
            <label>Your Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <label>Password</label>
          <div className="Login-password-container">
            <input
              type={isVisible ? "text" : "password"}
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="Login-eye-button"
              onClick={() => setIsVisible(!isVisible)}
            >
              {isVisible ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="Login-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="Login-forgot-password">
              Forgot Password
            </a>
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
