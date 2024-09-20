import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://www.pexels.com/photo/two-women-standing-in-front-of-a-shop-27757573/",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat tempora doloremque cum perferendis, iure omnis quidem quo sunt sapiente placeat, repudiandae neque dolorem molestiae ex iste libero pariatur ad mollitia!",
  },
  {
    id: 2,
    title: "Appointer",
    img: "https://images.pexels.com/photos/28472063/pexels-photo-28472063/free-photo-of-royal-gorge-aerial-tramway-over-rocky-cliffs.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat tempora doloremque cum perferendis, iure omnis quidem quo sunt sapiente placeat, repudiandae neque dolorem molestiae ex iste libero pariatur ad mollitia!",
  },
  {
    id: 3,
    title: "ReuniteME",
    img: "https://images.pexels.com/photos/28210198/pexels-photo-28210198/free-photo-of-a-mountain-range-with-clouds-and-mist-in-the-distance.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat tempora doloremque cum perferendis, iure omnis quidem quo sunt sapiente placeat, repudiandae neque dolorem molestiae ex iste libero pariatur ad mollitia!",
  },
  {
    id: 4,
    title: "Travel Planner",
    img: "https://images.pexels.com/photos/27849697/pexels-photo-27849697/free-photo-of-a-tall-building-with-a-lot-of-wires-and-lights.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat tempora doloremque cum perferendis, iure omnis quidem quo sunt sapiente placeat, repudiandae neque dolorem molestiae ex iste libero pariatur ad mollitia!",
  },
];

const Single = ({ item }) => {
  return <section>{item.title}</section>;
};

const Portfolio = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
