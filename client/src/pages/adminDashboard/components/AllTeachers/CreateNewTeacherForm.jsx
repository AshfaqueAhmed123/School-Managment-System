import React, { useState } from 'react';

const CreateTeacherForm = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    phone: '',
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
      name: '',
      subject: '',
      email: '',
      phone: '',
    }); // Clear the form after submission
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto bg-[#2E2E48] p-6 rounded-lg text-white">
      <h2 className="text-2xl font-semibold mb-4">Create New Teacher</h2>

      {/* Name Input */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Teacher Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded-md"
          placeholder="Enter teacher's name"
          required
        />
      </div>

      {/* Subject Input */}
      <div className="mb-4">
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded-md"
          placeholder="Enter subject taught"
          required
        />
      </div>

      {/* Email Input */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded-md"
          placeholder="Enter email address"
          required
        />
      </div>

      {/* Phone Input */}
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded-md"
          placeholder="Enter phone number"
          required
        />
      </div>

      {/* Submit Button */}
      <div className="mt-4">
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition duration-200"
        >
          Create Teacher
        </button>
      </div>
    </form>
  );
};

export default CreateTeacherForm;
