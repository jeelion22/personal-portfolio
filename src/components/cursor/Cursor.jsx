import { motion } from "framer-motion";
import "./cursor.scss";
import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.applydiv
      className="cursor"
      animate={{ x: position.x + 10, y: position.y + 10 }}
    ></motion.applydiv>
  );
};

export default Cursor;
