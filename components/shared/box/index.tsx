import React from "react";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

export default function Box({ Title, Description, isSave, isShare }: any) {
  return (
    <div className="p-4 md:w-1/2 lg:w-2/5 w-full mx-auto">
      <div className="h-full bg-gray-800 bg-opacity-40 p-4 md:p-8 rounded">
        <h2 className="text-xl text-indigo-400 tracking-widest font-medium text-center mb-5">
          {Title}
        </h2>
        <p className="leading-relaxed mb-6 text-center">{Description}</p>
        <div className="flex justify-around">
          {isSave && (
            <Link
              href="/login"
              className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Log in
            </Link>
          )}
          {isShare && (
            <>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//cultural-roadmap.herokuapp.com/">
                <BsFacebook className="h-12 w-12" />
              </a>
              <a href="https://twitter.com/intent/tweet?text=https%3A//cultural-roadmap.herokuapp.com/">
                <BsTwitter className="h-12 w-12" />
              </a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//cultural-roadmap.herokuapp.com/&title=Cultural%20Roadmap&summary=&source=">
                <BsLinkedin className="h-12 w-12" />
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
