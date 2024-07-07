import React, { useState } from "react";
import Modal from "./Modal";
import axios from "axios";
import { ClipLoader } from "react-spinners";
function ReferModal({ isOpen, onClose }) {
  const [referrerName, setReferrerName] = useState("");
  const [referrerEmail, setReferrerEmail] = useState("");
  const [refereeName, setRefereeName] = useState("");
  const [refereeEmail, setRefereeEmail] = useState("");
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = useState({});

  // Helper function to validate email
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Helper function to validate name (simple length check)
  const isValidName = (name) => {
    return name.trim().length > 1; // Name should be more than 1 character
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    const newErrors = {};
    if (!isValidName(referrerName)) {
      newErrors.referrerName =
        "Please enter a valid name (at least 2 characters).";
    }
    if (!isValidEmail(referrerEmail)) {
      newErrors.referrerEmail = "Please enter a valid email address.";
    }
    if (!isValidName(refereeName)) {
      newErrors.refereeName =
        "Please enter a valid name (at least 2 characters).";
    }
    if (!isValidEmail(refereeEmail)) {
      newErrors.refereeEmail = "Please enter a valid email address.";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    onClose();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://accredian-backend-task-eqpd.onrender.com/api/referrals/submit",
        {
          referrerName,
          referrerEmail,
          refereeName,
          refereeEmail,
        }
      );
      // console.log("Referral submitted successfully:", response.data);
      setLoading(false);
      alert("Referral submitted successfully!");
    } catch (error) {
      alert("Error submitting referral!");
      console.error("Error submitting referral:", error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        {loading && <ClipLoader color="#1A73E8" size={50} />}
      </div> 
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Refer a Course</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="referrerName"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="referrerName"
                className="mt-1 p-3 block w-full bg-gray-300 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={referrerName}
                onChange={(e) => setReferrerName(e.target.value)}
                required
              />
              {errors.referrerName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.referrerName}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="referrerEmail"
                className="block text-sm font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="referrerEmail"
                className="mt-1 block w-full p-3 bg-gray-300 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={referrerEmail}
                onChange={(e) => setReferrerEmail(e.target.value)}
                required
              />
              {errors.referrerEmail && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.referrerEmail}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="refereeName"
                className="block text-sm font-medium text-gray-700"
              >
                Friend's Name
              </label>
              <input
                type="text"
                id="refereeName"
                className="mt-1 block w-full p-3 bg-gray-300 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={refereeName}
                onChange={(e) => setRefereeName(e.target.value)}
                required
              />
              {errors.refereeName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.refereeName}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="refereeEmail"
                className="block text-sm font-medium text-gray-700"
              >
                Friend's Email
              </label>
              <input
                type="email"
                id="refereeEmail"
                className="mt-1 block w-full p-3 bg-gray-300 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={refereeEmail}
                onChange={(e) => setRefereeEmail(e.target.value)}
                required
              />
              {errors.refereeEmail && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.refereeEmail}
                </p>
              )}
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default ReferModal;
