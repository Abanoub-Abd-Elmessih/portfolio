import { IconType } from "react-icons";
import { BiLogoTypescript } from "react-icons/bi";
import { DiJqueryLogo } from "react-icons/di";
import { FaJsSquare, FaReact } from "react-icons/fa";
import { FaBootstrap, FaClipboardList, FaCss3, FaHtml5 } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineSdStorage } from "react-icons/md";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAxios, SiMui, SiReactquery, SiRedux } from "react-icons/si";
import { TbApi, TbBrandFramerMotion } from "react-icons/tb";

type Project = {
  id: number;
  image: string;
  title: string;
  description: string;
  tools: IconType[];
  liveDemo: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Linked Posts",
    description:
      "LinkedPosts is a modern social media app designed for seamless interaction. Users can post, comment, and explore linked posts in a responsive and engaging UI. The app includes authentication features, allowing users to sign up, log in, and manage their accounts securely. Additionally, users can change their password and update their profile picture for a personalized experience.",
    image:
      "https://res.cloudinary.com/dqtqgkpaa/image/upload/v12345678/LinkedPosts_ohwra3.png",
    liveDemo: "https://linked-posts-gilt.vercel.app/",
    tools: [
      FaReact,
      BiLogoTypescript,
      RiTailwindCssFill,
      SiMui,
      SiRedux,
      SiAxios,
    ],
  },
  {
    id: 2,
    title: "Fresh Cart",
    description:
      "Fresh Cart is a fully responsive e-commerce web application built with React , TypeScript and Tailwind CSS. It integrates multiple packages, uses React Router DOM for navigation, and connects to various API endpoints for a seamless shopping experience.",
    image:
      "https://res.cloudinary.com/dqtqgkpaa/image/upload/v12345678/freshCart_ttnwar.png",
    liveDemo: "https://fresh-cart-psi-two.vercel.app/",
    tools: [
      FaReact,
      BiLogoTypescript,
      RiTailwindCssFill,
      SiAxios,
      SiReactquery,
    ],
  },
  {
    id: 3,
    title: "Smooth Landing",
    description: "",
    image:
      "https://res.cloudinary.com/dqtqgkpaa/image/upload/v12345678/smooth-landing._suzhqc.png",
    liveDemo: "https://smooth-landing.vercel.app/",
    tools: [
      RiNextjsFill,
      BiLogoTypescript,
      RiTailwindCssFill,
      TbBrandFramerMotion,
    ],
  },
  {
    id: 4,
    title: "Anime Vault",
    description: "",
    image:
      "https://res.cloudinary.com/dqtqgkpaa/image/upload/v12345678/animeVault_okggpl.png",
    liveDemo: "https://anime-vault-beta-brown.vercel.app/",
    tools: [
      RiNextjsFill,
      BiLogoTypescript,
      RiTailwindCssFill,
      TbBrandFramerMotion,
    ],
  },
  {
    id: 5,
    title: "Whats direct",
    description:
      "Welcome to the Whats Direct project! This web application allows users to initiate WhatsApp chats with people without needing to save their numbers, saving time and enhancing convenience. It is designed for international use, making it accessible to users worldwide.",
    image:
      "https://res.cloudinary.com/dqtqgkpaa/image/upload/v12345678/whatsDirect_kbiq84.png",
    liveDemo: "https://whats-direct-alpha.vercel.app/",
    tools: [FaReact, BiLogoTypescript, RiTailwindCssFill],
  },
  {
    id: 6,
    title: "Trend Vibe",
    description:
      "Stay ahead of the curve with real-time trends and updates. Powered by modern web technologies for fast and responsive user experiences.",
    image:
      "https://res.cloudinary.com/dqtqgkpaa/image/upload/v12345678/trendVibe_ufg0x0.png",
    liveDemo: "https://trend-vibe.vercel.app/",
    tools: [FaReact, FaJsSquare, RiTailwindCssFill],
  },
  {
    id: 7,
    title: "Zip Link",
    description:
      "A simple and efficient link shortener built with React, TypeScript, and Bootstrap. Zip Link allows users to create shortened URLs quickly and easily, making it more convenient to share long links.",
    image:
      "https://res.cloudinary.com/dqtqgkpaa/image/upload/v12345678/zipLink_bfmywj.png",
    liveDemo: "https://zip-link-chi.vercel.app/",
    tools: [FaReact, BiLogoTypescript, FaBootstrap, SiAxios, FaClipboardList],
  },
  {
    id: 8,
    title: "Bakery",
    description:
      "Bakery is a visually appealing website designed using HTML and CSS. The project employs floating techniques and CSS banners to create an engaging and modern layout that highlights bakery offerings in a stylish manner.",
    image:
      "https://res.cloudinary.com/dqtqgkpaa/image/upload/v12345678/Bakery_pm2ecr.png",
    liveDemo: "https://abanoub-abd-elmessih.github.io/Bakery/",
    tools: [FaHtml5, FaCss3],
  },
  {
    id: 9,
    title: "Daniels Demo",
    description:
      "This project showcases a modern landing page that can be easily customized to suit various types of businesses, portfolios, or personal websites Built with HTML & CSS & Bootstrap.",
    image:
      "https://res.cloudinary.com/dqtqgkpaa/image/upload/v12345678/Daniels-Demo__g6ye7u.png",
    liveDemo: "https://abanoub-abd-elmessih.github.io/Daniels-Demo/",
    tools: [FaHtml5, FaCss3, FaBootstrap],
  },
  {
    id: 10,
    title: "Fokir Landing Page",
    description:
      "This project showcases a modern landing page that can be easily customized to suit various types of businesses, portfolios, or personal websites Built with HTML , CSS.",
    image:
      "https://res.cloudinary.com/dqtqgkpaa/image/upload/v12345678/Fokir_atrwsh.png",
    liveDemo: "https://abanoub-abd-elmessih.github.io/Fokir-LandingPage/",
    tools: [FaHtml5, FaCss3],
  },
  {
    id: 11,
    title: "Random Quotes generator",
    description: "",
    image:
      "https://res.cloudinary.com/dqtqgkpaa/image/upload/v12345678/QUOTES_usd1ls.png",
    liveDemo: "https://abanoub-abd-elmessih.github.io/Quotes-app/",
    tools: [FaHtml5, FaCss3, FaJsSquare],
  },
  {
    id: 12,
    title: "DevFolio",
    description:
      "This project showcases a modern landing page that can be easily customized to suit various types of businesses, portfolios, or personal websites Built with HTML & CSS & Bootstrap.",
    image:
      "https://res.cloudinary.com/dqtqgkpaa/image/upload/v12345678/DevFolio_r0f9ea.png",
    liveDemo: "https://abanoub-abd-elmessih.github.io/DevFolio/",
    tools: [FaHtml5, FaCss3, FaBootstrap],
  },
  {
    id: 13,
    title: "XO Game",
    description:
      "XO Game: An engaging and responsive Tic-Tac-Toe game built with HTML, Tailwind CSS, JavaScript, and jQuery. Play against a friend and enjoy the dynamic and intuitive interface! Try it out at.",
    image:
      "https://res.cloudinary.com/dqtqgkpaa/image/upload/v12345678/XO-Game_wsss5t.png",
    liveDemo: "https://abanoub-abd-elmessih.github.io/XO-Game/",
    tools: [FaHtml5, FaCss3, RiTailwindCssFill, FaJsSquare, DiJqueryLogo],
  },
  {
    id: 14,
    title: "Yummy",
    description:
      "Yummy is a recipe website utilizing APIs to provide a diverse collection of dishes. The platform features advanced categorization by type, origin, and ingredients, ensuring a seamless user experience. It includes a modern, responsive design with intuitive navigation and a contact section for user engagement.",
    image:
      "https://res.cloudinary.com/dqtqgkpaa/image/upload/v12345678/Yummy_jp7atg.png",
    liveDemo: "https://abanoub-abd-elmessih.github.io/Yummy/",
    tools: [FaHtml5, FaCss3, FaBootstrap, FaJsSquare, DiJqueryLogo, TbApi],
  },
  {
    id: 15,
    title: "Weather App",
    description:
      "Interactive Weather App built with HTML, CSS, JavaScript ,jQuery, Bootstrap and API . Features include real-time weather data display, responsive design, and intuitive user interface.",
    image:
      "https://res.cloudinary.com/dqtqgkpaa/image/upload/v12345678/Weather-App_ipfec9.png",
    liveDemo: "https://abanoub-abd-elmessih.github.io/Weather-App/",
    tools: [FaHtml5, FaCss3, FaBootstrap, FaJsSquare, DiJqueryLogo, TbApi],
  },
  {
    id: 16,
    title: "Smart Login System",
    description:
      "The Smart Login System is a modern authentication platform featuring a responsive and user-friendly interface for secure login and signup. Built with HTML, CSS, Bootstrap, jQuery, and JavaScript, it demonstrates best practices in front-end development and secure authentication.",
    image:
      "https://res.cloudinary.com/dqtqgkpaa/image/upload/v12345678/Smart-Login-System_ebalnn.png",
    liveDemo: "https://abanoub-abd-elmessih.github.io/Smart-Login-System/",
    tools: [
      FaHtml5,
      FaCss3,
      FaBootstrap,
      FaJsSquare,
      DiJqueryLogo,
      MdOutlineSdStorage,
    ],
  },
  {
    id: 17,
    title: "Egyptian Party",
    description:
      "An engaging and interactive website for the Egyptian Party, built using HTML, CSS, Bootstrap, and jQuery. This site features a responsive design, a side slider for navigation, a slider down section for featured content, and a contact section with clickable email , phone links , GitHub and LinkedIn.",
    image:
      "https://res.cloudinary.com/dqtqgkpaa/image/upload/v12345678/Egyption-Party_n1wrip.png",
    liveDemo: "https://abanoub-abd-elmessih.github.io/Egyption-Party/",
    tools: [FaHtml5, FaCss3, FaBootstrap, FaJsSquare, DiJqueryLogo],
  },
  {
    id: 18,
    title: "Bookmark Saver",
    description:
      "Bookmark app used to save your favorite Websites URL using JavaScript and you can Visit or Delete or update This url.",
    image:
      "https://res.cloudinary.com/dqtqgkpaa/image/upload/v12345678/Bookmark-App_z7r5o1.png",
    liveDemo: "https://abanoub-abd-elmessih.github.io/Egyption-Party/",
    tools: [FaHtml5, FaCss3, FaBootstrap, FaJsSquare, MdOutlineSdStorage],
  },
  {
    id: 19,
    title: "Portfolio",
    description: "",
    image:
      "https://res.cloudinary.com/dqtqgkpaa/image/upload/v12345678/portfolio_wbbcv2.png",
    liveDemo: "https://abanoub-dev-portfolio.vercel.app/",
    tools: [
      RiNextjsFill,
      BiLogoTypescript,
      RiTailwindCssFill,
      TbBrandFramerMotion,
      MdOutlineEmail,
    ],
  },
];
