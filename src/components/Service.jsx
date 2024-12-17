import React, { useEffect } from "react";
import phil1 from "../assets/phil1.png";
import phil2 from "../assets/phil2.png";
import phil3 from "../assets/phil3.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Service = () => {
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
      <section id="service" className="w-full bg-red-400 py-20 z-10 mt-2">
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-white md:text-6xl text-5xl font-semibold text-center pb-32"
        >
          OUR SERVICE
        </h1>
      </section>
      <section >
        <div className="w-full flex flex-col justify-center items-center bg-hbutton-400 h-fit">
          <div className="md:w-[85%] w-full mx-auto flex md:flex-row flex-col justify-center items-center md:gap-6 gap-20 md:p-20 p-10 mt-[-200px] z-20">
            <div data-aos='slide-up' data-aos-delay='400'
            className="flex flex-col justify-center items-center gap-6">
              <img src={phil1} alt="service image" width={300} height={300} className="" />
              <h2 className="text-4xl text-black font-semibold">Bodybuilding</h2>

              <p className="text-lg text-slate-950 text-center">
                  Lorem ipsum dolor sit amet.
              </p>

              <button className="px-6 py-3 bg-black text-white font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer rounded-full">
                VIEW MORE
              </button>
            </div>

            <div data-aos='slide-up' data-aos-delay='400'
            className="flex flex-col justify-center items-center gap-6">
              <img src={phil2} alt="service image" width={300} height={300} className="" />
              <h2 className="text-4xl text-black font-semibold">Weight Lifting </h2>

              <p className="text-lg text-slate-950 text-center">
                  Lorem ipsum dolor sit amet.
              </p>

              <button className="px-6 py-3 bg-black text-white font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer rounded-full">
                VIEW MORE
              </button>
            </div>

            <div data-aos='slide-up' data-aos-delay='400'
            className="flex flex-col justify-center items-center gap-6">
              <img src={phil3} alt="service image" width={300} height={300} className="" />
              <h2 className="text-4xl text-black font-semibold">Cardio classes</h2>

              <p className="text-lg text-slate-950 text-center">
                  Lorem ipsum dolor sit amet.
              </p>

              <button className="px-6 py-3 bg-black text-white font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer rounded-full">
                VIEW MORE
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
