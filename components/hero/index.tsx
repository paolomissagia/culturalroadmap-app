import React, { useContext } from "react";
import Cello from "../../assets/images/cello.jsx";
import { NavigationContext } from "@/context/NavigationContext";
import { scrollTo } from "@/lib/scrollView";

export default function Hero() {
  const { setStart } = useContext(NavigationContext);

  const handleStart = () => {
    setStart(true);
    scrollTo("categories");
  };

  return (
    <div className="container mx-auto px-5 flex md:flex-row flex-col items-center justify-center h-[80vh]">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h2 className="title-font font-semibold text-white tracking-wider text-sm mb-3">
          LITERATURE, CINEMA & MUSIC
        </h2>
        <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-white">
          Guides for Everyone
        </h1>
        <p className="mb-8 leading-relaxed">
          Start your journey with a curated list of books, movies, and classical
          music.
        </p>
        <div className="flex justify-center">
          <button
            type="button"
            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={handleStart}
          >
            Start
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 hidden md:flex h-screen">
        <Cello />
      </div>
    </div>
  );
}
