import React from "react";
import { PiStudentFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { RiParentFill } from "react-icons/ri";

import { Link } from "react-router-dom";

const Options = () => {
  return (
    <div className="min-h-screen bg-[#383854] flex flex-col items-center justify-center">
      {/* create account btn  */}
      <Link to="/register" className="absolute top-2 right-2" style={{zIndex:"1000"}}>
        <button className="relative px-8 py-3 font-semibold text-white bg-gradient-to-r from-blue-500 to-green-500 rounded-full shadow-lg overflow-hidden group">
          <span className="absolute inset-0 bg-white opacity-10 transform scale-x-0 group-hover:scale-x-100 group-hover:opacity-30 transition duration-300 origin-right group-hover:origin-left"></span>
          <span className="relative z-10 group-hover:text-black transition duration-300 text-2xl">
            create account
          </span>
        </button>
      </Link>

      <h1 className="mt-[-60px] mb-[30px] text-2xl text-white capitalize">
        sign in as : (choose role){" "}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 p-4">
        <Link to="/login/student">
          <div className="bg-[#2E2E48]  flex flex-col items-center justify-center hover:cursor-pointer text-white shadow-lg rounded-lg py-6 px-10 transform transition-all hover:scale-105 hover:shadow-2xl">
            <PiStudentFill size={100} />
            <h3 className="text-2xl font-semibold mb-4">student</h3>
          </div>
        </Link>
        <Link to="/login/teacher">
          <div className="bg-[#2E2E48] hover:cursor-pointer text-white shadow-lg rounded-lg py-6 px-10 transform transition-all hover:scale-105 hover:shadow-2xl">
            <FaChalkboardTeacher size={100} />
            <h3 className="text-2xl font-semibold mb-4">teacher</h3>
          </div>
        </Link>
        <Link to="/login/parent">
          <div className="bg-[#2E2E48] hover:cursor-pointer text-white shadow-lg rounded-lg py-6 px-10 transform transition-all hover:scale-105 hover:shadow-2xl">
            <RiParentFill size={100} />
            <h3 className="text-2xl font-semibold mb-4">parent</h3>
          </div>
        </Link>
        <Link to="/login/admin">
          <div className="bg-[#2E2E48] hover:cursor-pointer text-white shadow-lg rounded-lg py-6 px-10 transform transition-all hover:scale-105 hover:shadow-2xl">
            <RiAdminLine size={100} />
            <h3 className="text-2xl font-semibold mb-4">Admin</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Options;
