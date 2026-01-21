"use client"
import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [regNo, setRegNo] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", { regNo, password });
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#f0f2f5] overflow-hidden font-sans">
      
      {/* Background Wave */}
      <div className="absolute bottom-0 w-full h-[50vh] bg-linear-to-r from-[#3b71ca] to-[#2c56a0] transition-all duration-500">
        <svg 
          className="absolute top-0 w-full h-24 -translate-y-full" 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
        >
          <path 
            fill="url(#gradient)" 
            d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,138.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          >
          </path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b71ca" />
              <stop offset="100%" stopColor="#2c56a0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Login Card */}
      <div className="relative w-full max-w-md bg-white p-10 rounded-lg shadow-2xl mx-4 border-t-4 border-[#3b71ca]">
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-linear-to-br from-[#3b71ca] to-[#2c56a0] rounded-full flex items-center justify-center border-8 border-[#f0f2f5] shadow-xl">
          <User size={48} className="text-white" strokeWidth={2.5} />
        </div>

        <div className="text-center mt-12 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Abhyudaya</h1>
          <p className="text-sm text-gray-500 font-medium">Student & Faculty Connect Portal</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          
          <div>
            <label htmlFor="regNo" className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
              Registration Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User size={20} className="text-gray-400" />
              </div>
              <input
                id="regNo"
                type="text"
                required
                placeholder="Enter your registration number"
                className="block w-full pl-12 pr-4 py-3.5 bg-[#f8f9fa] border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#3b71ca] focus:bg-white transition-all text-sm text-gray-700 placeholder-gray-400"
                value={regNo}
                onChange={(e) => setRegNo(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock size={20} className="text-gray-400" />
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Enter your password"
                className="block w-full pl-12 pr-12 py-3.5 bg-[#f8f9fa] border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#3b71ca] focus:bg-white transition-all text-sm text-gray-700 placeholder-gray-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#3b71ca] transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-[#3b71ca] to-[#2c56a0] hover:from-[#2c56a0] hover:to-[#1e3a6f] text-white font-bold py-4 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-wider text-sm mt-6"
          >
            Log In
          </button>
        </form>
      </div>

      <div className="absolute bottom-6 left-0 right-0 text-center">
        <p className="text-xs text-gray-600 font-medium">
          Connecting Students & Faculty • Abhyudaya Portal
        </p>
      </div>
    </div>
  );
};

export default LoginPage;