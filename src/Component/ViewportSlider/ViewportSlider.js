import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import slide1 from "../../images/viewslide1.jpg";
import slide2 from "../../images/viewslide2.jpg";

import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import "./ViewportSlider.css";

function ViewportSlider() {
  const items = [
    {
      id: 1,
      img: slide1,
    },
    {
      id: 2,
      img: slide2,
    },
  ];

  const corouselItems = items.map((item) => (
    <div>
      <div className="absolute flex flex-col gap-5  justify-center left-20 top-[20%] bg-white max-w-[32rem] p-4">
        <p className="text-black text-4xl font-bold leading-5">
          Unlock the power of your <br /> people
        </p>
        <p>
          Udemy Business is trusted by 12.5K+ companies <br /> around the world.
        </p>
      </div>
      <img src={item.img} className="w-full" alt="" />
    </div>
  ));

  return (
    <div className="w-11/12 mx-auto justify-center relative pb-20">
      <AliceCarousel
        mouseTracking
        disableDotsControls
        renderPrevButton={() => (
          <div className="bg-black w-[50px] h-[50px] absolute -left-5 top-[30%] flex justify-center items-center rounded-[50%] cursor-pointer">
            <span className=" text-white font- text-2xl">
              <MdOutlineArrowBackIos />
            </span>
          </div>
        )}
        renderNextButton={() => (
          <div className="bg-black w-[50px] h-[50px] absolute -right-5 top-[30%] flex justify-center items-center rounded-[50%] cursor-pointer">
            <span className=" text-white font- text-2xl">
              <MdArrowForwardIos />
            </span>
          </div>
        )}
        items={corouselItems}
      />
    </div>
  );
}

export default ViewportSlider;
