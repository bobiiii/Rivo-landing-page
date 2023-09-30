import Image from 'next/image';
import React from 'react';

function TabProducts({ cardsData }) {
  return (
    <div className="grid  border border-blue-500  grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4   ">
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
              <h4 className="flex-1 pb-2 px-0 text-center leading-4  lg:text-[22px] font-semibold">
                {item.title}
              </h4>
              <div className="flex justify-evenly w-2/3 mx-auto text-xs lg:text-[22px] font-medium self-baseline">
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
