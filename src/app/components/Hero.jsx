import React from 'react';
import Image from 'next/image';
import dots from '../../../public/assets/images/dots.svg';
import girlPic from '../../../public/assets/images/girlPic2.svg';

function Hero() {
  return (
    <div className="bg-primary min-h-[70vh] lg:min-h-[90vh] grid place-content-center">
      <div className="   flex justify-center flex-wrap lg:flex-nowrap   gap-5 ">
        <div className="w-full px-5 lg:w-6/12  ">
          <h3 className="text-secondary text-3xl leading-8 lg:leading-[100%] lg:text-[86px] font-[700]  text-center lg:text-left font-rufina">
            Discover and Find Your Own Fashion!
          </h3>
          <p className="font-poppins text-prePrimary py-4 mx-auto lg:mx-0  w-3/4 text-center text-sm lg:text-[24px] font-[500] leading-5 lg:leading-[100%] ">
            Explore our curated collection of stylish clothing and accessories
            tailored to your unique taste.
          </p>
          <button className="bg-secondary text-white py-3 px-10 w-full lg:w-3/4 mx-auto lg:my-5 shadow-xl3 font-poppins">
            Explore Now
          </button>
        </div>
        <div className="w-4/12 border hidden lg:block ">
          <div className="girlImg flex items-center justify-center w-full  ">
            <div className="flex justify-between w-full   h-3/4 ">
              <Image
                src={dots}
                width={100}
                height={100}
                alt="abc"
                className="self-end"
              />

              <Image
                src={dots}
                width={100}
                height={100}
                alt="abc"
                className="self-start"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
