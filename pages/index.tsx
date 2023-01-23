import Navbar from "@/components/shared/navbar";
import Hero from "@/components/hero";
import Categories from "@/components/categories";
import Levels from "@/components/levels";
import Guides from "@/components/guides";
import Final from "@/components/final";
import { useState } from "react";
import { GuideContext } from "@/context/GuideContext";

export default function Home() {
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");

  return (
    <>
      <Navbar />
      <Hero />
      <GuideContext.Provider value={{ category, setCategory, level, setLevel }}>
        <Categories />
        <Levels />
        <Guides />
      </GuideContext.Provider>
      <Final />
    </>
  );
}
