import React from "react";
import ub from "../../images/logo-ub.svg";
import businessimg from "../../images/team.jpg";
import { RxDotFilled } from "react-icons/rx";

function Business() {
  return (
    <div className="flex justify-between w-3/5 mx-auto items-center pb-20 ">
      <div className="flex flex-col gap-4">
        <div className=" flex flex-col justify-center">
          <img src={ub} className="w-3/5 pb-4" alt="" />
          <h2 className="text-4xl pb-6 font-bold">
            Upskill your team with <br /> Udemy Business
          </h2>
          <div className="flex flex-col gap-8">
            <div className="flex items-start">
              <RxDotFilled size={28} />
              <p className="text-xl">
                Unlimited access to 19,000+ top Udemy <br /> courses, anytime,
                anywhere
              </p>
            </div>
            <div className="flex items-start">
              <RxDotFilled size={28} />
              <p className="text-lg font-semibold">
                Unlimited access to 19,000+ top Udemy <br /> courses, anytime,
                anywhere
              </p>
            </div>
            <div className="flex items-start">
              <RxDotFilled size={28} />
              <p className="text-lg font-semibold">
                Unlimited access to 19,000+ top Udemy <br /> courses, anytime,
                anywhere
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-black min-w-[10rem] p-2 text-lg font-semibold text-white hover:">
            Get Udemy Business
          </button>
          <button className="border-2 border-black min-w-[8rem] p-2 text-lg font-bold  hover:bg-gray-100">
            Learn More
          </button>
        </div>
      </div>
      <img src={businessimg} className="w-[480px]" alt="" />
    </div>
  );
}

export default Business;
