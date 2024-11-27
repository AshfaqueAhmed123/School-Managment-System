import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";


// Dummy user data
const initialUserData = {
  fullName: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 234 567 890",
  desc: "my description",
};

const SettingsPage = () => {
  const [userData, setUserData] = useState(initialUserData);
  const [isEditing, setIsEditing] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Handle form submission (Save)
  const handleSave = () => {
    setIsEditing(false);
    alert("Changes saved successfully!");
  };

  // Handle Cancel (Reset to original data)
  const handleCancel = () => {
    setUserData(initialUserData);
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#2E2E48] rounded-lg shadow-lg">
      <h2 className="text-white text-3xl font-bold mb-6">Settings</h2>

      <div className="bg-[#1E2532] p-6 rounded-lg">
        <div className="flex justify-center mb-6">
          {/* Profile Picture */}
                <CgProfile size={100} />
        </div>

        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="text-white font-semibold">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={userData.fullName}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full mt-2 p-2 bg-[#383854] text-white rounded-md focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="text-white font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full mt-2 p-2 bg-[#383854] text-white rounded-md focus:outline-none"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="text-white font-semibold">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full mt-2 p-2 bg-[#383854] text-white rounded-md focus:outline-none"
            />
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="text-white font-semibold">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={userData.desc}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full mt-2 p-2 bg-[#383854] text-white rounded-md focus:outline-none"
              rows="4"
            />
          </div>

          {/* Save/Cancel Buttons */}
          <div className="flex justify-end space-x-4 mt-6">
            {isEditing ? (
              <>
                <button
                  type="button"
                  onClick={handleSave}
                  className="px-6 py-2 bg-[#475BE8] text-white rounded hover:bg-[#383854]"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-6 py-2 bg-[#FF5733] text-white rounded hover:bg-[#383854]"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="px-6 py-2 bg-[#475BE8] text-white rounded hover:bg-[#383854]"
              >
                Edit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
