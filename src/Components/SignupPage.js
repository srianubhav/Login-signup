// src/Components/SignupPage.js
import React from 'react';

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Username</label>
            <input 
              type="text" 
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400" 
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Email</label>
            <input 
              type="email" 
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400" 
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Password</label>
            <input 
              type="password" 
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400" 
              placeholder="Create a password"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">Confirm Password</label>
            <input 
              type="password" 
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400" 
              placeholder="Confirm your password"
            />
          </div>
          <button 
            type="submit" 
            className="bg-blue-500 text-white py-3 px-4 rounded-lg w-full transition duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sign Up
          </button>
          <p className="text-center mt-4 text-gray-600">
            Already have an account? 
            <a href="/" className="text-blue-500 hover:underline"> Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
