import React, { useState } from 'react';

let color = [
    "#2E2E48",
    "#383854",
    "#475BE8"
]

const TeacherTable = () => {
  // Dummy teacher data
  const [teachers, setTeachers] = useState([
    { name: 'John Doe', subject: 'Math', class: '10th' },
    { name: 'Jane Smith', subject: 'English', class: '12th' },
    { name: 'Emma Brown', subject: 'Science', class: '9th' },
    { name: 'Michael Johnson', subject: 'History', class: '11th' },
    { name: 'Olivia Davis', subject: 'Geography', class: '10th' }
  ]);

  // Function to handle the deletion of a teacher
  const deleteTeacher = (index) => {
    const updatedTeachers = teachers.filter((_, i) => i !== index);
    setTeachers(updatedTeachers);
  };

  return (
    <div className="p-6">
      {/* Create Teacher Button */}
      <div className="flex justify-end mb-4">
        <button className="px-4 py-2 bg-[#475BE8] text-white rounded-lg hover:bg-blue-600 focus:outline-none">
          Create Teacher
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-[#2E2E48] p-6 rounded-lg shadow-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-[#2E2E48] text-white">
            <tr className='border-2 border-white p-2'>
              <th className="px-6 py-3 text-left text-xl font-medium">Teacher Name</th>
              <th className="px-6 py-3 text-left text-xl font-medium">Teacher Subject</th>
              <th className="px-6 py-3 text-left text-xl font-medium">Teacher Class</th>
              <th className="px-6 py-3 text-left text-xl font-medium">Actions</th> {/* New Column for Delete */}
            </tr>
          </thead>
          <tbody className="bg-[#2E2E48] text-white">
            {teachers.map((teacher, index) => (
              <tr key={index} className="hover:bg-[#383854]">
                <td className="px-6 py-4 text-sm font-medium">{teacher.name}</td>
                <td className="px-6 py-4 text-sm">{teacher.subject}</td>
                <td className="px-6 py-4 text-sm">{teacher.class}</td>
                <td className="px-6 py-4 text-sm text-center">
                  {/* Delete Button */}
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
                    onClick={() => deleteTeacher(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherTable;
