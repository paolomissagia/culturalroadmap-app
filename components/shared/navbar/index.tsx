import React from "react";
import Link from "next/link";
import { FaTimes, FaBars, FaMapMarkerAlt } from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = React.useState(false);

  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
      <div className="flex font-medium items-center mb-0">
        <FaMapMarkerAlt className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" />
        <Link href="/" className="mr-5 hover:text-white">
          <span className="ml-3 text-xl text-white">Cultural Roadmap</span>
        </Link>
        <div className="hidden md:flex md:mx-auto flex-wrap items-center text-base z-50 md:border-l md:border-gray-700 md:pl-4">
          <p className="text-md mr-5 font-serif">ars longa, vita brevis</p>
        </div>
      </div>
      <div
        className="flex md:hidden flex-row cursor-pointer pr-4 z-50"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gray-900 z-20">
          <Link
            onClick={() => setNav(!nav)}
            className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-white hover:underline"
            href="/"
          >
            Home
          </Link>
          <Link
            onClick={() => setNav(!nav)}
            className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-white hover:underline"
            href="/about"
          >
            About
          </Link>
          <Link
            onClick={() => setNav(!nav)}
            className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-white hover:underline"
            href="/contact"
          >
            Contact
          </Link>
        </ul>
      )}
    </div>
  );
}
