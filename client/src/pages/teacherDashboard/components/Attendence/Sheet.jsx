import React, { useState } from "react";

// Dummy student data
const students = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Mary Johnson" },
  { id: 4, name: "James Brown" },
  { id: 5, name: "Patricia White" },
  { id: 6, name: "Robert Black" },
];

const TeacherAttendance = () => {
  // Attendance state to track each student's attendance (true = present, false = absent)
  const [attendance, setAttendance] = useState(
    students.reduce((acc, student) => {
      acc[student.id] = false; // Default to absent
      return acc;
    }, {})
  );

  // Handle checkbox change (toggle attendance)
  const handleAttendanceChange = (studentId) => {
    setAttendance({
      ...attendance,
      [studentId]: !attendance[studentId], // Toggle attendance state
    });
  };

  // Submit attendance
  const handleSubmit = () => {
    alert("Attendance submitted successfully!");
    // Here you can send the attendance data to an API or database
    console.log("Attendance Data:", attendance);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#2E2E48] rounded-lg shadow-lg">
      <h2 className="text-white text-3xl font-bold mb-6">Teacher Attendance</h2>

      {/* Class Info */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white">Class: Class 10-A</h3>
      </div>

      {/* Attendance Table */}
      <div className="bg-[#383854] p-4 rounded-md">
        <table className="w-full text-white">
          <thead>
            <tr className="border-b border-[#475BE8]">
              <th className="p-2 text-left">Student Name</th>
              <th className="p-2 text-left">Present</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b border-[#475BE8]">
                <td className="p-2">{student.name}</td>
                <td className="p-2">
                  <input
                    type="checkbox"
                    checked={attendance[student.id]}
                    onChange={() => handleAttendanceChange(student.id)}
                    className="h-5 w-5 rounded border-[#475BE8] focus:ring-[#475BE8] text-[#475BE8]"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Submit Attendance Button */}
      <div className="mt-6 text-right">
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-[#475BE8] text-white rounded hover:bg-[#FF5733] transition-colors duration-300"
        >
          Submit Attendance
        </button>
      </div>
    </div>
  );
};

export default TeacherAttendance;
