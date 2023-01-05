import React from "react";
import logo from "../images/logo.svg";
import { BsSearch } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineGlobal } from "react-icons/ai";
import MegaMenu from "./MegaMenu/MegaMenu";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../store/auth-context";

function Header() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <div className="flex px-[1%] items-center min-h-[80px] border-b-2 shadow text-sm font-sm">
      <Link to="/">
        <img src={logo} className="w-[100px] pr-3 cursor-pointer" alt="" />
      </Link>

      <div className="px-3 cursor-pointer">
        <MegaMenu />
      </div>
      <div className=" flex-1">
        <div className=" flex w-full h-[48px] items-center rounded-3xl border-[1px] border-black px-5">
          <BsSearch className=" cursor-pointer" />
          <form className="flex flex-1 pl-3">
            <input
              type="text"
              placeholder="Search Anything"
              className="w-full bg-transparent border-none  text-md focus:outline-0 px-2"
            />
            <button type="submit" className="hidden"></button>
          </form>
        </div>
      </div>
      <div className="px-3 cursor-pointer">
        {" "}
        <Link to="/"> Udemy Business </Link>
      </div>
      <div className="px-3 cursor-pointer">
        {" "}
        <Link to="/">Tech on Udemy</Link>
      </div>
      <HiOutlineShoppingCart size={32} className="px-1 cursor-pointer" />
      {!isLoggedIn && (
        <div className="px-1 cursor-pointer">
          <a
            href="#"
            className="border-[1px] border-black h-[2.3rem] min-w-[5rem] flex justify-center items-center text-sm tracking-tight  text-black font-bold"
          >
            <Link to="/login"> Login in</Link>
          </a>
        </div>
      )}
      {isLoggedIn && (
        <div className="px-1 cursor-pointer">
          <a
            href="#"
            className="border-[1px] border-red-500 h-[2.3rem] min-w-[5rem] flex justify-center items-center text-sm tracking-tight  text-red-500 font-bold"
          >
            <Link to="/login" onClick={logoutHandler}>
              {" "}
              Logout
            </Link>
          </a>
        </div>
      )}
      {/* <div className="px-1 cursor-pointer ">
        {" "}
        <a
          href=""
          className="border-[1px] border-black h-[2.3rem] min-w-[5rem] flex justify-center items-center text-sm tracking-tight  text-white bg-black font-bold"
        >
          Sign up
        </a>
      </div> */}

      <div className="px-1 cursor-pointer">
        <a
          href="#"
          className="border-[1px] border-red-500 h-[2.3rem] min-w-[5rem] flex justify-center items-center text-sm tracking-tight  text-red-500 font-bold"
        >
          <Link to="/register"> Sign up</Link>
        </a>
      </div>

      <div className="px-1 cursor-pointer">
        <AiOutlineGlobal className="border-2 border-black h-[2.3rem] min-w-[2.3rem] p-1" />
      </div>
    </div>
  );
}

export default Header;
