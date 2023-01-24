import React from "react";
import Box from "../shared/box";
import Footer from "../shared/footer";

export default function Final() {
  return (
    <div className="min-h-screen sm:h-screen relative" id="final">
      <div className="container px-5 py-24 mx-auto flex flex-col items-center justify-center h-[80vh]">
        <div className="text-center mb-5 md:mb-10 mx-auto">
          <h1 className="sm:text-3xl text-2xl text-white mb-4">
            END OF THE ROAD
          </h1>
          <p className="text-base leading-relaxed mx-auto text-gray-400 text-opacity-80">
            Hope you enjoyed the guide. If you have any questions, feel free to
            contact me on github.
          </p>
          <div className="flex mt-6 md:mt-8 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
          </div>
        </div>
        <div className="flex flex-wrap m-4">
          <Box
            Title="SHARE"
            Description="Enjoyed the guide? Share with friends!"
            isShare
          />
          <Box
            Title="THANKS"
            Description="All the titles found on the generator were carefully selected by me and are between my favourites."
            isSave
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
