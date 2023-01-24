import React, { useContext, useEffect } from "react";
import { GiBookshelf, GiFilmProjector, GiMusicalScore } from "react-icons/gi";
import Option from "../shared/option";
import { GuideContext } from "@/context/GuideContext";
import { scrollTo } from "@/lib/scrollView";

export default function Categories() {
  const { setCategory } = useContext(GuideContext);

  useEffect(() => {
    scrollTo("categories");
  }, []);

  const handleCategory = (inputCategory: string) => {
    setCategory(inputCategory);
  };

  return (
    <div
      className="container px-5 mx-auto min-h-screen flex flex-col items-center justify-center"
      id="categories"
    >
      <div className="text-center mb-12 sm:mb-20">
        <h1 className="sm:text-3xl text-2xl text-white mb-4">CATEGORIES</h1>
        <p className="text-base leading-relaxed mx-auto text-gray-400 text-opacity-80">
          Let&apos;s Start! Pick an area of your interest.
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
        </div>
      </div>
      <div className="flex flex-wrap gap-5 sm:gap-0">
        <Option
          Icon={GiBookshelf}
          Title="Literature"
          Description="The Finest Books of Western Civilization."
          Action={() => {
            handleCategory("Literature");
          }}
        />
        <Option
          Icon={GiFilmProjector}
          Title="Cinema"
          Description="An Amazing Blend of Movies and Documentaries."
          Action={() => handleCategory("Cinema")}
        />
        <Option
          Icon={GiMusicalScore}
          Title="Music"
          Description="Find the Best of Classical, Opera and Ballet."
          Action={() => handleCategory("Music")}
        />
      </div>
    </div>
  );
}
