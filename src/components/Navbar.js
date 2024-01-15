import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/Logo.svg";
import toast from "react-hot-toast";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 transition-all duration-200">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between max-w-[1160px]">
        <Link to="/">
          <h1 className="text-white font-bold text-2xl">
            Gurugyanam Coaching Classes
          </h1>
        </Link>

        <nav className="hidden md:block">
          <ul className="text-richblack-25 flex gap-x-6 ">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/">About</Link>
            </li>

            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-x-4">
          {!isLoggedIn && (
            <Link to="/login">
              <button className="bg-richblack-800 text-white py-[8px] px-[12px] border border-richblack-700 rounded-[8px]">
                Log in
              </button>
            </Link>
          )}

          {!isLoggedIn && (
            <Link to="/signup">
              <button className="bg-richblack-800 text-white py-[8px] px-[12px] border border-richblack-700 rounded-[8px]">
                Sign Up
              </button>
            </Link>
          )}

          {isLoggedIn && (
            <Link to="/">
              <button
                className="bg-richblack-800 text-white py-[8px] px-[12px] border border-richblack-700 rounded-[8px]"
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logged Out");
                }}
              >
                Log Out
              </button>
            </Link>
          )}

          {isLoggedIn && (
            <Link to="/dashboard">
              <button className="bg-richblack-800 text-white py-[8px] px-[12px] border border-richblack-700 rounded-[8px]">
                Dashboard
              </button>
            </Link>
          )}
        </div>
        <button className="mr-4 md:hidden">
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
