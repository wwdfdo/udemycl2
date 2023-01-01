import React from "react";
import company1 from "../../images/app1.svg";
import company2 from "../../images/app2.svg";
import company3 from "../../images/app3.svg";
import company4 from "../../images/app4.svg";
import company5 from "../../images/app5.svg";
import company6 from "../../images/app6.svg";

function Companies() {
  const companies = [
    company1,
    company2,
    company3,
    company4,
    company5,
    company6,
  ];

  return (
    <div className="w-11/12 mx-auto py-28 ">
      <h2 className="text-center text-3xl font-bold pb-6">
        Trusted by over 13,400 great teams
      </h2>
      <p className="text-center text-lg pb-10">
        Leading companies use the same courses to help employees keep their
        skills fresh.
      </p>
      <div className="flex justify-around">
        {companies.map((company) => (
          <img src={company} alt="" />
        ))}
      </div>
    </div>
  );
}

export default Companies;
