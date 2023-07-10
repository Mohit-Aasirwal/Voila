import React from "react";

const notFound = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 ">
      <h1 className="text-4xl font-bold ">Sorry...</h1>
      <h2 className="font-extralight animate-pulse">
        It looks like you&apos;ve lost
      </h2>
    </div>
  );
};

export default notFound;
