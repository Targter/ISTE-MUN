import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min";
// import "tailwindcss/tailwind.css";

const Shimmer = () => (
  <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
    <div
      className="w-full h-full bg-gradient-to-r from-transparent via-red-400/60 to-transparent animate-shimmer"
      style={{ backgroundSize: "200% 100%" }}
    />
    <style>{`
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      .animate-shimmer {
        animation: shimmer 1.5s infinite;
      }
    `}</style>
  </div>
);

const Registration = () => {
  const vantaRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    university: "",
    phoneNumber: "",
    delegateType: "",
    committeePreference1: "",
    committeePreference2: "",
    previousExperience: "",
    accommodationRequired: false,
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (GLOBE && THREE && vantaRef.current) {
      const vantaEffect = GLOBE({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xff3333, // Vibrant red for alien glow
        backgroundColor: 0x1a0000, // Dark red cosmic backdrop
        size: 1.0, // Smaller spheres for detail
        spacing: 3.5, // Dense for alien planet vibe
      });
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }
  }, []);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid Email is required";
    if (!formData.university) newErrors.university = "University is required";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone Number is required";
    if (!formData.delegateType)
      newErrors.delegateType = "Delegate Type is required";
    if (!formData.committeePreference1)
      newErrors.committeePreference1 = "First committee preference is required";
    if (!formData.agreeToTerms)
      newErrors.agreeToTerms = "You must agree to the terms";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setIsSubmitted(true);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  const orbVariants = {
    animate: {
      y: [0, -20, 0],
      scale: [1, 1.1, 1],
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  const formField = (
    label,
    name,
    type = "text",
    isRequired = false,
    tooltip = ""
  ) => (
    <motion.div className="mb-4 relative group" variants={itemVariants}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-300 mb-1"
      >
        {label}
        {isRequired && <span className="text-red-400 ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={formData[name]}
        onChange={handleChange}
        className="block w-full rounded-md border border-red-500/20 bg-red-900/5 text-gray-200 py-2 px-3 text-sm focus:ring-1 focus:ring-red-400 focus:border-red-400 transition-all duration-300 shadow-sm"
        required={isRequired}
      />
      {tooltip && (
        <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-red-900/80 text-gray-200 text-xs p-2 rounded-md shadow-lg max-w-xs">
          {tooltip}
        </div>
      )}
      {errors[name] && (
        <p className="text-xs text-red-400 mt-1">{errors[name]}</p>
      )}
    </motion.div>
  );

  const selectField = (
    label,
    name,
    options,
    isRequired = false,
    tooltip = ""
  ) => (
    <motion.div className="mb-4 relative group" variants={itemVariants}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-300 mb-1"
      >
        {label}
        {isRequired && <span className="text-red-400 ml-1">*</span>}
      </label>
      <select
        name={name}
        id={name}
        value={formData[name]}
        onChange={handleChange}
        className="block w-full rounded-md border border-red-500/20 bg-red-900/5 text-gray-200 py-2 px-3 text-sm focus:ring-1 focus:ring-red-400 focus:border-red-400 transition-all duration-300 shadow-sm"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {tooltip && (
        <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-red-900/80 text-gray-200 text-xs p-2 rounded-md shadow-lg max-w-xs">
          {tooltip}
        </div>
      )}
      {errors[name] && (
        <p className="text-xs text-red-400 mt-1">{errors[name]}</p>
      )}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-black flex flex-col lg:flex-row overflow-hidden">
      {/* Left: Registration Form */}
      <div className="lg:w-1/2 w-full py-12 px-4 sm:px-6 lg:pr-8 flex items-center justify-center">
        <div className="max-w-md w-full">
          <AnimatePresence>
            {!isSubmitted && (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="bg-red-900/10 p-6 rounded-lg shadow-md shadow-red-500/10 grid grid-cols-1 gap-5"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                variants={containerVariants}
              >
                <motion.h2
                  className="text-2xl md:text-3xl font-bold text-red-500 mb-4 tracking-tight"
                  variants={itemVariants}
                >
                  Join CU-MUN 2025
                </motion.h2>
                <motion.p
                  className="text-gray-400 mb-4 text-sm"
                  variants={itemVariants}
                >
                  Register for an interstellar diplomatic experience at
                  Chandigarh University’s Model United Nations.
                </motion.p>

                {formField(
                  "Full Name",
                  "fullName",
                  "text",
                  true,
                  "Your full name as per official records."
                )}
                {formField(
                  "Email Address",
                  "email",
                  "email",
                  true,
                  "Used for confirmation and updates."
                )}
                {formField(
                  "University",
                  "university",
                  "text",
                  true,
                  "Your current university or institution."
                )}
                {formField(
                  "Phone Number",
                  "phoneNumber",
                  "tel",
                  true,
                  "Include country code if international."
                )}
                {selectField(
                  "Delegate Type",
                  "delegateType",
                  [
                    { value: "", label: "Select" },
                    { value: "Individual", label: "Individual Delegate" },
                    { value: "Group", label: "Group Delegation" },
                  ],
                  true,
                  "Registering alone or with a group?"
                )}
                {selectField(
                  "Committee Preference 1",
                  "committeePreference1",
                  [
                    { value: "", label: "Select" },
                    { value: "UNGA", label: "UN General Assembly" },
                    { value: "UNSC", label: "UN Security Council" },
                    { value: "WHO", label: "World Health Organization" },
                  ],
                  true,
                  "Your top committee choice."
                )}
                {selectField(
                  "Committee Preference 2",
                  "committeePreference2",
                  [
                    { value: "", label: "Select" },
                    { value: "UNGA", label: "UN General Assembly" },
                    { value: "UNSC", label: "UN Security Council" },
                    { value: "WHO", label: "World Health Organization" },
                  ],
                  false,
                  "Optional second committee choice."
                )}
                <motion.div className="mb-4" variants={itemVariants}>
                  <label
                    htmlFor="previousExperience"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Previous MUN Experience
                  </label>
                  <textarea
                    name="previousExperience"
                    id="previousExperience"
                    rows="3"
                    value={formData.previousExperience}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-red-500/20 bg-red-900/5 text-gray-200 py-2 px-3 text-sm focus:ring-1 focus:ring-red-400 focus:border-red-400 transition-all duration-300 shadow-sm"
                  />
                </motion.div>
                <motion.div
                  className="flex items-center space-x-2"
                  variants={itemVariants}
                >
                  <input
                    type="checkbox"
                    id="accommodationRequired"
                    name="accommodationRequired"
                    checked={formData.accommodationRequired}
                    onChange={handleChange}
                    className="h-4 w-4 text-red-400 focus:ring-red-400 border-red-500/20 rounded"
                  />
                  <label
                    htmlFor="accommodationRequired"
                    className="text-sm text-gray-300"
                  >
                    Need accommodation
                  </label>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-2"
                  variants={itemVariants}
                >
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="h-4 w-4 text-red-400 focus:ring-red-400 border-red-500/20 rounded"
                  />
                  <label
                    htmlFor="agreeToTerms"
                    className="text-sm text-gray-300"
                  >
                    I agree to the{" "}
                    <a href="#terms" className="text-red-400 hover:underline">
                      terms
                    </a>
                    <span className="text-red-400 ml-1">*</span>
                  </label>
                </motion.div>
                {errors.agreeToTerms && (
                  <p className="text-xs text-red-400 -mt-2 mb-4">
                    {errors.agreeToTerms}
                  </p>
                )}
                <motion.div className="relative" variants={itemVariants}>
                  <button
                    type="submit"
                    className="relative w-full bg-red-600 text-white py-2 rounded-md font-semibold text-base hover:bg-red-700 transition-colors duration-300 shadow-md hover:shadow-red-500/40"
                  >
                    Register Now
                    <Shimmer />
                  </button>
                </motion.div>
              </motion.form>
            )}

            {isSubmitted && (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-red-900/10 p-8 rounded-lg shadow-md shadow-red-500/10 text-center"
              >
                <div className="relative inline-block">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ff3333"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-16 h-16"
                    initial={{ pathLength: 0, rotate: -45 }}
                    animate={{ pathLength: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <motion.path d="M20 6L9 17l-5-5" />
                  </motion.svg>
                  <Shimmer />
                </div>
                <h3 className="text-xl font-bold text-red-500 mt-4">
                  Registration Confirmed!
                </h3>
                <p className="text-gray-400 mt-2 text-sm">
                  Welcome to CU-MUN 2025! Check your email for next steps.
                </p>
                <motion.a
                  href="#home"
                  className="relative mt-4 inline-block px-6 py-2 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors duration-300 shadow-md hover:shadow-red-500/40"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back to Home
                  <Shimmer />
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right: Vanta Effect and Animations */}
      <div
        ref={vantaRef}
        className="lg:w-1/2 w-full h-[400px] lg:h-auto relative bg-black hidden lg:block"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-red-400 mb-4 tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Interstellar Summit Awaits
          </motion.h3>
          <motion.p
            className="text-gray-400 max-w-md text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join the cosmic dialogue at CU-MUN 2025, where diplomacy meets
            innovation.
          </motion.p>
          {/* Animated Orbs */}
          <motion.div
            className="absolute top-10 left-10 w-6 h-6 bg-red-500 rounded-full shadow-lg shadow-red-500/50"
            variants={orbVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-10 right-10 w-8 h-8 bg-red-400 rounded-full shadow-lg shadow-red-400/50"
            variants={orbVariants}
            animate="animate"
            transition={{ duration: 4, delay: 0.5 }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-4 h-4 bg-red-600 rounded-full shadow-lg shadow-red-600/50"
            variants={orbVariants}
            animate="animate"
            transition={{ duration: 3.5, delay: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Registration;
