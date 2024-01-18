import React from 'react';
import login from "../assets/images/login/login.svg";
import { Link } from 'react-router-dom';

const SignUp = () => {
  const handleSignUp= event =>{
    event.preventDefault();
  }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="">
          <img src={login} alt="" />
        </div>
        <div className="card shrink-0 w-full h-[80%] max-w-sm shadow-2xl ">
          <form onSubmit={handleSignUp} className="card-body h-full">
            <h1 className="text-center text-2xl lg:text-[40px] font-semibold mb-0 lg:mb-[50px]">
              Sign Up
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                name='name'
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name='email'
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name='password'
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="button" type="submit">
                Sign Up
              </button>
            </div>

            <div className="text-center mt-4 space-y-4">
              <p>Or sign up with</p>
              <div className="flex justify-center items-center space-x-4">
                <div className="relative w-[55px] h-[55px] bg-[#F5F5F8] rounded-full cursor-pointer">
                  <img
                    className="absolute bottom-[12px] left-[12px]"
                    src="https://i.ibb.co/WzfB5ZZ/bx-bxl-facebook.png"
                    alt=""
                  />
                </div>
                <div className="relative w-[55px] h-[55px] bg-[#F5F5F8] rounded-full cursor-pointer">
                  <img
                    className="absolute bottom-[15.5px] left-[15.5px]"
                    src="https://i.ibb.co/NYJW3Wr/bx-bxl-linkedin.png"
                    alt=""
                  />
                </div>
                <div className="relative w-[55px] h-[55px] bg-[#F5F5F8] rounded-full cursor-pointer">
                  <img
                    className="absolute bottom-[17.5px] left-[17.5px]"
                    src="https://i.ibb.co/Vw3KdnM/google-1.png"
                    alt=""
                  />
                </div>
              </div>
                <p className="text-[#737373]">Already have an account? <span className="text-[#FF3811] font-bold"><Link  to='/login'>Sign In</Link></span></p>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;