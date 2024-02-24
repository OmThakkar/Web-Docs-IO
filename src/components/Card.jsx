import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({reference, data}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }} className="relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden flex-shrink-0">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">
        {data.desc}
      </p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex items-center justify-between py-3 px-8 mb-3">
          <h5>{data.fileSize}</h5>
          <span className="h-7 w-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close? <IoClose size="0.7em" color="#fff"/> : <LuDownload size="0.7em" color="#fff"/>}
          </span>
        </div>
       {data.tag.isOpen && (<div className={`tag w-full ${data.tag.tagColor === "blue" ? "bg-blue-600": "bg-green-600"} py-4 flex items-center justify-center`}>
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
        </div>)}
      </div>
    </motion.div>
  );
};

export default Card;
