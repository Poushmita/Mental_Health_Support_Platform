import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [animation, setAnimation] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Only apply animation if we came from login
    const panelAction = sessionStorage.getItem("panelAction");
    if (panelAction === "login") {
      setAnimation("animate-slide-left");
      sessionStorage.removeItem("panelAction");
    }
  }, []);

  const handleLoginClick = () => {
    // Slide right before navigating
    setAnimation("animate-slide-right");
    sessionStorage.setItem("panelAction", "signup");

    setTimeout(() => {
      navigate("/login");
    }, 700); // Match animation duration (0.7s)
    sessionStorage.removeItem("panelAction");
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("/api/signup/", { name, email, password });
      console.log("Signup success:", response.data);
    } catch (err) {
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center"
      style={{ backgroundImage: 'linear-gradient(to right, #F1DDD2, #EDF6F9)' }}
    >
      <div className="flex w-[900px] rounded-lg shadow-2xl overflow-hidden transition-all duration-500">
        {/* Green Panel */}
        <div
          className={`w-1/2 text-white p-10 flex flex-col justify-center items-center text-center ${animation}`}
          style={{ backgroundImage: 'linear-gradient(to right, #2f655f, #387770, #408981, #499b93)' }}
        >
          <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
          <p className="mb-8">To keep connected with us please login with your personal info</p>
          <button
            onClick={handleLoginClick}
            className="mt-4 border-2 border-white py-2 px-6 rounded-full font-semibold hover:bg-white hover:text-red-500 transition"
          >
            LOG IN
          </button>
        </div>

        {/* Signup Form */}
        <div className="w-1/2 bg-white p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Create Account</h2>

          {error && <div className="text-red-500 text-sm text-center mb-4">{error}</div>}

          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mb-6 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              type="submit"
              className="text-white w-full py-2 rounded-full font-semibold transition"
              style={{ backgroundColor: "#E29578" }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#d8775c')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#E29578')}
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

