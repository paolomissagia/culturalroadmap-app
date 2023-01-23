import React from "react";

export default function Item({ isLast, Icon, Title, Author }: any) {
  return (
    <div className="flex relative pb-8">
      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
        <div
          className={
            isLast
              ? "w-1 bg-gray-800 pointer-events-none"
              : "h-full w-1 bg-gray-800 pointer-events-none"
          }
        />
      </div>
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
        <Icon />
      </div>
      <div className="flex-grow pl-4">
        <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
          {Title}
        </h2>
        <p className="leading-relaxed">{Author}</p>
      </div>
    </div>
  );
}
