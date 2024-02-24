import React, { useRef } from "react";
import Card from "./Card";
import { motion } from "framer-motion";

const Foreground = () => {
  const ref = useRef(null);

  //   data = desc, fileSize, closeOrDownload, tagDetails

  const data = [
    {
      desc: "This is the demo file description",
      fileSize: "0.9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This is the demo file description",
      fileSize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    },
    {
      desc: "This is the demo file description",
      fileSize: "0.9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ];

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-screen flex gap-7 flex-wrap p-5">
      {data.map((item, index) => (
        <Card data={item} reference={ref}/>
      ))}
    </div>
  );
};

export default Foreground;
