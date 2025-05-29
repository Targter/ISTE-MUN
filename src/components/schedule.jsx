import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import RINGS from "vanta/dist/vanta.rings.min";
// import "tailwindcss/tailwind.css";

const scheduleData = [
  {
    day: "Day 1 - August 8, 2025",
    events: [
      {
        time: "08:00 - 09:30",
        title: "Registration & Check-in",
        description:
          "Delegates arrive at the stellar venue to begin their journey.",
        tooltip: "Check-in at the Cosmic Hall with your registration details.",
      },
      {
        time: "10:00 - 11:30",
        title: "Opening Ceremony",
        description:
          "Launch the summit with a galactic welcome and keynote address.",
        tooltip: "Hosted in the Nebula Auditorium.",
      },
      {
        time: "11:45 - 13:00",
        title: "Committee Session I",
        description: "Initiate diplomacy with roll call and agenda setting.",
        tooltip: "Meet in your assigned committee room.",
      },
      {
        time: "13:00 - 14:30",
        title: "Lunch Break",
        description: "Savor interstellar cuisine while networking.",
        tooltip: "Catered in the Starlight Dining Area.",
      },
      {
        time: "14:30 - 17:30",
        title: "Committee Session II",
        description: "Advance debates and draft working papers.",
        tooltip: "Focus on collaborative proposal drafting.",
      },
      {
        time: "18:00 - 20:00",
        title: "Welcome Reception",
        description: "Connect with delegates in a cosmic social setting.",
        tooltip: "Relaxed event at the Pulsar Lounge.",
      },
    ],
  },
  {
    day: "Day 2 - August 9, 2025",
    events: [
      {
        time: "09:00 - 12:30",
        title: "Committee Session III",
        description: "Present working papers and deepen debates.",
        tooltip: "Share drafts with your committee.",
      },
      {
        time: "12:30 - 13:30",
        title: "Lunch Break",
        description: "Refuel with a stellar lunch.",
        tooltip: "Served in the Starlight Dining Area.",
      },
      {
        time: "13:30 - 17:00",
        title: "Committee Session IV",
        description: "Finalize papers and propose draft resolutions.",
        tooltip: "Prepare resolutions for voting.",
      },
      {
        time: "17:30 - 18:30",
        title: "Guest Lecture",
        description: "Insights from a cosmic diplomat on global affairs.",
        tooltip: "Open session in the Nebula Auditorium.",
      },
      {
        time: "19:00 - 21:00",
        title: "Cultural Night",
        description:
          "Celebrate universal diversity with performances and cuisine.",
        tooltip: "Join the festivities at the Galaxy Arena.",
      },
    ],
  },
  {
    day: "Day 3 - August 10, 2025",
    events: [
      {
        time: "09:00 - 12:00",
        title: "Committee Session V",
        description: "Final debates on resolutions and amendments.",
        tooltip: "Refine proposals before voting.",
      },
      {
        time: "12:00 - 13:00",
        title: "Lunch Break",
        description: "Last chance to network over lunch.",
        tooltip: "Final meal in the Starlight Dining Area.",
      },
      {
        time: "13:00 - 15:30",
        title: "Committee Session VI",
        description: "Vote on resolutions to shape the future.",
        tooltip: "Conclude committee work.",
      },
      {
        time: "16:00 - 17:30",
        title: "Closing Ceremony",
        description: "Celebrate achievements with awards and remarks.",
        tooltip: "Held in the Nebula Auditorium.",
      },
      {
        time: "18:00 onwards",
        title: "Farewell Dinner",
        description: "Conclude the summit with a stellar feast.",
        tooltip: "Formal event at the Pulsar Lounge.",
      },
    ],
  },
];

const IconCalendar = () => (
  <svg
    className="w-5 h-5 text-red-400 mr-2"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    ></path>
  </svg>
);

const IconClock = () => (
  <svg
    className="w-4 h-4 text-red-400 mr-1"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
);

const Shimmer = () => (
  <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
    <div
      className="w-full h-full bg-gradient-to-r from-transparent via-red-400/50 to-transparent animate-shimmer"
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

const Schedule = () => {
  const vantaRef = useRef(null);
  const [activeDay, setActiveDay] = useState(0);

  useEffect(() => {
    if (RINGS && THREE && vantaRef.current) {
      const vantaEffect = RINGS({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xff3333, // Vibrant red for alien rings
        backgroundColor: 0x1a0000, // Dark cosmic backdrop
        amplitude: 2.0, // Enhanced wave effect
        ringRadius: 0.8, // Tighter rings
      });
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.3, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="min-h-screen bg-black flex flex-col lg:flex-row overflow-hidden">
      {/* Left: Schedule */}
      <div className="lg:w-3/5 w-full py-12 px-6 sm:px-8 lg:pr-12 flex items-center justify-center">
        <div className="max-w-2xl w-full">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-red-500 tracking-wider">
              Stellar Itinerary
            </h2>
            <div className="w-16 h-1 bg-red-400 rounded-full mt-4 mb-3 animate-pulse"></div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Chart the course of the CU-MUN 2025 summit, a three-day odyssey of
              diplomacy and cosmic collaboration.
            </p>
          </motion.div>

          {/* Day Tabs */}
          <motion.div
            className="flex flex-wrap gap-3 mb-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {scheduleData.map((day, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveDay(idx)}
                className={`relative flex items-center px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 bg-red-900/10 text-red-400 hover:bg-gradient-to-r hover:from-red-900/20 hover:to-red-700/20 hover:shadow-red-500/30 ${
                  activeDay === idx
                    ? "bg-red-600 text-white shadow-md shadow-red-500/40"
                    : ""
                }`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconCalendar />
                {day.day.split(" - ")[0]}
                {activeDay === idx && <Shimmer />}
              </motion.button>
            ))}
          </motion.div>

          {/* Events */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-xl font-medium text-red-400 mb-6 tracking-tight">
              {scheduleData[activeDay].day}
            </h3>
            <div className="space-y-5">
              {scheduleData[activeDay].events.map((event, idx) => (
                <motion.div
                  key={idx}
                  className="relative group pl-6"
                  variants={itemVariants}
                >
                  <span className="absolute -left-2 top-2 w-3 h-3 rounded-full bg-red-500 shadow-md shadow-red-500/40 transition-transform group-hover:scale-125"></span>
                  <div className="bg-red-900/10 rounded-lg p-4 hover:bg-gradient-to-r hover:from-red-900/20 hover:to-red-700/20 hover:shadow-red-500/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-base font-medium text-red-400 tracking-tight">
                        {event.title}
                      </h4>
                      <div className="flex items-center text-red-400 text-sm">
                        <IconClock />
                        {event.time}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {event.description}
                    </p>
                    {event.tooltip && (
                      <div className="hidden group-hover:block text-xs text-gray-300 mt-2 bg-red-900/80 p-2 rounded-md shadow-lg">
                        {event.tooltip}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="text-center mt-10"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <a
              href="#"
              className="relative inline-block px-8 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 hover:shadow-red-500/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Itinerary
              <Shimmer />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Right: Vanta Effect and Animations */}
      <div
        ref={vantaRef}
        className="lg:w-2/5 w-full h-[300px] lg:h-auto relative bg-black hidden lg:block"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <motion.div
            className="relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-red-400 tracking-wider">
              Cosmic Chronicle
            </h3>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
          </motion.div>
          <motion.p
            className="text-gray-400 max-w-xs text-sm mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Traverse the timeline of CU-MUN 2025, where stars align for
            diplomacy.
          </motion.p>
          {/* Pulsating Particles */}
          <motion.div
            className="absolute top-10 left-10 w-5 h-5 bg-red-500 rounded-full shadow-lg shadow-red-500/50"
            variants={pulseVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-10 right-10 w-6 h-6 bg-red-400 rounded-full shadow-lg shadow-red-400/50"
            variants={pulseVariants}
            animate="animate"
            transition={{ duration: 2.5, delay: 0.5 }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-4 h-4 bg-red-600 rounded-full shadow-lg shadow-red-600/50"
            variants={pulseVariants}
            animate="animate"
            transition={{ duration: 2, delay: 1 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Schedule;
