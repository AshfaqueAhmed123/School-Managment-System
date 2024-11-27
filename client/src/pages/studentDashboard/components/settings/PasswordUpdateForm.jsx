import React, { useState } from 'react';

const UpdatePassword = () => {
  // State for the form inputs and errors
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Dummy data (in a real-world application, the current password would be verified through an API)
  const currentStoredPassword = 'student123'; // Simulating the current stored password

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setError('');
    setSuccess('');

    // Validate the fields
    if (!currentPassword || !newPassword || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (currentPassword !== currentStoredPassword) {
      setError('Current password is incorrect');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('New password and confirm password do not match');
      return;
    }

    if (newPassword.length < 6) {
      setError('New password should be at least 6 characters long');
      return;
    }

    // If everything is valid
    setSuccess('Password updated successfully!');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#2E2E48] rounded-lg shadow-lg">
      <h2 className="text-white text-3xl font-bold mb-6">Update Your Password</h2>

      {/* Error or Success Messages */}
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {success && <div className="text-green-500 mb-4">{success}</div>}

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* Current Password */}
          <div className="flex flex-col">
            <label className="text-white font-semibold mb-2" htmlFor="currentPassword">
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="p-3 border border-gray-600 rounded-lg bg-[#383854] text-white focus:outline-none focus:ring-2 focus:ring-[#475BE8]"
              required
            />
          </div>

          {/* New Password */}
          <div className="flex flex-col">
            <label className="text-white font-semibold mb-2" htmlFor="newPassword">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="p-3 border border-gray-600 rounded-lg bg-[#383854] text-white focus:outline-none focus:ring-2 focus:ring-[#475BE8]"
              required
            />
          </div>

          {/* Confirm New Password */}
          <div className="flex flex-col">
            <label className="text-white font-semibold mb-2" htmlFor="confirmPassword">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="p-3 border border-gray-600 rounded-lg bg-[#383854] text-white focus:outline-none focus:ring-2 focus:ring-[#475BE8]"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 bg-[#475BE8] text-white font-semibold rounded-lg focus:outline-none hover:bg-[#3a4ad0]"
            >
              Update Password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdatePassword;
