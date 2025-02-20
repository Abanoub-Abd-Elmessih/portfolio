"use client";
import { motion, Variants } from "framer-motion";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import styles from "./SkillsComponent.module.css";
import {
  SiPostman,
  SiReactquery,
  SiRedux,
  SiStyledcomponents,
} from "react-icons/si";
import {
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaReact,
} from "react-icons/fa6";
import { TbBrandFramerMotion } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { FaJsSquare } from "react-icons/fa";

const tools = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3 />, name: "CSS" },
  { icon: <FaJsSquare />, name: "Java Script" },
  { icon: <BiLogoTypescript />, name: "Type Script" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
  { icon: <FaReact />, name: "React" },
  { icon: <RiNextjsFill />, name: "Next" },
  { icon: <TbBrandFramerMotion />, name: "Framer Motion" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <SiReactquery />, name: "React Query" },
  { icon: <SiPostman />, name: "Post Man" },
  { icon: <FaFigma />, name: "Figma" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <SiStyledcomponents />, name: "Styled Component" },
];

export const SkillsComponent = () => {
  const iconVariants = (delay: number): Variants => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: 1,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
        delay: delay,
      },
    },
  });
  return (
    <div className="d-flex flex-wrap justify-content-center mt-4 gap-4">
      {tools.map((tool, index) => (
        <motion.div
          key={index}
          variants={iconVariants(index * 0.3)}
          initial="initial"
          animate="animate"
          className={styles.icons}
        >
          {tool.icon}
          <span className={styles.icon_name}>{tool.name}</span>
        </motion.div>
      ))}
    </div>
  );
};
