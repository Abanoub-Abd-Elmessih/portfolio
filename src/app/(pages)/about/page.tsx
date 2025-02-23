import { Header, SkillsComponent, TimeLine } from "@/components";

const About = () => {
  return (
    <section className="py-5">
      <Header label="Introduction" title="About Me" />
      <div>
        <p className="m-0 mt-4 text-muted letter_spacing">
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
        </p>
        <hr />
        <Header title="Experience" label="My Journey" />
        <TimeLine />
        <hr />
        <Header title="Tech Stack" label="Tools I Work With" />
        <SkillsComponent />
      </div>
    </section>
  );
};

export default About;
{
  /*
import { FaBriefcase, FaCode, FaGraduationCap } from "react-icons/fa6";

   <div className="row my-4">
<AboutCard
  icon={FaCode}
  title="Tech Stack"
  description="Proficient in HTML, CSS, JavaScript, TypeScript, React.js, and Next.js."
/>
<AboutCard
  icon={FaGraduationCap}
  title="Education"
  description="Bachelor’s Degree in Sociology from Alexandria University. Completed Frontend Development training at Route Academy."
/>
<AboutCard
  icon={FaBriefcase}
  title="Experience"
  description="Frontend Development Intern at COPALEX – collaborated with a team to develop web applications, optimized performance, and improved UI components for better user experience."
/>
<AboutCard
  icon={FaBriefcase}
  title="Services"
  description="I offer custom web development solutions, focusing on performance optimization, accessibility, and interactive user interfaces using React and modern frontend technologies."
/>
</div> */
}
