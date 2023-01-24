import { createPortal } from "react-dom";
import Navbar from "@/components/shared/navbar";
import Hero from "@/components/hero";
import Categories from "@/components/categories";
import Levels from "@/components/levels";
import Guides from "@/components/guides";
import Final from "@/components/final";
import { useState } from "react";
import { GuideContext } from "@/context/GuideContext";
import { NavigationContext } from "@/context/NavigationContext";

export default function Home() {
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");

  return (
    <>
      <NavigationContext.Provider
        value={{
          start,
          setStart,
          end,
          setEnd,
        }}
      >
        <Navbar />
        <Hero />
        <GuideContext.Provider
          value={{
            category,
            setCategory,
            level,
            setLevel,
          }}
        >
          {start && createPortal(<Categories />, document.body)}
          {category !== "" && createPortal(<Levels />, document.body)}
          {level !== "" && createPortal(<Guides />, document.body)}
        </GuideContext.Provider>
        {end && createPortal(<Final />, document.body)}
      </NavigationContext.Provider>
    </>
  );
}
