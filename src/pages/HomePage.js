import React from "react";
import AchievedGoals from "../Component/AchievedGoals/AchievedGoals";
import Business from "../Component/Business/Business";
import Companies from "../Component/Companies/Companies";
import FeaturedCategory from "../Component/FeaturedCategory/FeaturedCategory";
import Footer from "../Component/Footer/Footer";
import MegaMenu from "../Component/MegaMenu/MegaMenu";
import ProfSkillSlider from "../Component/ProfSkillSlider/ProfSkillSlider";
import ViewingStudents from "../Component/ViewingStudents/ViewingStudents";
import ViewportSlider from "../Component/ViewportSlider/ViewportSlider";
import TutorComponent from "../Component/TutorComponent/TutorComponent";

function HomePage() {
  return (
    <div>
      <ViewportSlider />
      <ProfSkillSlider />
      <AchievedGoals />
      <ViewingStudents />
      <FeaturedCategory />
      <Companies />
      <Business />
      <TutorComponent />
      <MegaMenu />
      <Footer />
    </div>
  );
}

export default HomePage;
