import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import search from "../assets/icons/search.png";
import shoping from "../assets/icons/shoping.png";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="" className="text-lg font-semibold font-sans">
                Home
              </Link>
            </li>
            <li>
              <Link to="" className="text-lg font-semibold font-sans">
                About
              </Link>
            </li>
            <li>
              <Link to="" className="text-lg font-semibold font-sans">
                Blog
              </Link>
            </li>
            <li>
              <Link to="" className="text-lg font-semibold font-sans">
                Service
              </Link>
            </li>
            <li>
              <Link to="" className="text-lg font-semibold font-sans">
                Conatct
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[80px] h-[27px] flex justify-end md:justify-center items-center">
          <Link to="/">
            <img className="w-full h-full" src={logo} alt="" />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="" className="text-lg font-semibold font-sans">
              Home
            </Link>
          </li>
          <li>
            <Link to="" className="text-lg font-semibold font-sans">
              About
            </Link>
          </li>
          <li>
            <Link to="" className="text-lg font-semibold font-sans">
              Blog
            </Link>
          </li>
          <li>
            <Link to="" className="text-lg font-semibold font-sans">
              Service
            </Link>
          </li>
          <li>
            <Link to="" className="text-lg font-semibold font-sans">
              Conatct
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <Link className="hidden md:block" to="">
          {" "}
          <img src={shoping} alt="" />
        </Link>
        <Link className="hidden md:block" to="">
          {" "}
          <img src={search} alt="" />
        </Link>
        <Link to="" className="btn-hover hidden md:block">
          Appoinment
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
