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
export const ContactLinks = () => {
  return (
    <ul className="fs-3 d-flex flex-xl-column gap-3 p-0">
      {links.map((link) => (
        <li key={link.link} className="list_link">
          <a href={link.link} className="contact_links" target="_blank">
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};
