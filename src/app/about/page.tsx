import { Heading, MotionP, TechStack, TimeLine } from "@/components";

export default function About() {
  return (
    <section className="container py-5 text-light_gray">
      <div>
        <Heading label="Introduction" title="About Me" />
        <MotionP
          className="tracking-wide mt-5"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 80,
          }}
        >
          Hi! I&apos;m a passionate <strong>Frontend Developer</strong> with a
          deep love for crafting seamless and engaging digital experiences. My
          expertise lies in building modern, high-performance web applications
          that are not only visually appealing but also highly functional and
          user-friendly.
          <br />
          <br />
          With a strong foundation in{" "}
          <strong>React.js, Next.js, and UI/UX best practices</strong>, I
          specialize in developing interactive, scalable, and accessible
          applications. My problem-solving mindset allows me to tackle complex
          development challenges with efficiency and creativity.
          <br />
          <br />
          I&apos;m always eager to explore new technologies and continuously
          improve my skill set to stay at the forefront of web development.
        </MotionP>
        <hr className="mt-3" />
        <Heading className="mt-5" title="Experience" label="My Journey" />
        <TimeLine />
        <hr className="mt-3" />
        <Heading
          className="my-5"
          title="Tech Stack"
          label="Tools I Work With"
        />
        <TechStack />
      </div>
    </section>
  );
}
