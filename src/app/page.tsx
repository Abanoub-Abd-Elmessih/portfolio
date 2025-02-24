import { Button, Divider, MyLinks, TypingAnimation } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { LuDownload, LuMoveRight, LuMoveUpRight } from "react-icons/lu";
import { PiHandWavingBold } from "react-icons/pi";

export default function Home() {
  return (
    <section className="container py-10 flex-grow flex flex-col xl:flex-row-reverse xl:items-center xl:justify-around gap-7 text-light_gray">
      {/* Image Section */}
      <div className="center-screen">
        <Image
          src={"/abanoub.jpg"}
          alt="my photo"
          width={350}
          height={350}
          className="rounded-full aspect-square object-cover object-top border-black border-2 grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
      {/* Main Section */}
      <div className="flex flex-col gap-4">
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
          <Button>
            <Link href={"/contact"}>
              Contact Me
              <LuMoveUpRight className="inline-block" color="white" />
            </Link>
          </Button>
          <Button>
            <a href="/abanoub_abdelmessihResume.pdf" download={true}>
              Download CV <LuDownload className="inline-block" color="white" />
            </a>
          </Button>
        </div>
      </div>
      {/* Links Section */}
      <div className="flex justify-between xl:flex-col gap-10">
        <MyLinks />
        <Link
          href={"/about"}
          className="text-lg flex items-center gap-1 self-end"
        >
          About <LuMoveRight />
        </Link>
      </div>
    </section>
  );
}
