import { LuGithub, LuLinkedin, LuMail, LuPhone } from "react-icons/lu";
export const links = [
  {
    icon: <LuLinkedin />,
    link: "https://www.linkedin.com/in/abanoub-abd-elmessih/",
    name: "Abanoub Abdelmessih",
  },
  {
    icon: <LuGithub />,
    link: "https://github.com/Abanoub-Abd-Elmessih",
    name: "Abanoub Abdelmessih",
  },
  {
    icon: <LuMail />,
    link: "mailto:abanoubabdelmessih110@gmail.com",
    name: "abanoubabdelmessih110@gmail.com",
  },
  { icon: <LuPhone />, link: "tel:+201559566765", name: "+20 1559566765" },
];

export const MyLinks = () => {
  return (
    <ul className="flex xl:flex-col gap-3 xl:gap-6 text-2xl">
      {links.map((link) => (
        <li className="hover:rotate-90 duration-300 w-fit" key={link.link}>
          <a href={link.link} target="_blank">
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};
