import React from "react";
import HeroPng from "../../assets/hero.png";
import { BiPlayCircle } from "react-icons/bi";

const Hero = ({ togglePlay }) => {
  return (
    <div>
      <div className="py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden">
        <div className="container min-h-[700px] flex relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">
            {/* hero text-section */}
            <div className="order-2space-y-5 lg:pr-20">
              <h1 data-aos="fade-up" data className="text-4xl font-semibold">
                GET READY TO ENJOY VR{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  GAMES WITH OUR PLATFORM
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="300" className="py-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                molestias quia exercitationem ex inventore labore beatae cumque
                et quaerat voluptas?
              </p>
              <div className="flex gap-6 py-6">
                <button
                  className="primary-btn"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Get Started
                </button>
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="flex items-center gap-2"
                  onClick={togglePlay}
                >
                  <BiPlayCircle className="text-3xl" />
                  See demo
                </button>
              </div>
            </div>
            {/* Image section */}
            <div>
              <img data-aos="fade-up" data-aos-offset="0" src={HeroPng} alt="" className="order-1 sm:order-2" />
            </div>
          </div>

          {/* Animated Blob */}
          <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
