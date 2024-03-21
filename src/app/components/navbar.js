"use client";

import Image from "next/image";
import logo from "../../../images/logo.svg";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggle = () => {
    setIsOpen((old) => !old);
  };

  const toggle2 = () => {
    setIsOpen2((old2) => !old2);
  };

  const transClass = isOpen ? "flex" : "hidden";
  const transClass2 = isOpen2 ? "flex" : "hidden";

  return (
    <div className=" bg-slate-400 w-full h-[60px] flex flex-row">
      <div className="flex flex-row m-5 h-[27px] bg-red-400">
        <Image
          src={logo}
          alt="logo"
          width={84}
          height={27}
          className=" w-12 h-6 "
        />
      </div>
      <div className="flex flex-row">
        <div className="m-5 relative">
          <button className="hover:text-blue-400" onClick={toggle}>
            Features
          </button>
          <div
            className={`absolute top-8 z-30 w-[150px] min-h-[300px] flex flex-col py-4 bg-zinc-400 rounded-md ${transClass}`}
          >
            <Link
              className="hover:bg-zinc-300 hover:text-zinc-500 px-4 py-1"
              href=""
              onClick={toggle}
            >
              Todo List
            </Link>
          </div>
        </div>
        <div className="m-5 relative">
          <button className="hover:text-blue-400" onClick={toggle2}>
            Company
          </button>
          <div
            className={`absolute top-8 z-30 w-[150px] min-h-[300px] flex flex-col py-4 bg-zinc-400 rounded-md ${transClass2}`}
          >
            <Link
              className="hover:bg-zinc-300 hover:text-zinc-500 px-4 py-1"
              href=""
              onClick={toggle2}
            >
              Uwu
            </Link>
          </div>
        </div>
        {/*isOpen ? (
          <div
            className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40"
            onClick={toggle}
          ></div>
        ) : (
          <></>
        )*/}
      </div>

      <div className="flex flex-row bg-slate-500 h-[60px] mr-4 place-self-end self-end justify-self-end ">
        <button className=" rounded-2xl w-[130px] h-[50px]  place-self-center font-Epilogue    text-black ">
          Login
        </button>
        <button className=" rounded-2xl w-[130px] h-[50px]  place-self-center font-Epilogue border-2 border-black  text-black ">
          Register
        </button>
      </div>
    </div>
  );
}
