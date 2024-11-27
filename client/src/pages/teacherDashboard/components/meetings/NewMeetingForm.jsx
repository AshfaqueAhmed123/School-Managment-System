import React, { useState } from 'react';

const CreateMeetingForm = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    instructor: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData); // Pass the form data to the parent onCreate function
    setFormData({
      title: '',
      description: '',
      date: '',
      time: '',
      instructor: '',
    }); // Clear the form after submission
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto bg-[#2E2E48] p-6 rounded-lg text-white">
      <h2 className="text-2xl font-semibold mb-4">Create New Meeting</h2>

      {/* Title Input */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium mb-2">
          Meeting Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded-md"
          placeholder="Enter meeting title"
          required
        />
      </div>

      {/* Description Input */}
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded-md"
          placeholder="Enter a brief description"
          rows="4"
          required
        />
      </div>

      {/* Date Input */}
      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-medium mb-2">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded-md"
          required
        />
      </div>

      {/* Time Input */}
      <div className="mb-4">
        <label htmlFor="time" className="block text-sm font-medium mb-2">
          Time
        </label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded-md"
          required
        />
      </div>

      {/* Instructor Input */}
      <div className="mb-4">
        <label htmlFor="instructor" className="block text-sm font-medium mb-2">
          Instructor Name
        </label>
        <input
          type="text"
          id="instructor"
          name="instructor"
          value={formData.instructor}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded-md"
          placeholder="Enter instructor's name"
          required
        />
      </div>

      {/* Submit Button */}
      <div className="mt-4">
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition duration-200"
        >
          Create Meeting
        </button>
      </div>
    </form>
  );
};

export default CreateMeetingForm;
