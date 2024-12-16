import React, { useEffect } from "react";
import about from "../assets/about.jpg";
import { FaCheck } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";
import banner from "../assets/banner.jpg";
import ReactPlayer from "react-player";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init(
      {
        offset: 200,
        duration: 500,
        easing: "ease-in-sine",
      },
      []
    );
  });
  return (
    <>
      <section
        id="about"
        className="w-[75%] mx-auto md:py-20 py-10 flex md:flex-row flex-col justify-between items-start gap-20"
      >
        <div className="md:w-[50%] w-full flex flex-col justify-center items-start gap-6">
          <h1
            data-aos="zoom-in"
            data-aos-delay=""
            className="text-red-400 md:text-7xl text-6xl font-semibold"
          >
            JOIN NOW
          </h1>

          <p
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-lg text-slate-600 text-justify"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <button
            data-aos="zoom-in"
            data-aos-delay="600"
            className="px-8 py-4 bg-blue-600 hover:bg-red-400 text-white font-semibold cursor-pointer rounded-full"
          >
            BOOK NOW{" "}
          </button>

          <div
            data-aos="zoom-in"
            data-aos-delay="800"
            id="list-infos"
            className="flex md:flex-row flex-col justify-center md:items-center items-start gap-6 md:pr-10"
          >
            <div>
              <ul className="flex flex-col justify-center items-start gap-2">
                <li className="flex justify-center items-center gap-2">
                  <span>
                    <FaCheck />
                  </span>
                  <span className="text-slate-600">
                    Access to the locker rooms
                  </span>
                </li>

                <li className="flex justify-center items-center gap-2">
                  <span>
                    <FaCheck />
                  </span>
                  <span className="text-slate-600">
                    Access to the locker rooms
                  </span>
                </li>

                <li className="flex justify-center items-center gap-2">
                  <span>
                    <FaCheck />
                  </span>
                  <span className="text-slate-600">
                    Access to the locker rooms
                  </span>
                </li>

                <li className="flex justify-center items-center gap-2">
                  <span>
                    <FaCheck />
                  </span>
                  <span className="text-slate-600">
                    Access to the locker rooms
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="md:w-[90%] w-full h-fit relative">
          <ReactPlayer 
            controls
            data-aos="zoom-in"
            data-aos-delay="200"
            width={400}
            height={400}
            url='https://www.youtube.com/watch?v=jNv7LM_VoJI'
          />
          <div
            data-aos="slide-up"
            data-aos-delay="400"
            className="bg-red-400 md:w-[90%] w-full text-white flex flex-col justify-center items-start gap-4 md:p-8 p-6 absolute md:-left[-100px] md:right-[-100px] md:bottom-[-180px] mt-8 z-10 mb-5"
          >
            <FaQuoteLeft className="md:size-14 size-10" />

            <p className="md:text-2xl text-xl ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
              voluptatum!
            </p>
          </div>
        </div>
      </section>

      <section 
        data-aos="zoom-in"
        data-aos-delay="200"
        id='banner'
         className="w-full md:h-[600px] h-[300px] flex justify-end items-end p-10 md:mt-24 bg-cover bg-center mt-[400px]" style={{
          backgroundImage:`url(${banner})`
         }}>

          <h2 data-aos="slide-up"
            data-aos-delay="400" className="md:text-[150px] text-[50px] text-white font-bold opacity-30
            ">
            Move!
          </h2>

      </section>
    </>
  );
};

export default About;
