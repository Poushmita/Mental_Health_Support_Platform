import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState("");
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    const panelAction = sessionStorage.getItem("panelAction");
    if (panelAction === "signup") {
      setAnimation("animate-slide-right");
      sessionStorage.removeItem("panelAction");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignupClick = () => {
    setAnimation("animate-slide-left");
    sessionStorage.setItem("panelAction", "login");

    setTimeout(() => {
      navigate("/signup");
    }, 700);
    sessionStorage.removeItem("panelAction");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:8000/api/login/", formData);
      alert("Login successful!");
      console.log(res.data);
      navigate("/"); // Optional redirect after login
    } catch (error) {
      alert("Login failed!");
      console.error(error);
      setError("Invalid username or password");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "linear-gradient(to right, #F1DDD2, #EDF6F9)" }}
    >
      <div className="flex w-[900px] rounded-lg shadow-2xl overflow-hidden transition-all duration-500">
        {/* Login Form */}
        <div className="w-1/2 bg-white p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Log in</h2>

          {error && (
            <div className="text-red-500 text-sm mb-4 text-center">{error}</div>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mb-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <div className="text-right mb-6">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-800">
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="text-white w-full py-2 rounded-full font-semibold transition"
              style={{ backgroundColor: "#E29578" }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "#d8775c")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "#E29578")
              }
            >
              LOG IN
            </button>
          </form>
        </div>

        {/* Animated Panel */}
        <div
          className={`w-1/2 text-white p-10 flex flex-col justify-center items-center text-center ${animation}`}
          style={{
            backgroundImage:
              "linear-gradient(to right, #499b93, #408981, #387770, #2f655f)",
          }}
        >
          <h2 className="text-3xl font-bold mb-4">Hello, Friend!</h2>
          <p className="mb-8">
            Enter your personal details and start journey with us
          </p>
          <Link
            to="/signup"
            onClick={() => sessionStorage.setItem("panelAction", "login")}
            className="mt-4 text-white"
          >
            <button
              className="border-2 border-white py-2 px-6 rounded-full font-semibold transition duration-300 ease-in-out hover:bg-white hover:text-pink-600"
              onClick={handleSignupClick}
            >
              SIGN UP
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

