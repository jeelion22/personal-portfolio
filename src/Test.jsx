import React, { useState } from "react";
import { motion } from "framer-motion";

const Test = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: 100,
      transition: { delay: i * 0.3 },
    }),
    hidden: {
      opacity: 0,
    },
  };

  const items = ["item1", "item2", "item3", "item4", "item5"];

  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item, index) => (
          <motion.li variants={variants} key={item} custom={index}>
            {item}
          </motion.li>
        ))}
      </motion.ul>

      {/* <motion.div
        className="box"
        variants={variants}
        initial="hidden"
        // animate="visible"
        transition={{ duration: 2 }}
        animate={open ? "visible" : "hidden"}
        // initial={{ opacity: 0.5, scale: 0.5 }}
        // transition={{ duration: 2 }}
        // whileInView={{ opacity: 1, scale: 2 }}
      ></motion.div>
      <button onClick={() => setOpen((prev) => !prev)}>Click</button> */}
    </div>
  );
};

export default Test;
