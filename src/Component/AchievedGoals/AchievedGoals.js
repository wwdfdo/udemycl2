import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import quote from "../../images/quote.svg";
function AchievedGoals() {
  const responsive = {
    0: {
      items: 1,
    },
    1024: {
      items: 3,
      itemsFit: "contain",
    },
  };

  const items = [
    {
      id: 1,

      title: (
        <p>
          I am proud to say that after a few months of taking this course...I
          passed my exam and am now an AWS Certified Cloud Practitioner! This
          content was exactly what the CCP exam covered.
        </p>
      ),
      tutor: "Jose portilla",
      price: [{ now: "$16.99", prev: "$84.99" }],
      bestseller: "Best Seller",
    },
    {
      id: 2,

      title: (
        <p>
          This course helped me freshen up on my product manager skills and land
          a job at Facebook! Thanks guys :)
        </p>
      ),
      tutor: "John Doe",
      price: [{ now: "$12.99", prev: "$74.99" }],
    },
    {
      id: 3,

      title: (
        <p>
          One of the best courses on management and leadership I have come
          across so far. The advice is practical, and examples highly relatable.
          Would help anyone become a better manager.
        </p>
      ),
      tutor: "Ken Williams",
      price: [{ now: "$10.99", prev: "$64.99" }],
      bestseller: "Best Seller",
    },
    {
      id: 4,

      title: (
        <p>
          I highly recommend this course for all budding data scientists. Even
          people with no prior knowledge of any visualization tools can become a
          master after completing this course.
        </p>
      ),
      tutor: "John Doe",
      price: [{ now: "$18.99", prev: "$54.99" }],
    },
  ];

  const corouselItems = items.map((item) => (
    <div className="flex flex-col items-left gap-2 border-2 border-black mx-2 p-8 h-[300px]">
      <img src={quote} className="w-[30px]" alt="" />
      <p className=" text-md">{item.title}</p>
      <p>{item.tutor}</p>
      {item.price.map((p) => (
        <p key={p.id}>
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
      <h2 className="text-2xl pl-2 pb-8 font-semibold">
        How learners like you are achieving their goals
      </h2>

      <div className="relative pb-10">
        <AliceCarousel
          mouseTracking
          disableDotsControls
          responsive={responsive}
          paddingRight={60}
          renderPrevButton={() => (
            <div className="bg-black w-[50px] h-[50px] absolute -left-5 top-[15%] flex justify-center items-center rounded-[50%] cursor-pointer">
              <span className=" text-white font- text-2xl">
                <MdOutlineArrowBackIos />
              </span>
            </div>
          )}
          renderNextButton={() => (
            <div className="bg-black w-[50px] h-[50px] absolute -right-5 top-[15%] flex justify-center items-center rounded-[50%] cursor-pointer">
              <span className=" text-white font- text-2xl">
                <MdArrowForwardIos />
              </span>
            </div>
          )}
          items={corouselItems}
        />
      </div>
    </div>
  );
}

export default AchievedGoals;
