// src/components/FacultySection.jsx
import React from "react";
import { motion } from "framer-motion";  // To add smooth animations
import faculty1 from "@/./assets/1pic.png"
import faculty2 from "@/./assets/2pic.png"
import faculty3 from "@/./assets/3pic.png"
import faculty4 from "@/./assets/4.png"
import faculty5 from "@/./assets/5.png"
import faculty6 from "@/./assets/6.png"
import faculty7 from "@/./assets/7.png"



const facultyMembers = [
  {
    name: "Miss Asya",
    subject: "Mathematics",
    image: faculty1, // Add your images here
  },
  {
    name: "Prof. Imran Ali",
    subject: "Islamiyat",
    image: faculty2,
  },
  {
    name: "Dr. Sikandar sagar",
    subject: "sindhi",
    image: faculty3,
  },
  {
    name: "Prof, Farman Illahi",
    subject: "Pakistan-studies",
    image: faculty4,
  },
  {
    name: "Miss Ammeran",
    subject: "General",
    image: faculty5,
  },
  {
    name: "Miss, Zehra",
    subject: "Chemistry",
    image: faculty6,
  },
  {
    name: "Mr, Fida Hussain",
    subject: "English",
    image: faculty7,
  },
];

const FacultySection = () => {
  return (
    <div className="faculty py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Meet Our Faculty</h2>
        <p className="text-xl text-gray-500 mt-2">Our teachers are experts in their respective fields.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {facultyMembers.map((faculty, index) => (
          <motion.div
            key={index}
            className="w-64 p-4 bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <img
              src={faculty.image}
              alt={faculty.name}
              className="w-full h-48 object-contain rounded-t-xl"
            />
            <div className="text-center mt-4">
              <h3 className="text-2xl font-semibold text-gray-800">{faculty.name}</h3>
              <p className="text-lg text-gray-500">{faculty.subject}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FacultySection;
