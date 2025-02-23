import { PiHandWavingBold } from "react-icons/pi";
import styles from "./page.module.css";
import { TypingAnimation } from "@/components/TypingAnimation";
import { LuDownload, LuMoveRight, LuMoveUpRight } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";
import { ContactLinks } from "@/components";

export default function Home() {
  return (
    <section className="center-screen">
      <div className="row flex-row-reverse px-3 my-3">
        <div className="col-xl-4 text-center">
          <Image
            src={"/abanoub.jpg"}
            alt="my photo"
            width={350}
            height={350}
            className={styles.personal_image}
          />
        </div>
        <div className="my-3 mt-xl-0 col-xl-7 d-flex flex-column justify-content-center p-0">
          <h2 className={`display-3 ${styles.heading}`}>
            Hello I&apos;m Abanoub <PiHandWavingBold />
          </h2>
          <div
            className={`d-flex align-items-center gap-3 ${styles.animation_warper}`}
          >
            <span className={styles.hr}></span> I&apos;m <TypingAnimation />
          </div>
          <p className="text-muted letter_spacing">
            I&apos;m a Front-End Developer based in Egypt, with a strong passion
            for creating seamless and engaging user experiences.
          </p>
          <div className="d-flex gap-3">
            <button type="button" className="btn btn-dark" data-mdb-ripple-init>
              <Link href={"/contact"}>
                Contact me <LuMoveUpRight />
              </Link>
            </button>
            <button type="button" className="btn btn-dark" data-mdb-ripple-init>
              <a href="/abanoub_abdelmessihResume.pdf" download={true}>
                Download CV <LuDownload />
              </a>
            </button>
          </div>
        </div>
        <div className="col-xl-1 d-flex flex-xl-column align-items-center align-items-lg-start justify-content-between p-0">
          <ContactLinks />
          <Link href={"/about"} className="">
            About <LuMoveRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
