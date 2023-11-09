import Logo from "../assets/images/logo.svg";
import iconMenu from "../assets/images/icon-hamburger.svg";
import iconClose from "../assets/images/icon-close.svg";
import { useState } from "react";
import { Button } from "react-aria-components";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick(): void {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="font-PublicSans bg-neutral-4 text-neutral-1 flex flex-row items-center justify-between p-8 text-lg font-normal">
      <a href="#" className="header-logo">
        <img src={Logo} alt="Logo" />
      </a>

      <Button
        className="btn-menu mobile"
        aria-controls="primary-navigation"
        aria-expanded="false"
        onPress={handleClick}
      >
        {isMenuOpen ? (
          <img
            className="icon-close"
            src={iconClose}
            alt="Close Menu"
            aria-hidden="false"
          />
        ) : (
          <img
            className="icon-hamburger"
            src={iconMenu}
            alt="Open Menu"
            aria-hidden="false"
          />
        )}
      </Button>
      <nav className={`hidden`} id="primary-navigation">
        <ul aria-label="Primary" role="list">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
          <Button>Request Invite</Button>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
