import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 md:p-10 flex flex-col gap-6">
        <h2 className="text-2xl font-bold  text-gray-600 text-primary mb-2">Create Account</h2>
        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-gray-800"
              placeholder="Enter your email"
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-gray-800"
                placeholder="Create a password"
                autoComplete="new-password"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-500"
                onClick={() => setShowPassword(v => !v)}
                tabIndex={-1}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.657.403-3.22 1.125-4.575M15 12a3 3 0 11-6 0 3 3 0 016 0zm6.875-4.575A9.956 9.956 0 0122 9c0 5.523-4.477 10-10 10a9.956 9.956 0 01-4.575-1.125" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm2.021-2.021A9.956 9.956 0 0122 9c0 5.523-4.477 10-10 10a9.956 9.956 0 01-4.575-1.125M3.98 3.98l16.04 16.04" /></svg>
                )}
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="confirm" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <div className="relative">
              <input
                id="confirm"
                type={showConfirm ? 'text' : 'password'}
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-gray-800"
                placeholder="Confirm your password"
                autoComplete="new-password"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-500"
                onClick={() => setShowConfirm(v => !v)}
                tabIndex={-1}
                aria-label={showConfirm ? 'Hide password' : 'Show password'}
              >
                {showConfirm ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.657.403-3.22 1.125-4.575M15 12a3 3 0 11-6 0 3 3 0 016 0zm6.875-4.575A9.956 9.956 0 0122 9c0 5.523-4.477 10-10 10a9.956 9.956 0 01-4.575-1.125" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm2.021-2.021A9.956 9.956 0 0122 9c0 5.523-4.477 10-10 10a9.956 9.956 0 01-4.575-1.125M3.98 3.98l16.04 16.04" /></svg>
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow transition mt-2"
          >
            Sign Up
          </button>
        </form>
        <div className="flex items-center gap-2 my-2">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-gray-400 text-xs">OR</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <button className="w-full flex items-center justify-center gap-2 border border-gray-200 bg-white hover:bg-blue-50 text-gray-700 font-semibold py-2 rounded-lg shadow-sm transition">
          <svg className="w-5 h-5" viewBox="0 0 48 48"><g><circle fill="#fff" cx="24" cy="24" r="24"/><path fill="#4285F4" d="M35.6 24.2c0-.7-.1-1.4-.2-2H24v4.1h6.6c-.3 1.4-1.3 2.6-2.6 3.4v2.8h4.2c2.5-2.3 3.9-5.7 3.9-9.3z"/><path fill="#34A853" d="M24 36c2.6 0 4.7-.9 6.3-2.4l-4.2-2.8c-1.2.8-2.7 1.3-4.3 1.3-3.3 0-6-2.2-7-5.2h-4.3v3.2C13.7 33.7 18.5 36 24 36z"/><path fill="#FBBC05" d="M17 27c-.3-.8-.5-1.6-.5-2.5s.2-1.7.5-2.5v-3.2h-4.3C11.6 21.1 11 22.5 11 24s.6 2.9 1.7 4.2L17 27z"/><path fill="#EA4335" d="M24 18.8c1.4 0 2.7.5 3.7 1.5l2.8-2.8C28.7 15.9 26.6 15 24 15c-5.5 0-10.3 2.3-13.3 6.3l4.3 3.2c1-3 3.7-5.2 7-5.2z"/></g></svg>
          Sign up with Google
        </button>
        <div className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{' '}
          <button className="text-blue-500 hover:underline font-semibold" type="button">
          <Link to="/login">
          
            Login
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register