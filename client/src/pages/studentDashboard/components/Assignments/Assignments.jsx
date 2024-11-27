import React, { useState } from "react";

const Assignments = () => {
  // Dummy data for assignments
  const assignments = [
    {
      id: 1,
      title: "Math Assignment 1",
      description: "Complete the problems from chapter 2.",
      dueDate: "2024-12-05",
      status: "Pending", // Can be 'Pending' or 'Submitted'
    },
    {
      id: 2,
      title: "Science Project",
      description: "Create a model of the solar system.",
      dueDate: "2024-12-10",
      status: "Pending",
    },
    {
      id: 3,
      title: "History Essay",
      description: "Write an essay on World War II.",
      dueDate: "2024-12-15",
      status: "Pending",
    },
  ];

  // State to manage assignment submission
  const [submittedAssignments, setSubmittedAssignments] = useState({});

  const handleSubmit = (assignmentId, file) => {
    // Update the submission status for the assignment
    setSubmittedAssignments((prev) => ({
      ...prev,
      [assignmentId]: { status: "Submitted", file },
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#2E2E48] rounded-lg shadow-lg">
      <h2 className="text-white text-3xl font-bold mb-6">Your Assignments</h2>

      <div className="space-y-6">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="bg-[#383854] p-6 rounded-lg shadow-md"
          >
            <h3 className="text-white text-xl font-semibold">{assignment.title}</h3>
            <p className="text-white">{assignment.description}</p>
            <p className="text-white mb-4">Due Date: {assignment.dueDate}</p>

            {/* Submission Status */}
            <div className="mb-4">
              <span
                className={`inline-block px-3 py-1 rounded-lg text-sm font-semibold ${
                  submittedAssignments[assignment.id]?.status === "Submitted"
                    ? "bg-green-500 text-white"
                    : "bg-yellow-500 text-white"
                }`}
              >
                {submittedAssignments[assignment.id]?.status ||
                  assignment.status}
              </span>
            </div>

            {/* File Submission */}
            {submittedAssignments[assignment.id]?.status !== "Submitted" && (
              <div className="flex items-center">
                <input
                  type="file"
                  className="p-2 border rounded-lg text-white bg-[#2E2E48] border-gray-600"
                  id={`assignment-file-${assignment.id}`}
                  name="assignmentFile"
                />
                <button
                  onClick={() => {
                    const fileInput = document.getElementById(
                      `assignment-file-${assignment.id}`
                    );
                    const file = fileInput.files[0];
                    if (file) {
                      handleSubmit(assignment.id, file);
                    }
                  }}
                  className="ml-4 px-4 py-2 bg-[#475BE8] text-white rounded-lg"
                >
                  Submit Assignment
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
