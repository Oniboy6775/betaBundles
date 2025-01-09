import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaClipboardList, FaUserAlt, FaTimes } from "react-icons/fa";
import LandingNav from "../components/LandingNav";
import { useGlobalContext } from "../context/UserContext";
import { Button, ButtonGroup } from "flowbite-react";
import WelcomeBanner from "../components/WelcomeBanner";
import { Footer } from "../components/Footer";
import FAQ from "../components/FAQ";
import { Services } from "../components/Services";
const Landing = () => {
  const { user, token } = useGlobalContext();
  const navigate = useNavigate();

  return (
    <div className="relative w-full">
      <div className=" flex flex-col ">
        <LandingNav />
        <WelcomeBanner />
      </div>
      <section>
        <div className="skewed"></div>
      </section>
      <section className="mt-[80px]  m-auto  max-w-[var(--max-width)]  flex flex-col md:flex-row md:items-stretch gap-4 w-10/12 h-full">
        <div className="md:w-6/12 ">
          <h1 className="font-extrabold text-transparent text-center md:text-6xl bg-clip-text bg-gradient-to-r from-[var(--primary-fade-start)] to-[var(--primary-fade-end)]">
            {token ? `Hi ${user.userName}, ` : ""}Welcome to betaBundles
          </h1>
          <p className="text-center text-3xl md:text-3xl">
            A technology platform that offers solutions to digital needs at best
            possible price without compromising quality.
          </p>
          <ButtonGroup className=" flex justify-center gap-4">
            <Button
              color="btn"
              className=" btn"
              onClick={() => navigate(`${token ? "/profile" : "/login"}`)}
            >
              <FaUserAlt className="mr-2" />
              {token ? "Dashboard" : "Login/Register"}
            </Button>
            <Button
              color=""
              className="  btn btn-hipster "
              onClick={() => navigate("/priceList")}
            >
              <FaClipboardList className="mr-2" />
              Price list
            </Button>
          </ButtonGroup>
        </div>
        <div className="">
          <img src="./assets/phone3.png" alt="" className="w-[80%]" />
        </div>
      </section>
      <Services />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Landing;
