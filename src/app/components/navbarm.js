"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import logo from "../../../images/logo.svg";
import burger from "../../../images/icon-menu.svg";
import close from "../../../images/icon-close-menu.svg";
import arrowD from "../../../images/icon-arrow-down.svg";
import arrowU from "../../../images/icon-arrow-up.svg";
import calendar from "../../../images/icon-calendar.svg";
import planning from "../../../images/icon-planning.svg";
import reminders from "../../../images/icon-reminders.svg";
import todo from "../../../images/icon-todo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu((old) => !old);
  };

  const toggle = () => {
    setIsOpen((old) => !old);
  };

  const toggle2 = () => {
    setIsOpen2((old2) => !old2);
  };

  const transClass = isOpen ? "flex" : "hidden";
  const transClass2 = isOpen2 ? "flex" : "hidden";
  const transClassMenu = isOpenMenu ? "flex" : "hidden";

  return (
    <div className=" relative w-full h-[70px] flex flex-row items-center justify-between font-Epilogue">
      <div className="flex flex-row  m-4 ">
        <Image
          src={logo}
          alt="logo"
          width={84}
          height={27}
          className=" w-27 h-auto"
        />
      </div>
      <div className=" block m-4   ">
        <button className=" " onClick={toggleMenu}>
          <Image
            src={burger}
            alt="burger"
            width={27}
            height={27}
            className=" w-17 h-auto"
          />
        </button>

        <div
          className={`absolute flex-col -top-0 right-0 z-30 h-screen w-[250px] justify-self-end bg-slate-100 ${transClassMenu}`}
        >
          <div className="flex justify-end">
            <button className=" m-4" onClick={toggleMenu}>
              <Image
                src={close}
                alt="close"
                width={27}
                height={27}
                className=" w-17 h-auto"
              />
            </button>
          </div>
          {/* menu buttons */}
          <div className="flex flex-col text-gray-500  font-medium">
            <div className="my-2 mx-4 relative">
              <button
                className="hover:text-black flex flex-row items-center"
                onClick={toggle}
              >
                Features
                {isOpen ? (
                  <Image
                    src={arrowU}
                    alt="arrowU"
                    width={25}
                    height={25}
                    className=" mx-1 w-4 h-auto  "
                  />
                ) : (
                  <Image
                    src={arrowD}
                    alt="arrowD"
                    width={25}
                    height={25}
                    className=" mx-1 w-4 h-auto  "
                  />
                )}
              </button>
              <div
                className={` w-[150px] min-h-[150px] flex flex-col py-4  ${transClass}`}
              >
                <Link
                  className=" hover:text-black px-4 py-1 flex flex-row items-center"
                  href=""
                  onClick={toggle}
                >
                  <Image
                    src={todo}
                    alt="todo"
                    width={25}
                    height={25}
                    className=" mx-2 w-4 h-auto  "
                  />
                  Todo List
                </Link>
                <Link
                  className=" hover:text-black px-4 py-1 flex flex-row items-center"
                  href=""
                  onClick={toggle}
                >
                  <Image
                    src={calendar}
                    alt="calendar"
                    width={25}
                    height={25}
                    className=" mx-2 w-4 h-auto  "
                  />
                  Calendar
                </Link>
                <Link
                  className=" hover:text-black px-4 py-1 flex flex-row items-center"
                  href=""
                  onClick={toggle}
                >
                  <Image
                    src={reminders}
                    alt="reminders"
                    width={25}
                    height={25}
                    className=" mx-2 w-4 h-auto  "
                  />
                  Reminders
                </Link>
                <Link
                  className=" hover:text-black px-4 py-1 flex flex-row items-center"
                  href=""
                  onClick={toggle}
                >
                  <Image
                    src={planning}
                    alt="planning"
                    width={25}
                    height={25}
                    className=" mx-2 w-4 h-auto  "
                  />
                  Planning
                </Link>
              </div>
            </div>
            <div className="my-2 mx-4 relative">
              <button
                className="hover:text-black flex flex-row items-center"
                onClick={toggle2}
              >
                Company{" "}
                {isOpen2 ? (
                  <Image
                    src={arrowU}
                    alt="arrowU"
                    width={25}
                    height={25}
                    className=" mx-1 w-4 h-auto  "
                  />
                ) : (
                  <Image
                    src={arrowD}
                    alt="arrowD"
                    width={25}
                    height={25}
                    className=" mx-1 w-4 h-auto  "
                  />
                )}
              </button>
              <div
                className={` w-[150px] min-h-[130px] flex flex-col py-4 ${transClass2}`}
              >
                <Link
                  className="hover:text-black px-4 py-1"
                  href=""
                  onClick={toggle2}
                >
                  History
                </Link>
                <Link
                  className="hover:text-black px-4 py-1"
                  href=""
                  onClick={toggle2}
                >
                  Our Team
                </Link>
                <Link
                  className="hover:text-black px-4 py-1"
                  href=""
                  onClick={toggle2}
                >
                  Blog
                </Link>
              </div>
            </div>

            <div className="my-2 mx-4 relative">
              <button
                className="hover:text-black flex flex-row items-center"
                onClick={toggleMenu}
              >
                Careers{" "}
              </button>
            </div>
            <div className="my-2 mx-4 relative">
              <button
                className="hover:text-black flex flex-row items-center"
                onClick={toggleMenu}
              >
                About{" "}
              </button>
            </div>
          </div>

          {/* Login buttons */}
          <div className="flex flex-col  h-[200px]  ">
            <button className=" rounded-2xl w-[200px] h-[50px] place-self-center font-Epilogue  text-gray-500 font-semibold  hover:text-black ">
              Login
            </button>
            <button className=" rounded-2xl w-[200px] h-[50px] place-self-center font-Epilogue border-2 border-gray-500 hover:border-black text-gray-500 font-semibold  hover:text-black ">
              Register
            </button>
          </div>
        </div>
        {isOpenMenu ? (
          <div
            className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/50"
            onClick={toggleMenu}
          ></div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
