import React, { useState } from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import student1 from "../../images/studentview1.jpg";
import student2 from "../../images/studentview2.jpg";
import student3 from "../../images/studentview3.jpg";
import student4 from "../../images/studentview4.jpg";
import student5 from "../../images/studentview5.jpg";
import student6 from "../../images/studentview6.jpg";

import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

function ViewingStudents() {
  const [showPrevArrow, setShowPrevArrow] = useState(false);
  const [showNextArrow, setShowNextArrow] = useState(true);

  const responsive = {
    0: {
      items: 1,
    },
    1024: {
      items: 5,
      itemsFit: "contain",
    },
  };

  const items = [
    {
      id: 1,
      img: student1,
      title: "Learn Python: The Complete Python Programming Course",
      tutor: "Jose portilla",
      price: [{ now: "$16.99", prev: "$84.99" }],
      bestseller: "Best Seller",
    },
    {
      id: 2,
      img: student2,
      title: "Python for Beginners - Learn Programming from scratch",
      tutor: "John Doe",
      price: [{ now: "$12.99", prev: "$74.99" }],
    },
    {
      id: 3,
      img: student3,
      title: "Teach Your Kids to Code: Learn to Program Python at Any Age!",
      tutor: "Ken Williams",
      price: [{ now: "$10.99", prev: "$64.99" }],
      bestseller: "Best Seller",
    },
    {
      id: 4,
      img: student4,
      title: "Teach Your Kids to Code: Learn to Program Python at Any Age!",
      tutor: "John Doe",
      price: [{ now: "$18.99", prev: "$54.99" }],
    },
    {
      id: 5,
      img: student5,
      title: "Python 3 For Offensive PenTest: A Complete Practical Course",
      tutor: "Ken Williams",
      price: [{ now: "$17.99", prev: "$44.99" }],
      bestseller: "Best Seller",
    },
    {
      id: 6,
      img: student6,
      title: "Taming Big Data with Apache Spark and Python - Hands On!",
      tutor: "Jose portilla",
      price: [{ now: "$12.99", prev: "$94.99" }],
    },
    {
      id: 7,
      img: student4,
      title: "Teach Your Kids to Code: Learn to Program Python at Any Age!",
      tutor: "John Doe",
      price: [{ now: "$18.99", prev: "$54.99" }],
    },
    {
      id: 8,
      img: student3,
      title: "Python 3 For Offensive PenTest: A Complete Practical Course",
      tutor: "Ken Williams",
      price: [{ now: "$17.99", prev: "$44.99" }],
      bestseller: "Best Seller",
    },
    {
      id: 9,
      img: student2,
      title: "Taming Big Data with Apache Spark and Python - Hands On!",
      tutor: "Jose portilla",
      price: [{ now: "$12.99", prev: "$94.99" }],
    },
  ];

  const corouselItems = items.map((item) => (
    <div className="flex flex-col items-left gap-2">
      <img src={item.img} className="w-[95%]" alt="" />
      <p className="w-[97%] font-bold text-lg">{item.title}</p>
      <p>{item.tutor}</p>
      {item.price.map((p) => (
        <p>
          <span>{p.now}</span>{" "}
          <span>
            <s>{p.prev}</s>
          </span>
        </p>
      ))}
      <button className=" bg-yellow-300 w-[90px]">{item.bestseller}</button>
    </div>
  ));
  return (
    <div className="w-11/12 mx-auto">
      <h2 className=" text-[2.5rem] font-bold pb-4">Students are viewing</h2>

      <div className="relative pb-10">
        <AliceCarousel
          mouseTracking
          disableDotsControls
          responsive={responsive}
          controlsStrategy="alternate"
          onSlideChange={(e) => {
            e.isPrevSlideDisabled
              ? setShowPrevArrow(true)
              : setShowPrevArrow(false);
            e.isNextSlideDisabled
              ? setShowNextArrow(false)
              : setShowNextArrow(true);
          }}
          renderPrevButton={() =>
            showPrevArrow ? (
              <div className="bg-black w-[50px] h-[50px] absolute -left-5 top-[15%] flex justify-center items-center rounded-[50%]">
                <span className=" text-white font- text-2xl">
                  <MdOutlineArrowBackIos />
                </span>
              </div>
            ) : null
          }
          renderNextButton={() =>
            showNextArrow ? (
              <div className="bg-black w-[50px] h-[50px] absolute -right-5 top-[15%] flex justify-center items-center rounded-[50%]">
                <span className=" text-white font- text-2xl">
                  <MdArrowForwardIos />
                </span>
              </div>
            ) : null
          }
          items={corouselItems}
        />
      </div>
    </div>
  );
}

export default ViewingStudents;
