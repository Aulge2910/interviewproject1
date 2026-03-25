"use client";

import { IoPerson } from "react-icons/io5";
import { useState, useEffect } from "react";
import Modal from "@/app/_components/Modal";
import LoginForm from "@/app/_utils/Login/LoginForm";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import RegisterForm from "@/app/_utils/Register/RegisterForm";
import Drawer from "@/app/_components/Drawer";
import Dropdown from "@/app/_components/Dropdown";
import { useAuth } from "@/app/auth";
type ModalType = "login" | "register" | null;

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
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const closeModal = () => setActiveModal(null);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(countDownTimer(targetDate));
  const { isLoggedIn, user, logout } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    <section className="w-full max-w-380 bg-[#112a4d] mx-auto">
      <div></div>
      <div className="lg:w-[80%]  w-full mx-auto flex flex-wrap lg:grid lg:grid-cols-[auto_1fr_auto] items-center justify-between lg:justify-center py-4 gap-4 lg:gap-10">
        <img
          src="/images/blackwelllogo3-1.png"
          alt=""
          className="order-1 px-4 lg:px-0"
        />

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
            {mounted ? (
              <>
                <div className="flex flex-col">
                  <span className="lg:text-3xl">
                    {formatNumber(timeLeft.hours)}
                  </span>
                  <span>Hours</span>
                </div>
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
              </>
            ) : (
              ""
            )}
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
              {" "}
              {isLoggedIn ? (
                <span className="text-white font-semibold text-xl">
                  {user?.name}
                </span>
              ) : (
                <button
                  onClick={() => setActiveModal("register")}
                  className="text-sm uppercase text-center rounded-4xl bg-[#ea6723] hover:bg-[#f88921] text-white p-2 min-w-28"
                >
                  Register Now
                </button>
              )}
              {isLoggedIn ? (
                <div>
                  <button
                    className="bg-white border px-4  py-2 rounded-xl hover:bg-black hover:text-white"
                    onClick={() => {
                      if (confirm("Are you sure you want to logout?")) {
                        logout();
                      }
                    }}
                  >
                    logout
                  </button>
                </div>
              ) : (
                <IoPerson
                  onClick={() => setActiveModal("login")}
                  className="w-8 h-5 text-gray-400 hover:text-gray-600 cursor-pointer"
                />
              )}
            </div>
          </Drawer>
        </div>

        {/* for bigger screen */}
        <div className="hidden lg:flex gap-2 items-center lg:order-3">
          {isLoggedIn ? (
            <span className="text-white font-semibold text-xl">
              {user?.name}
            </span>
          ) : (
            <button
              onClick={() => setActiveModal("register")}
              className="text-sm uppercase text-center rounded-4xl bg-[#ea6723] hover:bg-[#f88921] text-white p-2 min-w-28"
            >
              Register Now
            </button>
          )}

          {isLoggedIn ? (
            <div>
              <button
                className="bg-white border px-4  py-2 rounded-xl hover:bg-black hover:text-white"
                onClick={() => {
                  if (confirm("Are you sure you want to logout?")) {
                    logout();
                  }
                }}
              >
                logout
              </button>
            </div>
          ) : (
            <IoPerson
              onClick={() => setActiveModal("login")}
              className="w-8 h-5 text-gray-400 hover:text-gray-600 cursor-pointer"
            />
          )}
        </div>
        <Modal
          title="Login"
          isOpen={activeModal === "login"}
          onClose={closeModal}
        >
          <LoginForm onClose={closeModal} />
        </Modal>

        <Modal
          title="Register"
          isOpen={activeModal === "register"}
          onClose={closeModal}
        >
          <RegisterForm onClose={closeModal} />
        </Modal>
      </div>
    </section>
  );
};

export default CountDown;
