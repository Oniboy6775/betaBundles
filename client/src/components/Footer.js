import React from "react";
import { useNavigate } from "react-router-dom";

const links = [
  { name: "home", link: "/" },
  { name: "login", link: "/login" },
  { name: "register", link: "/register" },
  { name: "pricing", link: "/priceList" },
];
export const Footer = () => {
  const navigate = useNavigate();
  return (
    <section className="mt-5 bg-black   text-white border items-center pb-[4rem]">
      <div className="p-4  max-w-[1300px] m-auto w-11/12">
        <div className=" flex justify-between gap-8 md:gap-0 items-center capitalize mb-4">
          <div className="rounded-full hidden w-48 md:block">
            <img src="./assets/logo.png" alt="" className="img" />
          </div>
          <div className="">
            <ul className="underline">
              {links.map((e, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => navigate(e.link)}
                    className="p-2 text-lg cursor-pointer"
                  >
                    {e.name}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="">
            <div className=" ">
              <p className="uppercase text-blue-500">Office address</p>
              <p>No, 4 Osere junction ilorin, kwara state</p>
            </div>
            <div className=" ">
              <p className="uppercase text-blue-500">phone number</p>
              <p>08069041359</p>
            </div>
            <div className=" lowercase">
              <p className="uppercase text-blue-500">Contact us</p>
              <p>admin@betaBundles.com.ng</p>
              <p>ajeigbeabdulrasak@gmail.com</p>
            </div>
          </div>
        </div>
        <p className="text-center capitalize">
          All right reserved &copy; {new Date().getFullYear()} Designed &
          developed by
          <a
            className="text-blue-500"
            href="https://onisabi-portfolio.netlify.app/"
            target="blank"
          >
            Oniboy
          </a>
        </p>
      </div>
    </section>
  );
};
