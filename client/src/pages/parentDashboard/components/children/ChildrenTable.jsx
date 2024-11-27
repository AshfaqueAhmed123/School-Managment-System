import React, { useState } from 'react';

const ChildPerformanceStatus = () => {
  // Dummy data for multiple children
  const childrenData = [
    {
      name: 'Ali Khan',
      attendance: [95, 90, 92, 88, 97, 93, 89],
      grades: { Math: 85, Science: 92, English: 78, History: 80 },
      assignments: {
        totalAssignments: 5,
        submittedAssignments: 3,
        pendingAssignments: 2,
      },
    },
    {
      name: 'Sara Ahmed',
      attendance: [98, 94, 95, 97, 96, 99, 97],
      grades: { Math: 91, Science: 89, English: 85, History: 88 },
      assignments: {
        totalAssignments: 4,
        submittedAssignments: 4,
        pendingAssignments: 0,
      },
    },
    {
      name: 'Omar Iqbal',
      attendance: [85, 80, 87, 83, 88, 84, 90],
      grades: { Math: 79, Science: 82, English: 70, History: 75 },
      assignments: {
        totalAssignments: 6,
        submittedAssignments: 2,
        pendingAssignments: 4,
      },
    },
  ];

  // State to manage which child’s performance is visible
  const [selectedChild, setSelectedChild] = useState(null);

  // Handle the toggle of the accordion
  const toggleChildInfo = (childIndex) => {
    setSelectedChild(selectedChild === childIndex ? null : childIndex);
  };

  return (
    <div className="bg-[#383854] p-8 space-y-8">
      <div className="text-center text-white">
        <h2 className="text-3xl font-semibold mb-4">Child Performance Status</h2>
        <p className="text-xl">Click on a child's name to view their details</p>
      </div>

      {/* Accordion for children */}
      <div className="space-y-4">
        {childrenData.map((child, index) => (
          <div key={index} className="bg-[#2E2E48] text-white rounded-lg shadow-lg p-6">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleChildInfo(index)}
            >
              <h3 className="text-2xl font-semibold">{child.name}</h3>
              <span className="text-xl">{selectedChild === index ? '-' : '+'}</span>
            </div>

            {/* Accordion content */}
            {selectedChild === index && (
              <div className="mt-4 space-y-6">
                {/* Attendance Summary */}
                <div>
                  <h4 className="text-xl font-semibold mb-2">Weekly Attendance</h4>
                  <ul className="space-y-2">
                    {child.attendance.map((attendance, i) => (
                      <li key={i} className="text-lg">
                        <span className="font-bold">Day {i + 1}: </span>{attendance}%
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Grades Summary */}
                <div>
                  <h4 className="text-xl font-semibold mb-2">Grades Overview</h4>
                  <ul className="space-y-2">
                    {Object.entries(child.grades).map(([subject, grade]) => (
                      <li key={subject} className="text-lg">
                        <span className="font-bold">{subject}: </span>{grade}%
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Assignments Status */}
                <div>
                  <h4 className="text-xl font-semibold mb-2">Assignments Status</h4>
                  <p className="text-lg">Total Assignments: {child.assignments.totalAssignments}</p>
                  <p className="text-lg">Submitted Assignments: {child.assignments.submittedAssignments}</p>
                  <p className="text-lg font-bold text-[#475BE8]">
                    Pending Assignments: {child.assignments.pendingAssignments}
                  </p>

                  {/* Progress Bar for Assignments */}
                  <div className="w-full bg-gray-400 h-2 rounded-full mb-4">
                    <div
                      className="bg-[#475BE8] h-full rounded-full"
                      style={{
                        width: `${
                          (child.assignments.submittedAssignments /
                            child.assignments.totalAssignments) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-center text-white">
                    {((child.assignments.submittedAssignments / child.assignments.totalAssignments) * 100).toFixed(
                      2
                    )}
                    % Submitted
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChildPerformanceStatus;
