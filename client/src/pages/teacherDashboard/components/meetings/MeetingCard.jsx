import React from 'react';
import { FaPlay, FaTrash } from 'react-icons/fa';

const MeetingCard = ({ meeting }) => {
  return (
    <div className="h-[80%] mx-10 bg-[#2E2E48] border-4 border-[#2E2E48] text-white rounded-lg p-6 flex flex-col justify-between mb-10">
      <div>
        <h3 className="text-2xl font-semibold">{meeting.title}</h3>
        <p className="text-sm mt-2">{meeting.description}</p>
        <div className="mt-4">
          <p className="text-sm">Date: {meeting.date}</p>
          <p className="text-sm">Time: {meeting.time}</p>
          <p className="text-sm">student: {meeting.student}</p>
          <p className="text-sm">class: {meeting.class}</p>
          <p className="text-sm">parent: {meeting.parent}</p>
        </div>
      </div>

      <div className="mt-4 flex space-x-4 items-center justify-end">
        <button className="flex items-center px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200">
          <FaPlay className="mr-2" />
          Start
        </button>
        <button className="flex items-center px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200">
          <FaTrash className="mr-2" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default MeetingCard