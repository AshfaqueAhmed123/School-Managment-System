import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../../../assets/logo.png";
import {Link} from "react-scroll"

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={`" w-full text-white px-0 py-0 fixed top-0 left-0 flex items-center justify-between z-10 custom-container " ${
        sticky ? "dark-nav" : ""
      }`}
    >
      <img src={logo} className="w-[180px]" alt="ibaccdadu" />
      <ul>
        <li className="inline-block my-2 mx-10 text-[16px]">
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li className="inline-block my-2 mx-10 text-[16px]">
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li className="inline-block my-2 mx-10 text-[16px]">
          <Link to="about" smooth={true} offset={-250} duration={500}>
            About us
          </Link>
        </li>
        {/* <li className="inline-block my-2 mx-10 text-[16px]">
          <Link to="college" smooth={true} offset={0} duration={500}>
            College
          </Link>
        </li> */}
        <li className="inline-block my-2 mx-10 text-[16px]">
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
          Testimonials
          </Link>
        </li>
        <li className="inline-block my-2 mx-10 text-[16px]">
        <Link className='btn' to='contact' smooth={true} offset={-260} duration={500}>Contac Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
