import React, { useState } from "react";

// Dummy current password (in a real-world scenario, this should be managed via authentication)
const currentPassword = "teacher123"; // For demo purposes

const Settings = () => {
  // State to manage form inputs and validation
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { currentPassword, newPassword, confirmPassword } = formData;

    // Validate current password
    if (currentPassword !== currentPassword) {
      setError("The current password is incorrect.");
      return;
    }

    // Check if new password matches confirm password
    if (newPassword !== confirmPassword) {
      setError("New password and confirmation do not match.");
      return;
    }

    // Simulate password reset success
    setSuccess("Your password has been reset successfully.");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#2E2E48] rounded-lg shadow-lg">
      <h2 className="text-white text-3xl font-bold mb-6">Settings</h2>
      <h3 className="text-white text-xl font-semibold mb-4">Reset Password</h3>

      <div className="bg-[#383854] p-6 rounded-md">
        {/* Error message */}
        {error && <div className="text-red-500 mb-4">{error}</div>}

        {/* Success message */}
        {success && <div className="text-green-500 mb-4">{success}</div>}

        {/* Reset Password Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="currentPassword" className="text-white font-semibold">
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleInputChange}
              className="w-full mt-2 p-3 bg-[#475BE8] text-white rounded-md focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="newPassword" className="text-white font-semibold">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              className="w-full mt-2 p-3 bg-[#475BE8] text-white rounded-md focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="text-white font-semibold">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full mt-2 p-3 bg-[#475BE8] text-white rounded-md focus:outline-none"
              required
            />
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-2 bg-[#475BE8] text-white rounded hover:bg-[#FF5733] transition-colors duration-300"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
