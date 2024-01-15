import React from "react";
import img1 from "../assets/images/banner/1.jpg";
import img2 from "../assets/images/banner/2.jpg";
import img3 from "../assets/images/banner/3.jpg";
import img4 from "../assets/images/banner/4.jpg";
import img5 from "../assets/images/banner/5.jpg";
import img6 from "../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[300px] md:h-[600px] rounded-[10px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        <div className="absolute flex justify-center md:justify-start items-center w-full h-full  left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="space-y-5 lg:space-y-7 text-white w-full lg:w-1/2 lg:pl-[100px] px-5 lg:px-0">
            <h1 className="text-2xl lg:text-6xl font-bold">Affordable Price For Car Servicing</h1>
            <p className="text-sm md:text-base">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
              <button className="button mr-5">Discover more</button>
              <button className="btn-hover">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide6" className="btn btn-circle mr-5 hover:bg-[#FF3811]">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811]">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute flex justify-center md:justify-start items-center w-full h-full  left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="space-y-5 lg:space-y-7 text-white w-full lg:w-1/2 lg:pl-[100px] px-5 lg:px-0">
            <h1 className="text-2xl lg:text-6xl font-bold">Affordable Price For Car Servicing</h1>
            <p className="text-sm md:text-base">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
              <button className="button mr-5">Discover more</button>
              <button className="btn-hover">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5 hover:bg-[#FF3811]">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811]">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute flex justify-center md:justify-start items-center w-full h-full  left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="space-y-5 lg:space-y-7 text-white w-full lg:w-1/2 lg:pl-[100px] px-5 lg:px-0">
            <h1 className="text-2xl lg:text-6xl font-bold">Affordable Price For Car Servicing</h1>
            <p className="text-sm md:text-base">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
              <button className="button mr-5">Discover more</button>
              <button className="btn-hover">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5 hover:bg-[#FF3811]">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811]">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute flex justify-center md:justify-start items-center w-full h-full  left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="space-y-5 lg:space-y-7 text-white w-full lg:w-1/2 lg:pl-[100px] px-5 lg:px-0">
            <h1 className="text-2xl lg:text-6xl font-bold">Affordable Price For Car Servicing</h1>
            <p className="text-sm md:text-base">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
              <button className="button mr-5">Discover more</button>
              <button className="btn-hover">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5 hover:bg-[#FF3811]">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle hover:bg-[#FF3811]">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full" />
        <div className="absolute flex justify-center md:justify-start items-center w-full h-full  left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="space-y-5 lg:space-y-7 text-white w-full lg:w-1/2 lg:pl-[100px] px-5 lg:px-0">
            <h1 className="text-2xl lg:text-6xl font-bold">Affordable Price For Car Servicing</h1>
            <p className="text-sm md:text-base">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
              <button className="button mr-5">Discover more</button>
              <button className="btn-hover">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5 hover:bg-[#FF3811]">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle hover:bg-[#FF3811]">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full" />
        <div className="absolute flex justify-center md:justify-start items-center w-full h-full  left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="space-y-5 lg:space-y-7 text-white w-full lg:w-1/2 lg:pl-[100px] px-5 lg:px-0">
            <h1 className="text-2xl lg:text-6xl font-bold">Affordable Price For Car Servicing</h1>
            <p className="text-sm md:text-base">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
              <button className="button mr-5">Discover more</button>
              <button className="btn-hover">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide5" className="btn btn-circle mr-5 hover:bg-[#FF3811]">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811]">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
