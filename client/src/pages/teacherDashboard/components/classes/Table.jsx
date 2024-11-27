import React, { useState } from "react";

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const timetable = {
  Monday: [
    { period: "Period 1", className: "Class 1" },
    { period: "Period 2", className: "Class 2" },
    { period: "Period 3", className: "Class 3" },
  ],
  Tuesday: [
    { period: "Period 1", className: "Class 1" },
    { period: "Period 2", className: "Class 2" },
    { period: "Period 3", className: "Class 3" },
  ],
  Wednesday: [
    { period: "Period 1", className: "Class 1" },
    { period: "Period 2", className: "Class 2" },
    { period: "Period 3", className: "Class 3" },
  ],
  Thursday: [
    { period: "Period 1", className: "Class 1" },
    { period: "Period 2", className: "Class 2" },
    { period: "Period 3", className: "Class 3" },
  ],
  Friday: [
    { period: "Period 1", className: "Class 1" },
    { period: "Period 2", className: "Class 2" },
    { period: "Period 3", className: "Class 3" },
  ],
};

const TimetableAccordion = () => {
  const [expandedDay, setExpandedDay] = useState(null);

  const handleDayClick = (day) => {
    // Toggle the accordion section for the clicked day
    setExpandedDay(expandedDay === day ? null : day);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#2E2E48] rounded-lg shadow-lg">
      <h2 className="text-white text-3xl font-bold mb-6">Weekly Timetable</h2>

      <div className="space-y-4">
        {/* Accordion for each day */}
        {daysOfWeek.map((day) => (
          <div key={day} className="border-b border-[#475BE8]">
            <button
              onClick={() => handleDayClick(day)}
              className="w-full text-left py-3 px-4 bg-[#383854] text-white rounded-md hover:bg-[#475BE8] focus:outline-none"
            >
              <span className="font-semibold">{day}</span>
            </button>

            {/* Show timetable if the day is expanded */}
            {expandedDay === day && (
              <div className="mt-4 bg-[#383854] p-4 rounded-md">
                <table className="w-full table-auto text-white">
                  <thead>
                    <tr>
                      <th className="p-2 text-left">Period</th>
                      <th className="p-2 text-left">Class</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timetable[day].map((entry, index) => (
                      <tr key={index} className="border-b border-[#475BE8]">
                        <td className="p-2">{entry.period}</td>
                        <td className="p-2">{entry.className}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimetableAccordion;
