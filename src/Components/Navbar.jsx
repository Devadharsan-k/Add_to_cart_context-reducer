import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/Context";

const Navbar = () => {
  const globalState = useContext(CartContext);
  const state = globalState.state;
  return (
    <div className="bg-black h-14 text-white text-2xl flex items-center justify-center gap-x-5 w-full">
      <Link to="/">HOME</Link>
      <Link to="/basket" className="relative">
        BASKET
        <span className=" absolute top-0 -right-5 bg-blue-500 rounded-full text-[12px] h-4 w-4 grid place-content-center">
          {state.length}
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
