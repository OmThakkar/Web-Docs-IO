import React from "react";

const Background = () => {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        <div className="absoulte top-[5%] w-full py-10 flex justify-center font-semibold text-xl text-zinc-600">
          Documents
        </div>
        <h1 className="absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter text-zinc-900">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
