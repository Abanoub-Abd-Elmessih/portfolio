import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const links = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/projects", name: "Projects" },
    { path: "/contact", name: "Contact" },
  ];
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand text-uppercase" href="/">
          Abanoub
        </Link>
        <button
          className={styles.navbarToggler}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBarsStaggered />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className={`navbar-nav ms-auto gap-2 gap-lg-4 ${styles.navbarList}`}
          >
            {links.map((link) => (
              <li key={link.path} className="nav-item">
                <Link className="nav-link" href={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
