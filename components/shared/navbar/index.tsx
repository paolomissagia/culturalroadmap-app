import React from "react";
import Link from "next/link";
import { FaTimes, FaBars, FaMapMarkerAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-center md:justify-between">
      <div className="flex font-medium items-center mb-0">
        <FaMapMarkerAlt className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" />
        <Link href="/" className="mr-5 hover:text-white">
          <span className="ml-3 text-xl text-white">Cultural Roadmap</span>
        </Link>
        <div className="hidden md:flex md:mx-auto flex-wrap items-center text-base z-50 md:border-l md:border-gray-700 md:pl-4">
          <p className="text-md mr-5 font-serif">ars longa, vita brevis</p>
        </div>
      </div>
    </div>
  );
}
