import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ContextInter } from "../hooks/useContext";
import { StoreContext } from "../context/Context";

const NavBar = () => {
  const { store } = useContext(StoreContext) as ContextInter;
  const [showCart, setShowCart] = useState(false);

  function toggleCart(): void {
    setShowCart(!showCart);
  }

  return (
    <nav className=" w-full h-14 bg-slate-800 text-white  flex items-center px-10 py-1 shadow-xl sticky top-0 left-0 ">
      <ul className=" text-white font-semibold flex gap-4">
        <li className="">
          <Link to={"/"}>Home</Link>
        </li>

        <li className=" ">
          <Link to={"store"}>Store</Link>
        </li>

        <li className=" ">
          <Link to={"about"}>About</Link>
        </li>
      </ul>
      <div
        className=" h-10 w-10 rounded-full bg-blue-500 ml-auto flex justify-center items-center cursor-pointer"
        onClick={toggleCart}
      >
        {store.length}
      </div>

      <div
        className={`absolute h-screen ${
          !showCart ? "right-[-125rem]" : "right-0"
        } top-0 w-[18rem] bg-white text-black shadow-xl transition-all duration-300 ease-in-out`}
      >
        asd
      </div>
    </nav>
  );
};

export default NavBar;
