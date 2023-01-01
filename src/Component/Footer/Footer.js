import React from "react";
import footerlogo from "../../images/logo-udemy-inverted.svg";
import { AiOutlineGlobal } from "react-icons/ai";

function Footer() {
  return (
    <div className="flex flex-col text-white bg-black p-10">
      <div className="flex justify-between pb-16">
        <div className="flex justify-start gap-28">
          <ul className="flex flex-col gap-3">
            <li>Udemy Business</li>
            <li>Teach on Udemy</li>
            <li>Get the app</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
          <ul className="flex flex-col gap-3">
            <li>Careers</li>
            <li>Blog</li>
            <li>Help and Support</li>
            <li>Affiliate</li>
            <li>Investors</li>
          </ul>
          <ul className="flex flex-col gap-3">
            <li>Terms</li>
            <li>Privacy policy</li>
            <li>Cookie settings</li>
            <li>Sitemap</li>
            <li>Accessibility statement</li>
          </ul>
        </div>
        <div className="flex gap-2 border-2 min-w-[8rem] h-[2.4rem] items-center p-2 cursor-pointer hover:bg-[#ffffff48]">
          <AiOutlineGlobal size={24} className="flex items-center" />
          <span>English</span>
        </div>
      </div>
      <div className="flex justify-between">
        <img src={footerlogo} className="w-[100px]" alt="" />
        <p>© 2022 Udemy, Inc.</p>
      </div>
    </div>
  );
}

export default Footer;
