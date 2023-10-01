import Image from 'next/image';
import React from 'react';

function TabProducts({ cardsData }) {
  return (
    <div className="grid    grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4   ">
      {cardsData.map((item, i) => {
        return (
          <div className=" rounded-lg  flex  flex-col" key={i}>
            <div className={`${item.color}   rounded-lg `}>
              <Image
                src={item.img}
                width={100}
                height={100}
                alt="card"
                className="h-[150px] lg:h-[400px] w-full"
              />
            </div>
            <div className="py-3 lg:p-4 flex flex-col  flex-grow">
              <h4 className="flex-1 pb-2 px-0 text-center leading-4 lg:leading-6  lg:text-[22px] font-semibold">
                {item.title}
              </h4>
              <div className="lg:py-2 flex justify-evenly lg:justify-between items-center w-2/3 lg:w-10/12  mx-auto text-xs lg:text-[22px] font-medium self-baseline">
                <h4>${item.price}</h4> |<h4>{item.review}</h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TabProducts;
