import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white fixed w-full">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

        <div className="logo font-bold text-2xl">
            <span className="text-green-500"> &lt;</span>
            Pass
            <span className="text-green-500">OP&gt;</span>

        </div>
        {/* <ul>
          <li className="flex gap-4">
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </li>
        </ul> */}

        <button className="text-white px-2 hover:bg-green-400  bg-green-500 justify-center items-center rounded-full flex gap-2">
          <img className="invert w-10 p-1" src="github.png" alt="" />
          <span className="font-bold">GitHub</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
