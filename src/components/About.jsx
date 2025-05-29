import React from "react";
import { motion } from "framer-motion";
// import * as Vanta from "vanta/dist/vanta.net.min";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
// import "tailwindcss/tailwind.css";

const About = () => {
  React.useEffect(() => {
    const vantaEffect = NET({
      el: "#vanta-bg",
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 160.0,
      minWidth: 100.0,
      scale: 0.6,
      scaleMobile: 1.0,
      color: 0xc70000,
      backgroundColor: 0x0f0000,
      points: 7.0,
      maxDistance: 22.0,
      spacing: 27.0,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 0.6,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div id="vanta-bg" className="min-h-screen relative overflow-hidden">
      <section
        id="about"
        className="py-24 bg-transparent relative z-10 text-white font-bold"
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-red-600 mb-4 tracking-tight"
              variants={itemVariants}
            >
              About Chandigarh University MUN 2025
            </motion.h2>
            <motion.div
              className="w-32 h-1 bg-red-600 mx-auto mb-6 rounded-full"
              variants={itemVariants}
            ></motion.div>
            <motion.p
              className="text-white max-w-4xl mx-auto text-lg leading-relaxed"
              variants={itemVariants}
            >
              The Chandigarh University Model United Nations (CU MUN) Conference
              is a premier platform for young leaders to engage in diplomatic
              simulations, addressing global challenges through debate,
              research, and collaboration. Established in 2015, CU MUN has grown
              into one of India’s most prestigious MUN conferences, attracting
              diverse talent from across the nation.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <motion.div
              className="order-2 md:order-1"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h3
                className="text-3xl font-bold text-red-600 mb-4"
                variants={itemVariants}
              >
                Our Mission
              </motion.h3>
              <motion.p
                className="text-white mb-6 leading-relaxed"
                variants={itemVariants}
              >
                CU MUN aims to empower students by developing their skills in
                diplomacy, critical thinking, and public speaking. Through
                immersive simulations of United Nations bodies, participants
                gain insights into international relations, global governance,
                and sustainable solutions to pressing issues.
              </motion.p>

              <motion.h3
                className="text-3xl font-bold text-red-600 mb-4"
                variants={itemVariants}
              >
                Conference Theme
              </motion.h3>
              <motion.p
                className="text-white mb-6 leading-relaxed"
                variants={itemVariants}
              >
                The 2025 edition of CU MUN is themed{" "}
                <span className="italic font-semibold">
                  "Diplomacy Beyond Borders: Tackling Global Challenges Through
                  Science, Security, and Sustainability."
                </span>{" "}
                This theme encourages delegates to explore innovative solutions
                that integrate scientific advancements, global security
                strategies, and sustainable practices.
              </motion.p>

              <motion.h3
                className="text-3xl font-bold text-red-600 mb-4"
                variants={itemVariants}
              >
                Why Attend?
              </motion.h3>
              <motion.ul
                className="text-white mb-6 list-disc list-inside leading-relaxed"
                variants={itemVariants}
              >
                <li>
                  Engage in high-level debates with peers from over 50
                  universities.
                </li>
                <li>
                  Network with industry experts, diplomats, and academic
                  leaders.
                </li>
                <li>
                  Develop skills in research, negotiation, and leadership
                  through hands-on simulations.
                </li>
                <li>
                  Compete for prestigious awards and recognition in various
                  committees.
                </li>
              </motion.ul>

              <motion.div
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8"
                variants={itemVariants}
              >
                <a
                  href="#committees"
                  className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-full transition-colors duration-300 text-center shadow-lg hover:shadow-red-600/50"
                >
                  View Committees
                </a>
                <a
                  href="#registration"
                  className="px-8 py-3 bg-transparent hover:bg-red-800/20 text-red-600 font-medium rounded-full border border-red-600 transition-colors duration-300 text-center shadow-lg hover:shadow-red-600/50"
                >
                  Register Now
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="order-1 md:order-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative max-w-full w-full md:w-auto">
                <img
                  src="src/public/conference_hall.jpg"
                  alt="Conference hall"
                  className="rounded-xl shadow-2xl w-full max-h-[500px] object-cover border-2 border-red-600/50"
                />
                <motion.div
                  className="absolute -bottom-8 -left-8 bg-red-600/90 text-white p-5 rounded-xl shadow-xl"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <p className="text-2xl font-bold">CU MUN 2025</p>
                  <p className="text-sm">Shaping Future Diplomats</p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {[
              { value: "300+", label: "Delegates", desc: "From across India" },
              { value: "5", label: "Committees", desc: "UNGA, WHO, and more" },
              {
                value: "50+",
                label: "Universities",
                desc: "Nationwide participation",
              },
              { value: "3", label: "Days", desc: "Of intense debate" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-red-900/20 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-red-600/50 border border-red-600/30"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-red-600 font-bold text-4xl mb-2 animate-pulse">
                  {stat.value}
                </div>
                <p className="text-white font-semibold">{stat.label}</p>
                <p className="text-gray-400 text-sm">{stat.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h3
              className="text-3xl font-bold text-red-600 mb-4"
              variants={itemVariants}
            >
              Our Legacy
            </motion.h3>
            <motion.p
              className="text-white max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Since its inception, CU MUN has hosted over 2,000 delegates,
              fostering a community of changemakers. Our alumni have gone on to
              excel in diplomacy, law, and international relations, contributing
              to global discourse.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
