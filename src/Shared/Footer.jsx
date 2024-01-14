import React from "react";
import logo from "../assets/logo.svg"
import goggle from "../assets/icons/goggle.png"
import twiter from "../assets/icons/twiter.png"
import instagram from "../assets/icons/instagram.png"
import linkdin from "../assets/icons/linkdin.png"

const Footer = () => {
  return (
    <footer className="flex justify-between items-start flex-wrap p-10 bg-black text-white">
      <aside className="pr-5 md:pr-0">
        <img src={logo} alt="" />
        <p className="footer-paragraph mt-[20px]">
        Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .
        </p>
        <div className="flex justify-between items-center w-1/2 cursor-pointer">
          <img src={goggle} alt="" />
          <img src={twiter} alt="" />
          <img src={instagram} alt="" />
          <img src={linkdin} alt="" />
        </div>
      </aside>
      <nav className="flex flex-col mt-5 md:mt-0 pr-5 md:pr-0">
        <header className="text-[16px] md:text-[20px] font-semibold">About</header>
        <a className="link link-hover footer-paragraph mt-[40px]">Home</a>
        <a className="link link-hover footer-paragraph">Service</a>
        <a className="link link-hover footer-paragraph">Contact</a>

      </nav>
      <nav className="flex flex-col mt-5 md:mt-0 pr-5 md:pr-0">
        <header className="text-[16px] md:text-[20px]  font-semibold">Company</header>
        <a className="link link-hover footer-paragraph mt-[40px]">Why Car dontor</a>
        <a className="link link-hover footer-paragraph">About us</a>
       
      </nav>
      <nav className="flex flex-col mt-5 md:mt-0 pr-5 md:pr-0">
        <header className="text-[16px] md:text-[20px]  font-semibold">Support</header>
        <a className="link link-hover footer-paragraph mt-[40px]">Support Center</a>
        <a className="link link-hover footer-paragraph">Feedback</a>
        <a className="link link-hover footer-paragraph">Accesbility</a>
      </nav>
    </footer>
  );
};

export default Footer;
