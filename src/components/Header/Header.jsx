import { useEffect, useRef } from "react";
import "./style.css";
import ContainerLayout from "../Layout/ContainerLayout";
import PropTypes from "prop-types";

const Header = (props) => {
  const headerRef = useRef(null);

  useEffect(() => {
    const headerBgFunc = () => {
      if (window.scrollY > 0) {
        headerRef.current.classList.add("bg-reveal");
      } else {
        headerRef.current.classList.remove("bg-reveal");
      }
    };
    document.addEventListener("scroll", headerBgFunc);

    return () => {
      document.removeEventListener("scroll", headerBgFunc);
    };
  }, []);

  useEffect(() => {
    const navToggler = document.querySelector(".js-nav-toggler");
    const nav = document.querySelector(".js-nav");
    const navItems = nav.querySelectorAll("li");

    const navToggle = () => {
      nav.classList.toggle("open");
      navToggler.classList.toggle("active");
    };

    const closeNavOnClick = () => {
      if (window.innerWidth <= 767) {
        navToggle();
      }
    };

    navToggler.addEventListener("click", navToggle);

    navItems.forEach((li) => {
      li.querySelector("a").addEventListener("click", closeNavOnClick);
    });
    return () => {
      navToggler.removeEventListener("click", navToggle);
      navItems.forEach((li) => {
        li.querySelector("a").removeEventListener("click", () => {
          if (window.innerWidth <= 767) {
            navToggle();
          }
        });
      });
    };
  }, []);

  return (
    <div className={`header ${props.darkMode ? "dark" : ""}`} ref={headerRef}>
      <ContainerLayout
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="logo">
          <p className="logo-image"></p>
        </div>
        <button
          className="nav-toggler js-nav-toggler"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <span></span>
        </button>
        <nav className="nav js-nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">services</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </nav>
      </ContainerLayout>
    </div>
  );
};

Header.propTypes = {
  darkMode: PropTypes.bool,
  toggleDarkMode: PropTypes.func,
};

export default Header;
