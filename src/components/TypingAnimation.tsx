"use client";
import { TypeAnimation } from "react-type-animation";

export const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Web Developer",
        2000,
        "Front End Developer",
        2000,
        "Freelancer",
        2000,
      ]}
      wrapper="span"
      speed={30}
      style={{ display: "inline-block" }}
      repeat={Infinity}
    />
  );
};
