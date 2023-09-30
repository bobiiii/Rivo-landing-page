'use client';

import { useState } from 'react';

const Carousel = () => {
  const cards = [
    {
      title: '1',
      description: 'abc',
    },
    {
      title: '2',
      description: 'abc',
    },
    {
      title: '3',
      description: 'abc',
    },
    {
      title: '4',
      description: 'abc',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="my-60 border border-3 border-blue relative">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 hover:bg-gray-300 z-10"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 hover:bg-gray-300 z-10"
        onClick={nextSlide}
      >
        &gt;
      </button>
      <div className="flex overflow-hidden justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`w-1/3 p-0 m-0 border border-red-700 ${
              index === currentIndex ? 'bg-green-300' : 'bg-white'
            } transition-all duration-300`}
            style={{
              transform: `translateX(100%)`,
            }}
          >
            <div className="p-5">
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <p className="text-gray-500">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
