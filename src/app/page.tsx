import { Divider, MotionDiv, MyLinks, TypingAnimation } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { LuDownload, LuMoveRight, LuMoveUpRight } from "react-icons/lu";
import { PiHandWavingBold } from "react-icons/pi";

export default function Home() {
  return (
    <section className="container py-10 flex-grow flex flex-col xl:flex-row-reverse xl:items-center xl:justify-around gap-7 text-light_gray overflow-hidden">
      {/* Image Section */}
      <MotionDiv
        className="center-screen motion-div"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 80,
        }}
      >
        <Image
          src={"/abanoub.jpg"}
          alt="my photo"
          width={350}
          height={350}
          className="w-full rounded-full aspect-square object-cover object-top border-black border-2 grayscale hover:grayscale-0 transition-all duration-500"
        />
      </MotionDiv>
      {/* Main Section */}
      <MotionDiv
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 80,
          delay: 0.2,
        }}
        className="flex flex-col gap-4 motion-div"
      >
        <h3 className="text-4xl lg:text-6xl font-medium tracking-wide">
          Hello I&apos;m Abanoub
          <PiHandWavingBold className="inline-block ms-2" />
        </h3>
        {/* Animation */}
        <div className="flex items-center gap-3">
          <Divider />
          <p className="text-xl lg:text-3xl tracking-wide">
            I&apos;m <TypingAnimation />
          </p>
        </div>
        {/* main paragraph */}
        <p className="text-gray-500 lg:max-w-3xl">
          I&apos;m a Front-End Developer based in Egypt, with a strong passion
          for creating seamless and engaging user experiences.
        </p>
        {/* Buttons */}
        <div className="flex gap-3">
          <Link
            href={"/contact"}
            className="bg-black text-white text-sm px-7 py-2 rounded-md hover:bg-black/90 duration-300"
          >
            Contact Me
            <LuMoveUpRight className="inline-block" color="white" />
          </Link>
          <a
            href="/abanoub_abdelmessihResume.pdf"
            download={true}
            className="bg-black text-white text-sm px-7 py-2 rounded-md hover:bg-black/90 duration-300"
          >
            Download CV <LuDownload className="inline-block" color="white" />
          </a>
        </div>
      </MotionDiv>
      {/* Links Section */}
      <MotionDiv
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 80,
          delay: 0.4,
        }}
        className="flex justify-between xl:flex-col gap-10 motion-div"
      >
        <MyLinks />
        <Link
          href={"/about"}
          className="text-lg flex items-center gap-1 self-end"
        >
          About <LuMoveRight />
        </Link>
      </MotionDiv>
    </section>
  );
}
