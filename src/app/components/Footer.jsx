import Image from 'next/image';
import React from 'react';
import fb from '../../../public/assets/images/Facebook.svg';
import twitter from '../../../public/assets/images/Twitter.svg';
import insta from '../../../public/assets/images/Instagram.svg';

function Footer() {
  return (
    <div className="w-full bg-secondary">
      <div className="w-11/12 flex justify-center flex-wrap    mx-auto py-10">
        <div className=" lg:w-4/12 flex flex-col items-center w-full   ">
          <div>
            <h1 className="text-3xl lg:text-[50px] text-white">RIVO</h1>
          </div>
          <div>
            <h3 className="text-white text-xs py-2 lg:py-4">Social Media</h3>
          </div>
          <div className="flex justify-center  gap-1 lg:gap-2">
            <Image
              src={fb}
              width={100}
              height={100}
              alt="facebook"
              className="w-3/12"
            />
            <Image
              src={twitter}
              width={100}
              height={100}
              alt="twitter"
              className="w-3/12"
            />
            <Image
              src={insta}
              width={100}
              height={100}
              alt="instagram"
              className="w-3/12"
            />
          </div>
        </div>

        <div className="py-2 w-5/12 inline-block lg:w-2/12 text-center">
          <div className="flex flex-col text-xs lg:text-[20px] text-primary">
            <h4 className="text-md lg:text-[22px] font-[500] text-white lg:py-4">
              Shops
            </h4>
            <h6 className="leading-5 text-xs lg:leading-10">Products</h6>
            <h6 className="leading-5 text-xs lg:leading-10">Overview</h6>
            <h6 className="leading-5 text-xs lg:leading-10">Pricing</h6>
            <h6 className="leading-5 text-xs lg:leading-10">Releases</h6>
          </div>
        </div>
        <div className="py-2 w-5/12 inline-block lg:w-2/12 text-center ">
          <div className="flex flex-col text-xs lg:text-[20px] text-primary">
            <h4 className="text-md lg:text-[22px] font-[500] text-white  lg:py-4">
              Company
            </h4>
            <h6 className="leading-5 text-xs lg:leading-10">About Us</h6>
            <h6 className="leading-5 text-xs lg:leading-10">Contact</h6>
            <h6 className="leading-5 text-xs lg:leading-10">News</h6>
            <h6 className="leading-5 text-xs lg:leading-10">Support</h6>
          </div>
        </div>

        <div className="  lg:w-4/12  flex flex-col items-center ">
          <h3 className="lg:text-[22px] text-white py-4">STAY UP TO DATE </h3>
          <div className="text-center">
            <input
              type="text"
              className="bg-transparent rounded-sm outline outline-[1px] lg:outline-[3px] outline-primary lg:h-10 w-3/5 "
            />
            <input
              type="submit"
              className="bg-primary outline outline-[1px] lg:outline-[3px] rounded-sm outline-primary lg:h-10 lg:w-1/5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
