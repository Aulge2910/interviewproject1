"use client";

import { IoPerson } from "react-icons/io5";
import { useState, useEffect } from "react";
import Modal from "@/app/_components/Modal";
import LoginForm from "@/app/_utils/Login/LoginForm";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import Drawer from "@/app/_components/Drawer";

const countDownTimer = (targetDate: string) => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

const CountDown = ({ targetDate }: { targetDate: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(countDownTimer(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(countDownTimer(targetDate));
    }, 1000);

    //  to clear timer
    return () => clearInterval(timer);
  }, [targetDate]);

  // change 9 to 09 etc, add "0"
  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <section className="w-full max-w-380 bg-[#112a4d]">
      <div className="lg:w-[80%]  w-full mx-auto flex flex-wrap lg:grid lg:grid-cols-[auto_1fr_auto] items-center justify-between lg:justify-center py-4 gap-4 lg:gap-10">
        <img src="/images/blackwelllogo3-1.png" alt="" className="order-1 px-4 lg:px-0" />

        {/* count down part - middle part */}
        <div className=" bg-[#2196f3] lg:bg-transparent w-full flex flex-col sm:flex-row gap-4 text-white items-center order-3 lg:order-2 ">
          <span className="w-30 uppercase text-center">Promotion Ends In</span>
          <div className="flex items-center gap-4 [&>div>span]:text-center [&>div>span:last-child]:text-[10px]">
            <div className="w-auto lg:w-12" />
            <div className="flex flex-col">
              <span className="lg:text-3xl">{formatNumber(timeLeft.days)}</span>
              <span>Days</span>
            </div>{" "}
            {":"}
            <div className="flex flex-col">
              <span className="lg:text-3xl">
                {formatNumber(timeLeft.hours)}
              </span>
              <span>Hours</span>
            </div>{" "}
            {":"}
            <div className="flex flex-col">
              <span className="lg:text-3xl">
                {formatNumber(timeLeft.minutes)}
              </span>
              <span>Minute</span>
            </div>{" "}
            {":"}
            <div className="flex flex-col">
              <span className="lg:text-3xl">
                {formatNumber(timeLeft.seconds)}
              </span>
              <span>Seconds</span>
            </div>
          </div>
        </div>

        {/* hamburger part for smaller screen */}
        <div className="flex lg:hidden order-2 px-4">
          <button onClick={() => setIsHamburgerMenuOpen(true)}>
            <IoMenu className="w-8 h-8 text-white" />
          </button>

          <Drawer
            isOpen={isHamburgerMenuOpen}
            onClose={() => setIsHamburgerMenuOpen(false)}
          >
            {/* drawer content*/}
            <div className="flex flex-col gap-6 p-6 items-start">
              <a
                href="#"
                className="text-sm uppercase text-center rounded-4xl bg-[#ea6723] hover:bg-[#f88921] text-white p-2 min-w-full"
              >
                Register Now
              </a>

              {/* close drawer first, then open modal*/}
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => {
                  setIsHamburgerMenuOpen(false);
                  setIsModalOpen(true);
                }}
              >
                <IoPerson className="w-8 h-5 text-gray-400" />
                <span className="text-gray-200 font-medium">Login</span>
              </div>
            </div>
          </Drawer>
        </div>

        {/* for bigger screen */}
        <div className="hidden lg:flex gap-2 items-center lg:order-3">
          <a
            href=""
            className="text-sm uppercase text-center rounded-4xl bg-[#ea6723] hover:bg-[#f88921] text-white p-2 min-w-28"
          >
            Register Now
          </a>
          <IoPerson
            onClick={() => setIsModalOpen(true)}
            className="w-8 h-5 text-gray-400"
          />
        </div>
        <Modal
          title="Login"
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <LoginForm />
        </Modal>
      </div>
    </section>
  );
};

export default CountDown;
