import React from "react";

export default function Option({ Action, Icon, Title, Description }: any) {
  return (
    <button
      type="button"
      className="p-4 w-3/4 sm:w-[30%] mx-auto flex flex-col text-center items-center border-2 border-gray-700 rounded-lg focus:border-indigo-500"
      onClick={Action}
    >
      <div className="hidden sm:flex w-20 h-20 items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
        <Icon className="w-12 h-12" />
      </div>
      <div className="flex-grow">
        <h2 className="text-white text-lg font-medium mb-3">{Title}</h2>
        <p className="leading-relaxed text-base">{Description}</p>
      </div>
    </button>
  );
}
