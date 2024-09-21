import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/28486840/pexels-photo-28486840/free-photo-of-turkish-coffee-and-tea-on-traditional-tray.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
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
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
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
