import Image from 'next/image';
import React from 'react';

function ExclusiveOffer() {
  return (
    <div className="w-10/12 mx-auto my-10">
      <div className="bg-primary flex justify-center items-center gap-10">
        <div className="hidden lg:block w-1/2 ">
          <Image
            src={
              'https://s3-alpha-sig.figma.com/img/d34b/7f54/e58a0cde770131dda958359103394f74?Expires=1696809600&Signature=D2B15cMUdU79uWd6MD3MHfVyVIWYANpplmJ67Hy~DQvfZGwaf1qSzzQinddTUJNuC1tOYizBBOGbwH-pTGBCjbHSeXQniPKHjkHDpjfKbFr693bsT2tp9bKDzoAJiKmQhOyTkSJzcU1BQ16r7JlxwAj5-tZNtBA1gxGZ3vWZfdv6dr64JBkS8krPO4nwNVKwiaVSGqDCuejZOANbW0qbjYaGKGuibNfMYYEWqq9BTzL1zfSqIOvncSr2-BktW9YS9RxPRXXtg3Hx~jv5A-GiyElHal0eO~JQ8PvjyvufFgpHu5oj9S1pGigaWdjezYQ2wGxg0WSQVPn~SfhO7X3D5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
            }
            width={100}
            height={100}
            alt="exclusive offer"
            className="w-full "
          />
        </div>
        <div className="lg:w-1/2">
          <div>
            <h3 className="lg:text-[46px] font-[700] text-secondary">
              Exclusive offer
            </h3>
            <p className="text-[22px] font-[500] text-secondary">
              Unlock the ultimate style upgrade with our exclusive offer Enjoy
              savings of up to 40% off on our latest New Arrivals
            </p>
          </div>
          <div className="flex gap-4 w-2/4 py-5 ">
            <div className="flex-1 rounded-md flex justify-center flex-col items-center bg-white text-secondary font-[600] text-[32px] ">
              <h4>06</h4>
              <span className="text-[16px] font-[500]">days</span>
            </div>

            <div className="flex-1 rounded-md flex justify-center flex-col items-center bg-white text-secondary font-[600] text-[32px] ">
              <h4>12</h4>
              <span className="text-[16px] font-[500]">hours</span>
            </div>

            <div className="flex-1 rounded-md flex justify-center flex-col items-center bg-white text-secondary font-[600] text-[32px] ">
              <h4>48</h4>
              <span className="text-[16px] font-[500]">minutes</span>
            </div>
          </div>
          <div>
            <button className="rounded-md bg-secondary text-white text-[20px] font-[500] px-6 py-3">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExclusiveOffer;
