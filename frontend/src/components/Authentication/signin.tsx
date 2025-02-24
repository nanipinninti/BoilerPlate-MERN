import React, { useState, useMemo } from "react";

// Components
import { AuthButton } from "./auth.button";

// Context
import { useTheme } from "../../contexts/Theme/ThemeContext";

// Assets
import Logo from "../../assets/react.svg";

// Icons
import { CiUser } from "react-icons/ci";
import { IoEye } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

interface LoginComponentProps {
  toggleMode: () => void;
}
export const LoginComponent:React.FC<LoginComponentProps> = ({toggleMode}) => {
  const { theme } = useTheme();
  const [userID, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const passwordInput = useMemo(() => {
    return (
      <div className="flex flex-col gap-2">
        <label
          className={`text-sm font-semibold ${
            theme === "light" ? "text-[#101828]" : "text-gray-200"
          }`}
        >
          Password
        </label>
        <div className="relative">
          {/* Input */}
          <input
            type={showPassword ? "text" : "password"}
            className={`w-full rounded focus:outline-[#4F39F6] p-2 pl-3 pr-10 ${
              theme === "light"
                ? "border border-[#D1D5DC] bg-white text-[#101828]"
                : "border border-gray-700 bg-gray-800 text-gray-200"
            }`}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Icon */}
          <div
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <IoEye className="text-gray-500" />
            ) : (
              <IoEyeOffOutline className="text-gray-500" />
            )}
          </div>
        </div>
      </div>
    );
  }, [showPassword, password, theme]);

  return (
    <div
      className={`flex flex-col gap-6 h-full w-full px-4 py-8 sm:px-8 rounded-lg ${
        theme === "light"
          ? "shadow-lg bg-white"
          : "bg-gray-900 border border-gray-800"
      }`}
    >
      {/* Header Section */}
      <div className="flex flex-col items-center w-full gap-2">
        {/* Logo */}
        <div className="w-13 h-13">
          <img src={Logo} alt="Logo" className="h-full w-full object-contain" />
        </div>

        <h1
          className={`!text-[18px] font-semibold ${
            theme === "light" ? "text-[#101828]" : "text-gray-200"
          }`}
        >
          Sign in to your account
        </h1>
      </div>

      {/* Input section */}
      <div className="mt-4 flex flex-col gap-4">
        {/* Email Input */}
        <div className="flex flex-col gap-2">
          <label
            className={`text-sm font-semibold ${
              theme === "light" ? "text-[#101828]" : "text-gray-200"
            }`}
          >
            Email
          </label>
          <div className="relative">
            {/* Input */}
            <input
              type="text"
              className={`w-full rounded focus:outline-[#4F39F6] p-2 pl-3 pr-10 ${
                theme === "light"
                  ? "border border-[#D1D5DC] bg-white text-[#101828]"
                  : "border border-gray-700 bg-gray-800 text-gray-200"
              }`}
              placeholder="Email"
              value={userID}
              onChange={(e) => setUserId(e.target.value)}
            />

            {/* Icon */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <CiUser className="text-gray-500" />
            </div>
          </div>
        </div>

        {/* Password Input */}
        {passwordInput}
      </div>

      {/* Remember Me and Forgot Password */}
      <div className="flex items-center text-[13px]">
        {/* Remember Me */}
        <div className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="remember-me"
            className="mr-2"
            style={{ accentColor: theme === "light" ? "#4F39F6" : "#6D28D9" }}
          />
          <label
            htmlFor="remember-me"
            className={theme === "light" ? "text-[#101828]" : "text-gray-200"}
          >
            Remember me
          </label>
        </div>

        {/* Forgot Password */}
        <div className="ml-auto">
          <a
            href="#"
            className={theme === "light" ? "text-[#4F39F6]" : "text-[#6D28D9]"}
          >
            Forgot password?
          </a>
        </div>
      </div>

      {/* Auth Button */}
      <AuthButton mode="signin" />

      {/* Separator */}
      <div className="flex items-center gap-4 w-full justify-between">
        <div
          className={`h-[1px] w-full ${
            theme === "light" ? "bg-[#D1D5DC]" : "bg-gray-700"
          }`}
        ></div>
        <p
          className={`text-[13px] font-semibold ${
            theme === "light" ? "text-[#101828]" : "text-gray-200"
          }`}
        >
          OR
        </p>
        <div
          className={`h-[1px] w-full ${
            theme === "light" ? "bg-[#D1D5DC]" : "bg-gray-700"
          }`}
        ></div>
      </div>

      {/* Google Authentication */}
      <div
        className={`w-full border rounded p-2 flex items-center justify-center cursor-pointer ${
          theme === "light"
            ? "border-[#D1D5DC] hover:bg-gray-50"
            : "border-gray-700 hover:bg-gray-800"
        }`}
      >
        <div className="flex items-center gap-4">
          <div className="text-[18px]">
            <FcGoogle />
          </div>
          <p
            className={`text-sm ${
              theme === "light" ? "text-[#101828]" : "text-gray-200"
            }`}
          >
            Continue with Google
          </p>
        </div>
      </div>

      {/* Signup Link */}
      <p
        className={`text-xs flex justify-center text-[13px] ${
          theme === "light" ? "text-[#101828]" : "text-gray-200"
        }`}
      >
        Not a member?
        <span
          onClick={()=>toggleMode()}
          className={`ml-1 cursor-pointer ${
            theme === "light" ? "text-[#4F39F6]" : "text-[#6D28D9]"
          }`}
        >
          Signup
        </span>
      </p>
    </div>
  );
};