"use client";
import { TypeAnimation } from "react-type-animation";

export const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Front End Developer",
        3000,
        "Web Developer",
        3000,
        "Freelancer",
        3000,
      ]}
      wrapper="span"
      speed={30}
      style={{ display: "inline-block" }}
      repeat={Infinity}
    />
  );
};
