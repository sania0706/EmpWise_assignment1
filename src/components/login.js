import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api';


const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const navigate = useNavigate();

  const handleLogin = () => {
    loginUser(email, password)
    .then((res) => {
      if (res.data && res.data.token) {
        localStorage.setItem("token", res.data.token);
         window.location.href = "/users"; 
      
      } else {
        alert("Login failed: No token received");
      }
    })
    
      .catch((err) => {
        console.error("Login error:", err.response?.data || err.message);
        alert("Invalid credentials!");
      });
      
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-300">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm">
        
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-500">Login to proceed</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded"
          onClick={handleLogin}
        >
          Login.. 
        </button>
      </div>
    </div>
  );
};

export default Login;
