import React, { useState } from "react";

// Dummy assignment data
const initialAssignments = [
  { id: 1, title: "Math Assignment 1", dueDate: "2024-12-01", status: "Pending" },
  { id: 2, title: "Science Assignment 2", dueDate: "2024-12-05", status: "Completed" },
  { id: 3, title: "History Assignment 3", dueDate: "2024-12-10", status: "Pending" },
];

const Assignments = () => {
  const [assignments, setAssignments] = useState(initialAssignments);
  const [newAssignment, setNewAssignment] = useState({ title: "", dueDate: "" });

  // Handle the input change for the new assignment form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAssignment({
      ...newAssignment,
      [name]: value,
    });
  };

  // Handle the form submission to add a new assignment
  const handleAddAssignment = (e) => {
    e.preventDefault();
    if (newAssignment.title && newAssignment.dueDate) {
      const newAssignmentObj = {
        id: assignments.length + 1,
        title: newAssignment.title,
        dueDate: newAssignment.dueDate,
        status: "Pending",
      };
      setAssignments([...assignments, newAssignmentObj]);
      setNewAssignment({ title: "", dueDate: "" }); // Reset form fields
    } else {
      alert("Please fill in all fields!");
    }
  };

  // Mark assignment as completed
  const handleMarkAsCompleted = (id) => {
    setAssignments(
      assignments.map((assignment) =>
        assignment.id === id
          ? { ...assignment, status: assignment.status === "Pending" ? "Completed" : "Pending" }
          : assignment
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#2E2E48] rounded-lg shadow-lg">
      <h2 className="text-white text-3xl font-bold mb-6">Assignments</h2>

      {/* Add Assignment Form */}
      <div className="bg-[#383854] p-6 rounded-md mb-6">
        <h3 className="text-xl text-white font-semibold mb-4">Add New Assignment</h3>
        <form onSubmit={handleAddAssignment} className="space-y-4">
          <div>
            <label htmlFor="title" className="text-white font-semibold">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newAssignment.title}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 bg-[#475BE8] text-white rounded-md focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="dueDate" className="text-white font-semibold">Due Date</label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={newAssignment.dueDate}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 bg-[#475BE8] text-white rounded-md focus:outline-none"
              required
            />
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-2 bg-[#475BE8] text-white rounded hover:bg-[#FF5733] transition-colors duration-300"
            >
              Add Assignment
            </button>
          </div>
        </form>
      </div>

      {/* Assignment List */}
      <div className="bg-[#383854] p-6 rounded-md">
        <h3 className="text-xl text-white font-semibold mb-4">Assignments List</h3>
        <table className="w-full table-auto text-white">
          <thead>
            <tr className="border-b border-[#475BE8]">
              <th className="p-2 text-left">Assignment Title</th>
              <th className="p-2 text-left">Due Date</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment) => (
              <tr key={assignment.id} className="border-b border-[#475BE8]">
                <td className="p-2">{assignment.title}</td>
                <td className="p-2">{assignment.dueDate}</td>
                <td className="p-2">{assignment.status}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleMarkAsCompleted(assignment.id)}
                    className="px-4 py-2 bg-[#475BE8] text-white rounded hover:bg-[#FF5733] transition-colors duration-300"
                  >
                    {assignment.status === "Pending" ? "Mark as Completed" : "Undo"}
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

export default Assignments;
