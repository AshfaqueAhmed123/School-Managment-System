import React, { useState } from "react";

// Dummy data for the students
const studentData = {
  "Class 1": [
    { name: "John Doe", parent: "Jane Doe", rollNo: "101" },
    { name: "Alice Smith", parent: "Bob Smith", rollNo: "102" }
  ],
  "Class 2": [
    { name: "Sam Wilson", parent: "Sally Wilson", rollNo: "201" },
    { name: "Emily Brown", parent: "Ethan Brown", rollNo: "202" }
  ],
  "Class 3": [
    { name: "Liam Johnson", parent: "Olivia Johnson", rollNo: "301" },
    { name: "Noah Taylor", parent: "Lana Taylor", rollNo: "302" }
  ],
  "Class 12": [
    { name: "Zara Ali", parent: "Ali Akbar", rollNo: "1201" },
    { name: "Rahul Mehta", parent: "Ravi Mehta", rollNo: "1202" }
  ]
};

function Accordion() {
  const [selectedClass, setSelectedClass] = useState(null);

  // Handle class tab click
  const handleTabClick = (className) => {
    setSelectedClass(selectedClass === className ? null : className);
  };

  // Handle "Create New Student" button click
  const handleCreateNewStudent = () => {
    console.log("Create new student button clicked!");
    // You can expand this function later to open a form for adding a student
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="space-y-4">
        {/* Button to create new student */}
        <div className="mb-4">
          <button
            onClick={handleCreateNewStudent}
            className="mb-10 float-right px-6 py-2 bg-[#475BE8] text-white rounded hover:bg-blue-600"
          >
            Create New Student
          </button>
        </div>

        {/* Tabs for classes */}
        {Object.keys(studentData).map((className) => (
          <div key={className} className="border-b">
            <button
              onClick={() => handleTabClick(className)}
              className={`w-full text-left py-2 px-4 focus:outline-none transition-colors duration-300 ${
                selectedClass === className
                  ? "bg-[#475BE8] text-white"
                  : "bg-[#383854] hover:bg-[#2E2E48] text-white"
              }`}
            >
              {className}
            </button>

            {/* Accordion for showing student data with transition animation */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out transform ${
                selectedClass === className
                  ? "opacity-100 max-h-screen"
                  : "opacity-0 max-h-0"
              }`}
            >
              {selectedClass === className && (
                <div className="p-4">
                  <table className="min-w-full bg-[#2E2E48] border border-[#383854]">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2 px-4 text-left text-white">Roll No</th>
                        <th className="py-2 px-4 text-left text-white">Name</th>
                        <th className="py-2 px-4 text-left text-white">Parent's Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {studentData[className].map((student) => (
                        <tr key={student.rollNo} className="border-b">
                          <td className="py-2 px-4 text-white">{student.rollNo}</td>
                          <td className="py-2 px-4 text-white">{student.name}</td>
                          <td className="py-2 px-4 text-white">{student.parent}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
