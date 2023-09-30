'use client';

import React from 'react';
import Carousel from './Carousel';
import Slider from 'react-slick';

function FeedbackCorner() {
  const settings = {
    className: 'center w-[200px]',
    centerMode: true,
    // infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    speed: 500,
  };
  return (
    <div className="w-10/12 mx-auto border border-green-600">
      <div className="text-center">
        <h3 className="text-[50px] font-[500] text-secondary">
          Feedback Corner
        </h3>
      </div>
      <Carousel />
    </div>
  );
}

export default FeedbackCorner;
