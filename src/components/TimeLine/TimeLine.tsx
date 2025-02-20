import { LuBriefcaseBusiness } from "react-icons/lu";
import styles from "./TimeLine.module.css";
export const TimeLine = () => {
  return (
    <section className="mt-4 ps-2">
      <ul className={styles["timeline-with-icons"]}>
        <li className={`mb-5 ${styles["timeline-item"]}`}>
          <span className={styles["timeline-icon"]}>
            <LuBriefcaseBusiness />
          </span>
          <h5 className="fw-bold">COPALEX</h5>
          <p className="my-1 text-muted fw-bold">Internship</p>
          <p className="text-muted mb-2 fw-bold">1 January 2025</p>
          <p className="text-muted">
            Gaining hands-on experience in front-end development by working on
            real-world projects, implementing UI/UX designs, and collaborating
            with a team to enhance web application performance using modern
            frameworks and best practices.{" "}
          </p>
        </li>
      </ul>
    </section>
  );
};
