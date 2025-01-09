import React from "react";
import airtimeSvg from "../images/airtime.svg";
import dataSvg from "../images/data.svg";
import electricitySvg from "../images/electricity.svg";
import { Card } from "flowbite-react";

const services = [
  {
    name: "airtime",
    icon: airtimeSvg,
    desc: "With Our Fast And Easy Service, Your Airtime Will Be Brand New!!!",
  },
  {
    name: "data",
    icon: dataSvg,
    desc: " Want To Help Your Friends And Family Connected? With Our Data Bundle Service, You Can Do Just That!!!",
  },
  {
    name: "electricity token",
    icon: electricitySvg,
    desc: "Conveniently pay your TV subscription ",
  },
  {
    name: "electricity token",
    icon: electricitySvg,
    desc: "With Our Easy-To-Use Service, You Can Top-Up Your Electricity Account Without The Hassle Of Going To A Store Or Waiting Inline",
  },
];
export const Services = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center">
      <h2 className="title text-center underline"> services</h2>
      <div className="md:flex max-w-[var(--max-width)] md:gap-5  md:justify-center w-[80%]  m-auto md:m-0 ">
        {services.map((e) => {
          return (
            <Card
              key={e.name}
              className=" w-full  dark_mode border-t-8 border-t-purple-800 text-center mt-8 p-4 rounded-md shadow-md border hover:shadow-xl"
            >
              <div className="max-w-[80px] m-auto">
                <img src={e.icon} alt="" className="img" />
              </div>
              <p className="font-bold capitalize text-sm">{e.name}</p>
              <p>{e.desc}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
