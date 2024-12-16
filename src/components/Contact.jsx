import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { Link } from "react-scroll";
const Contact = () => {
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
      <section id="contact" className="w-full bg-red-400 py-20 z-10 mt-1">
        <h2
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-white md:text-6xl text-5xl font-semibold text-center pb-10"
        >
          GET IN TOUCH
        </h2>

         

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.158806589792!2d88.35977737435323!3d22.573163032951474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277ad2e96002f%3A0xa6cbe7a6982b644e!2sCollege%20St%2C%20College%20Square%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1734357214334!5m2!1sen!2sin"
            width={1350}
            height="350"
            style={{border:"0"}}
            allowfullscreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        
        
          
    
          
    
      </section>

      <section>
        

        <div className="w-full flex flex-col justify-center items-center gap-2 bg-blue-600 h-fit pb-20">
          <div className="md:w-[85%] w-full mx-auto grid md:grid-cols-3 grid-cols-1 justify-center items-center md:gap-20 gap-10 md:p-20 p-10 mt-[-200px] z-20">
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="p-10 bg-slate-200 flex flex-col justify-center items-center gap-4 "
            >
              <div className="border-2 border-slate-400 rounded-full p-4 transform hover:scale-105 tranistion-transform duration-300 cursor-pointer">
                <FaMapMarkedAlt className="size-10 text-slate-400 " />
              </div>
              <h2 className="text-2xl text-slate-500">Address</h2>
              <p className="text-center text-lg">college street , kolkata</p>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="p-10  bg-slate-200 flex flex-col justify-center items-center gap-4 "
            >
              <div className="border-2 border-slate-400 rounded-full p-4 transform hover:scale-105 tranistion-transform duration-300 cursor-pointer">
                <IoMdMail className="size-10 text-slate-400 " />
              </div>
              <h2 className="text-2xl text-slate-500">Mail</h2>
              <p className="text-center text-lg">AKD@gmail.com</p>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="p-10 bg-slate-200 flex flex-col justify-center items-center gap-4 "
            >
              <div className="border-2 border-slate-400 rounded-full p-4 transform hover:scale-105 tranistion-transform duration-300 cursor-pointer">
                <FaMapMarkedAlt className="size-10 text-slate-400 " />
              </div>
              <h2 className="text-2xl text-slate-500">Call Us</h2>
              <p className="text-center text-lg">(+91) 3216549871</p>
            </div>
          </div>

          <button className="px-6 py-3  bg-red-400  text-white font-semibold rounded-full ">
            VIEW MORE
          </button>
        </div>
      </section>
    </>
  );
};

export default Contact;
