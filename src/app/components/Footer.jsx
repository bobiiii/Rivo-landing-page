import Image from 'next/image';
import React from 'react';
import fb from '../../../public/assets/images/Facebook.svg';
import twitter from '../../../public/assets/images/Twitter.svg';
import insta from '../../../public/assets/images/Instagram.svg';

function Footer() {
  return (
    <div className="w-full bg-secondary">
      <div className="w-10/12 flex mx-auto py-10">
        <div className=" w-4/12">
          <div>
            <h1 className="text-[50px] text-white">RIVO</h1>
          </div>
          <div>
            <h3 className="text-white py-4">Social Media</h3>
          </div>
          <div className="flex gap-2">
            <Image
              src={fb}
              width={40}
              height={100}
              alt="facebook"
              className=""
            />
            <Image
              src={twitter}
              width={40}
              height={100}
              alt="twitter"
              className=""
            />
            <Image src={insta} width={40} height={100} alt="instagram" />
          </div>
        </div>

        <div className=" w-2/12">
          <div className="flex flex-col text-[20px] text-primary">
            <h4 className="text-[22px] font-[500] text-white py-4">Shops</h4>
            <h6 className="leading-10">Products</h6>
            <h6 className="leading-10">Overview</h6>
            <h6 className="leading-10">Pricing</h6>
            <h6 className="leading-10">Releases</h6>
          </div>
        </div>
        <div className=" w-2/12">
          <div className="flex flex-col text-[20px] text-primary">
            <h4 className="text-[22px] font-[500] text-white py-4">Company</h4>
            <h6 className="leading-10">About Us</h6>
            <h6 className="leading-10">Contact</h6>
            <h6 className="leading-10">News</h6>
            <h6 className="leading-10">Support</h6>
          </div>
        </div>

        <div className=" w-4/12">
          <h3 className="text-[22px] text-white py-4">STAY UP TO DATE </h3>
          <div>
            <input
              type="text"
              className="bg-transparent rounded-sm outline outline-[3px] outline-primary h-10 w-3/5 "
            />
            <input
              type="submit"
              className="bg-primary outline outline-[3px] rounded-sm outline-primary h-10 w-1/5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
