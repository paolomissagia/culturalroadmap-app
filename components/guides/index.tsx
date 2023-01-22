import React, { useState, useEffect } from "react";
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
} from "react-icons/ri";
import Item from "@/shared/item";
import Roadmap from "../../assets/images/roadmap.jsx";

export default function Guides() {
  const [isGuide, setGuide] = useState(null);
  const [isNext, setNext] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const category = "cinema";
  const level = "begginer";

  const guideDetails = async () => {
    try {
      const res = await fetch(`/api/guides`);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    guideDetails();
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className="container px-5 mx-auto min-h-screen flex flex-col items-center justify-center shrink">
      <div className="text-center mb-5 md:mb-10 mx-auto shrink">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4 capitalize">
          {category} {level} Guide
        </h1>
        <p className="text-base leading-relaxed lg:w-3/4 mx-auto text-gray-400 text-opacity-80">
          Your handpicked list is ready!
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
        </div>
      </div>
      <div className="flex flex-wrap w-full shrink">
        <div
          id="guide"
          className="lg:w-2/3 md:w-1/2 w-[85%] md:pr-10 mx-auto lg:pl-20"
        >
          <Item Icon={RiNumber1} Title={"Paolo"} Author={"Paolo"} />
          <Item Icon={RiNumber2} Title={"Paolo"} Author={"Paolo"} />
          <Item Icon={RiNumber3} Title={"Paolo"} Author={"Paolo"} />
          <Item Icon={RiNumber4} Title={"Paolo"} Author={"Paolo"} />
          <Item Icon={RiNumber5} Title={"Paolo"} Author={"Paolo"} isLast />
        </div>
        <div className="md:w-1/3 hidden md:flex fill-white h-96">
          <Roadmap />
        </div>
      </div>
      <div className="mx-auto shrink">
        <button
          type="button"
          className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          onClick={
            isNext
              ? () => {
                  scroll();
                }
              : () => {
                  setNext(true);
                }
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}
