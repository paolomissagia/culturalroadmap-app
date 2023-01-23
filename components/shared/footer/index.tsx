import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="container mx-auto py-4 px-5 flex flex-row absolute inset-x-0 bottom-0 items-center">
      <p className="text-sm text-center sm:text-left">
        © 2022 Cultural Roadmap
        <span className="text-gray-500 ml-1 invisible sm:visible">
          — Paolo Missagia
        </span>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a href="https://github.com/paolomissagia">
          <FaGithub className="w-6 h-6" />
        </a>
      </span>
    </div>
  );
}
