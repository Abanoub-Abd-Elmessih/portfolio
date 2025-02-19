import { PiHandWavingBold } from "react-icons/pi";
import styles from "./page.module.css";
import { TypingAnimation } from "@/components/TypingAnimation";
import {
  LuDownload,
  LuGithub,
  LuLinkedin,
  LuMail,
  LuMoveRight,
  LuMoveUpRight,
  LuPhone,
} from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const links = [
    {
      icon: <LuLinkedin />,
      link: "https://www.linkedin.com/in/abanoub-abd-elmessih/",
    },
    { icon: <LuGithub />, link: "https://github.com/Abanoub-Abd-Elmessih" },
    { icon: <LuMail />, link: "mailto:abanoubabdelmessih110@gmail.com" },
    { icon: <LuPhone />, link: "tel:+201559566765" },
  ];
  return (
    <section className="row py-3">
      <div className="col-lg-7 order-lg-2 ">
        <h2 className={`display-3 ${styles.heading}`}>
          Hello I&apos;m Abanoub <PiHandWavingBold />
        </h2>
        <div
          className={`d-flex align-items-center gap-3 ${styles.animation_warper}`}
        >
          <span className={styles.hr}></span> I&apos;m <TypingAnimation />
        </div>
        <p className="text-muted letter_spacing">
          I&apos;m Front End Developer based in Egypt, and I&apos;m very
          passionate and dedicated to my work
        </p>
        <div className="d-flex gap-3">
          <button className={`btn btn-dark ${styles.buttons}`}>
            <Link href={"/contact"}>
              Contact me <LuMoveUpRight />
            </Link>
          </button>
          <button className={`btn btn-dark ${styles.buttons}`}>
            <a href="">
              Download CV <LuDownload />
            </a>
          </button>
        </div>
      </div>
      <div className="mt-3 mt-lg-0 col-lg-1 d-flex flex-lg-column justify-content-between">
        <ul className="fs-3 d-flex flex-lg-column gap-3 p-0">
          {links.map((link) => (
            <li key={link.link}>
              <a
                href={link.link}
                className={styles.contact_links}
                target="_blank"
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
        <Link href={"/about"}>
          About <LuMoveRight />
        </Link>
      </div>
      <div className="col-lg-4 order-lg-3">
        <Image
          src={"/abanoub.jpg"}
          alt="my photo"
          width={500}
          height={500}
          className="rounded-5"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </div>
    </section>
  );
}
