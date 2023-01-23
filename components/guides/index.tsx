import React, { useState, useEffect, useContext } from "react";
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
} from "react-icons/ri";
import Item from "@/components/shared/item";
import Roadmap from "../../assets/images/roadmap.jsx";
import { GuideContext } from "@/context/GuideContext";

export default function Guides() {
  const { category, level } = useContext(GuideContext);
  const [loading, setLoading] = useState(Boolean);
  const [guide, setGuide] = useState(null);

  const guideDetails = async () => {
    try {
      const resOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          category: `${category}`,
          level: `${level}`,
        },
      };
      const res = await fetch(`/api/guides`, resOptions);
      const data = await res.json();
      setGuide(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    guideDetails();
  }, [category, level]);

  if (loading) return <h1>Loading...</h1>;
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
          onClick={() => {}}
        >
          Next
        </button>
      </div>
    </div>
  );
}
