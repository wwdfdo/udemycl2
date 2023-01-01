import React from "react";

function FeaturedCategory() {
  const categories = [
    {
      title: "Development",
      topics: [
        {
          ltitle: "Python",
          scount: "36,354,994 students",
        },
        {
          ltitle: "Web Development",
          scount: "36,354,994 students",
        },
        {
          ltitle: "Machine Learning",
          scount: "7,070,015 students",
        },
      ],
    },
    {
      title: "Business",
      topics: [
        {
          ltitle: "Financial Analysis",
          scount: "1,195,282 students",
        },
        {
          ltitle: "SQL",
          scount: "5,977,561 students",
        },
        {
          ltitle: "PMP",
          scount: "1,733,398 students",
        },
      ],
    },
    {
      title: "IT and Software",
      topics: [
        {
          ltitle: "AWS Certification",
          scount: "6,078,244 students",
        },
        {
          ltitle: "Ethical Hacking",
          scount: "10,931,066 students",
        },
        {
          ltitle: "Cyber Security",
          scount: "3,998,037 students",
        },
      ],
    },
    {
      title: "Design",
      topics: [
        {
          ltitle: "Photoshop",
          scount: "10,909,736 students",
        },
        {
          ltitle: "Graphic Design",
          scount: "3,381,052 students",
        },
        {
          ltitle: "Drawing",
          scount: "2,410,849 students",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="w-11/12 mx-auto ">
        <h2 className="text-3xl font-bold pb-10">
          Featured topics by category
        </h2>
        <div className="flex justify-left mx-auto gap-[15%] ">
          {categories.map((category) => (
            <div className="flex flex-col gap-5">
              <h2 className="text-xl font-bold">{category.title}</h2>
              {category.topics.map((topic) => (
                <div>
                  <p className="underline text-blue-700 font-bold text-lg">
                    {topic.ltitle}
                  </p>
                  <p className=" text-gray-600 text-md">{topic.scount}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedCategory;
