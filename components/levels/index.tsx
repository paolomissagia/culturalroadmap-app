import React, { useContext } from "react";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import Option from "../shared/option";
import { GuideContext } from "@/context/GuideContext";

export default function Levels() {
  const { level, setLevel } = useContext(GuideContext);

  return (
    <div className="container px-5 mx-auto min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-12 sm:mb-20">
        <h1 className="sm:text-3xl text-2xl text-white mb-4">LEVELS</h1>
        <p className="text-base leading-relaxed mx-auto text-gray-400 text-opacity-80">
          You&apos;ve chosen !!category!! Now choose a level to proceed.
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
        </div>
      </div>
      <div className="flex flex-wrap gap-5 sm:gap-0">
        <Option
          Icon={BsStar}
          Title="Beginner"
          Description="Just Starting? No Problem at All."
          Action={() => {
            setLevel("Beginner");
          }}
        />
        <Option
          Icon={BsStarHalf}
          Title="Intermediate"
          Description="Found Yourself Between Both Extremes? That is the Right Place!"
          Action={() => {
            setLevel("Intermediate");
          }}
        />
        <Option
          Icon={BsStarFill}
          Title="Advanced"
          Description="Feeling Confident? Time to Advance."
          Action={() => {
            setLevel("Advanced");
          }}
        />
      </div>
    </div>
  );
}
