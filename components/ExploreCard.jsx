"use client";

import { motion } from "framer-motion";

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative`}
  >
    <img src={imgUrl} alt="planet-04" className="w-full h-full object-cover" />
    console.log(world)
    {active !== id ? (
      <h3 className="font-semibold ">{title}</h3>
    ) : (
      <div>
        <div></div>
        <p>Enter Metaverse</p>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
