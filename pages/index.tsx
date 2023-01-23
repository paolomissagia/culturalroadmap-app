import Navbar from "@/components/shared/navbar";
import Hero from "@/components/hero";
import Categories from "@/components/categories";
import Levels from "@/components/levels";
// import Guides from "@/components/guides";
// import Share from "@/components/share";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Levels />
      {/* <Guides /> */}
      {/* <Share /> */}
    </>
  );
}
