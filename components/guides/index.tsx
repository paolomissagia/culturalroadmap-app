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
import { NavigationContext } from "@/context/NavigationContext";

export default function Guides() {
  const { category, level } = useContext(GuideContext);
  const { setEnd } = useContext(NavigationContext);
  const [loading, setLoading] = useState(true);
  const [guide, setGuide]: any = useState(null);

  const handleGuide = () => {
    setEnd(true);
  };

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
      setGuide(data.data.items);
      setLoading(false);
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
          <Item
            Icon={RiNumber1}
            Title={guide[0].title}
            Author={guide[0].author}
          />
          <Item
            Icon={RiNumber2}
            Title={guide[1].title}
            Author={guide[1].author}
          />
          <Item
            Icon={RiNumber3}
            Title={guide[2].title}
            Author={guide[2].author}
          />
          <Item
            Icon={RiNumber4}
            Title={guide[3].title}
            Author={guide[3].author}
          />
          <Item
            Icon={RiNumber5}
            Title={guide[4].title}
            Author={guide[4].author}
            isLast
          />
        </div>
        <div className="md:w-1/3 hidden md:flex fill-white h-96">
          <Roadmap />
        </div>
      </div>
      <div className="mx-auto shrink">
        <button
          type="button"
          className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          onClick={handleGuide}
        >
          Next
        </button>
      </div>
    </div>
  );
}
