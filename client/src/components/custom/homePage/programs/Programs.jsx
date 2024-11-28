// src/components/FacultySection.jsx
import React from "react";
import { motion } from "framer-motion";  // To add smooth animations
import faculty1 from "@/./assets/faculty1.png"

const facultyMembers = [
  {
    name: "Dr. John Doe",
    subject: "Mathematics",
    image: faculty1, // Add your images here
  },
  {
    name: "Prof. Jane Smith",
    subject: "Physics",
    image: faculty1,
  },
  {
    name: "Dr. Emily Johnson",
    subject: "Chemistry",
    image: faculty1,
  },
  {
    name: "Dr. Michael Lee",
    subject: "Computer Science",
    image: faculty1,
  },
  {
    name: "Dr. Michael Lee",
    subject: "Computer Science",
    image: faculty1,
  },
  {
    name: "Dr. Michael Lee",
    subject: "Computer Science",
    image: faculty1,
  },
  {
    name: "Dr. Michael Lee",
    subject: "Computer Science",
    image: faculty1,
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
              className="w-full h-48 object-cover rounded-t-xl"
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
