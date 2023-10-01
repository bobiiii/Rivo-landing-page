import Image from 'next/image';
import React from 'react';
import arrow from '../../../public/assets/images/arrowRight.svg';

function BestSelling() {
  const cardsdata = [
    {
      img: 'https://s3-alpha-sig.figma.com/img/c912/77cf/00d88a9d6f761d88c50e17e53587883c?Expires=1696809600&Signature=EQYOkaAtAreXbdIuJkRXUs3SfIV8WrIpaqwvsrrwbGOedQiAXfUQNHDk-J-9AHLgbsY27qstcEvpkJCBTxXEAn5UATLk3Olyq-U~DeUUTO-rlBM0R7kc4zn5U8OmccM0iFXhwo8dj1VuOwDFrrwv3QHXZ7ewid2EE0~mpl25mtFrcBBqaLzo3hXmvRWbvx7yt23-buatlIJKwSQb11R5fn5pwcw1g0MaS1rQvT5fvi3RCFDYeiRGMZVBUjWGBQm7zkpHUKj-j7VYqn869vKH9-~jZ~x1m9ZBNMtiMKjaXBnqp5vx5euPrd3DAbDr22Tkdrj374HLQrNn4b~iAFgsVA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#93B9A2]',
      title: 'Regular Fit Long Sleeve Top',
      price: 40.35,
      review: 5.0,
    },

    {
      img: 'https://s3-alpha-sig.figma.com/img/6488/026e/575045ad2e6591ef838d4bcfad3ef934?Expires=1696809600&Signature=d53lyXnV~yajI2yI0CX95oWUTfMwLTEDQPPGREtHk9ieOVMvcvUjjz57oYAGD9G2db0kuwCH9OQVbdzJOzQg8cQEjzO~Js2OfSvlVaMvrL~YxXP0Phgu0KLnRC05crfLM0SLkByJCYEAMnLHhkmhfveq5aBAW859iwN-h-m~dEwPalD3gfAoVyga3qu9-MtViMRRvRq6~UWTQ8LMj68ZQpeO9IN2dgCxT1qlBzsgVyr64lt7Y3lxN6fcmlh9d8cy44o5SrrBxqadqTXWjcHX13gOaB6oV1Cu-RcW6gcPteD7QFLWf7ImqCMOOfVL7nJZpVbpx9kR8CpHCZnB5hycsQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#A9D4BA]',
      title: 'Black Crop Tailored Jacket',
      price: 62.99,
      review: 4.8,
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/4bfd/ab1f/ac6016fba11536ac8604de0aea1b7395?Expires=1696809600&Signature=TTYZVI9oIokKfed4i0ASoIkCo3JexaJ6ANFe06RMtvzt41fo3ABdhVXkt2bZ5PEBM9OAoeB~M1cW~RRQV1gXZuFzqPw~VW~XnNfVdFrZB3TMVOmyxnMQq-LU3ZLQT7iBTJ6gpbjaKrDiG70HllD6r4-zloP1XWvb3cwoTgpJTi9zvvg7Hoejm6GcUd125CuHzaRraiPGaoqrEA0YSpJkUAdHXlG2rTuWzB3qvpAkQ42exYmbcMFb6Rsrh0ksGPTxf2a3RsGZwArHKq0ps-E~DEZkxXpKuLC0LD0~xS8nCvOYkI-mew6I4359pxPCNK5aS6ZHPXnaQuTdWgP3dbPXaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#CADCD0]',
      title: 'Textured Sunset Shirt',
      price: 49.99,
      review: 4.9,
    },
  ];

  return (
    <div className="w-10/12 mx-auto my-10 lg:my-16">
      <div className="text-center">
        <h3 className="text-secondary text-3xl lg:text-[64px] font-[500]">
          Best Selling
        </h3>
        <p className="text-prePrimary  lg:py-8 text-sm lg:text-[22px]">
          Get in on the trend with our curated selection of best-selling styles.
        </p>
      </div>
      <div className="w-10/12  flex flex-wrap lg:flex-nowrap mx-auto lg:gap-5 my-5 ">
        {cardsdata.map((item, i) => {
          return (
            <div className="w-full lg:w-1/3  rounded-lg" key={i}>
              <div className={`${item.color} rounded-lg `}>
                <Image
                  src={item.img}
                  width={100}
                  height={100}
                  alt="card"
                  className="h-[300px] lg:h-[400px] w-full"
                />
              </div>
              <div className="p-4">
                <h4 className="text-center lg:text-[22px] font-semibold">
                  {item.title}
                </h4>
                <div className="flex justify-evenly w-2/3 mx-auto lg:text-[22px] font-medium">
                  <h4>${item.price}</h4> |<h4>{item.review}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <button className="border rounded-lg border-secondary py-2 px-6 lg:text-[22px] font-[500] inline-flex items-center">
          See All
          <span className=" ml-2">
            <Image src={arrow} width={30} height={50} alt="arrow" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default BestSelling;
