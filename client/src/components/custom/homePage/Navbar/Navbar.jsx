import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import "./Navbar.css";
import logo from "../../../../assets/logo.png";
import {Link} from "react-scroll"
import menu_icon from "../../../../assets/menu-icon.png"

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu,setMobileMenu] = useState(false)
  const toogleMenu = () => {
    mobileMenu? setMobileMenu(false) : setMobileMenu(true)
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dashboardEndPoint,setDashboardEndPoint] = useState("")

  const sendRequestWithBeareerToken = () => {
    const studentToken = localStorage.getItem("studentToken");
    const teacherToken = localStorage.getItem("teacherToken");
    const parentToken = localStorage.getItem("parentToken");
    const adminToken = localStorage.getItem("adminToken");

    let token = null;
    let endpoint = '';

    if(studentToken){
      token = studentToken
      endpoint = '/student';
    }else if(teacherToken){
      token = teacherToken;
      endpoint = '/teacher';
    }else if (parentToken){
      token = parentToken;
      endpoint = '/parent'
    }else if (adminToken){
      token = adminToken;
      endpoint = "/admin"
    }else{
      console.log("No Valid Auth token found in localstorage.");
      return 
    }

    setDashboardEndPoint(endpoint);

    try {
      (async()=>{
        let res = await fetch(`http://localhost:4000/Auth${endpoint}`,{
          method : "GET",
          headers:{
            "Authorization":`Bearer ${token}`
          }
        });
        res = await res.json();
        if(res.success == true){
          setIsLoggedIn(true)
        }
      })()
    } catch (error) {
      console.log("some error sending Auth request :-- ",error);
      
    }

  }

  const redirectToDashboard = useNavigate()
  

  useEffect(() => {
      sendRequestWithBeareerToken()
  }, []);


  return (
    <nav
      className={`" w-full text-white px-0 py-3  fixed top-0 left-0 flex items-center justify-between z-10 custom-container " ${
        sticky ? "dark-nav" : ""
      }`}
    >
      <img src={logo} className="w-[180px]" alt="ibaccdadu" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu flex items-center"}>
        <li className="inline-block my-2 mx-6 text-[16px]">
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li className="inline-block my-2 mx-6 text-[16px]">
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li className="inline-block my-2 mx-6 text-[16px]">
          <Link to="about" smooth={true} offset={-250} duration={500}>
            About us
          </Link>
        </li>
        {/* <li className="inline-block my-2 mx-6 text-[16px]">
          <Link to="college" smooth={true} offset={0} duration={500}>
            College
          </Link>
        </li> */}
        <li className="inline-block my-2 mx-6 text-[16px]">
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
          Testimonials
          </Link>
        </li>
        <li className="inline-block my-2 mx-6 text-[16px]">
        <Link className='btn' to='contact' smooth={true} offset={-260} duration={500}>Contac Us</Link>
        </li>
        <li className={`${!isLoggedIn ? "btn inline-block my-2 mx-6 text-[16px]" : "hidden"}`}>
            sign in
        </li>
        <li className={"inline-block my-2 mx-6 text-[16px]"}>
        <Link className={`px-6 py-5 rounded-3xl bg-yellow-600 transition-all hover:bg-yellow-500 text-black ${isLoggedIn?"":"hidden"} `} to='' smooth={true} offset={-260} duration={500}
        onClick={()=>{
          redirectToDashboard(`${dashboardEndPoint}`)
        }}
        >Dashboard</Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toogleMenu} />
    </nav>
  );
};

export default Navbar;
