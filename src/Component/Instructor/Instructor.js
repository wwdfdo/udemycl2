import React from "react";
import instructorimg from "../../images/instructor.jpg";

function Instructor() {
  return (
    <div className="flex justify-center gap-20 w-3/5 mx-auto items-center pb-20">
      <img src={instructorimg} className="w-[430px]" alt="" />
      <div className="flex flex-col gap-6 items-start">
        <h2 className="text-3xl font-bold">Become an instructor</h2>
        <p className=" text-lg">
          Instructors from around the world teach <br /> millions of students on
          Udemy. We provide the <br /> tools and skills to teach what you love.
        </p>
        <button className="min-w-[8rem] text-white bg-black p-3 font-bold text-md">
          Start teaching Today
        </button>
      </div>
    </div>
  );
}

export default Instructor;
