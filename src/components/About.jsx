import React, { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  useMotionValue,
} from "framer-motion";
// import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

const About = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.3 });

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0.9]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.88, 1, 1.12]);

  // Vanta.js background effect
  useEffect(() => {
    const vantaEffect = NET({
      el: "#vanta-bg",
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.5,
      color: 0xa11212, // Vibrant crimson
      backgroundColor: 0x050000, // Deep near-black
      points: 18.0,
      maxDistance: 13.0,
      spacing: 16.0,
      showDots: true,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.33, 0, 0.67, 1], // Smooth cubic-bezier
        when: "beforeChildren",
        staggerChildren: 0.45,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.1, ease: [0.33, 0, 0.67, 1] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 120 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.3, ease: "easeInOut" },
    },
  };

  const statCardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  // Number counter effect
  // const NumberCounter = ({ end, duration = 3 }) => {
  //   const count = useSpring(0, {
  //     stiffness: 70,
  //     damping: 30,
  //     duration: duration * 1000,
  //   });

  //   useEffect(() => {
  //     if (isInView) {
  //       count.set(end);
  //     }
  //   }, [isInView, count, end]);

  //   return <motion.span>{count.to((val) => Math.floor(val))}</motion.span>;
  // };
  const NumberCounter = ({ end, duration = 3 }) => {
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
      stiffness: 100,
      damping: 20,
    });

    useEffect(() => {
      if (isInView) {
        motionValue.set(end);
      }
    }, [isInView, end, motionValue]);

    const rounded = useTransform(springValue, (val) => Math.floor(val));

    return <motion.span>{rounded}</motion.span>;
  };

  return (
    <div id="vanta-bg" className="min-h-screen relative overflow-hidden">
      <motion.section
        id="about"
        ref={sectionRef}
        className="py-36 bg-transparent relative z-10 text-white font-semibold"
        style={{ opacity }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-14">
          <motion.div
            className="text-center mb-28"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-red-900 mb-6 tracking-tight"
            >
{/*               variants={itemVariants} */}
              About Chandigarh University MUN 2025
            </motion.h2>
            <motion.div
              className="w-40 h-1 bg-red-900 mx-auto mb-10 rounded-full"
              variants={itemVariants}
            ></motion.div>
            <motion.p
              className="text-gray-100 max-w-5xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-24 items-start">
            <motion.div
              className="order-2 md:order-1"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              style={{ y: parallaxY }}
            >
              <motion.h3
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-900 mb-6"
                variants={itemVariants}
              >
                Our Mission
              </motion.h3>
              <motion.p
                className="text-gray-100 mb-8 text-base sm:text-lg lg:text-xl leading-relaxed"
                variants={itemVariants}
              >
                CU MUN aims to empower students by developing their skills in
                diplomacy, critical thinking, and public speaking. Through
                immersive simulations of United Nations bodies, participants
                gain insights into international relations, global governance,
                and sustainable solutions to pressing issues.
              </motion.p>

              <motion.h3
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-900 mb-6"
                variants={itemVariants}
              >
                Conference Theme
              </motion.h3>
              <motion.p
                className="text-gray-100 mb-8 text-base sm:text-lg lg:text-xl leading-relaxed"
                variants={itemVariants}
              >
                The 2025 edition of CU MUN is themed{" "}
                <span className="italic font-medium">
                  "Diplomacy Beyond Borders: Tackling Global Challenges Through
                  Science, Security, and Sustainability."
                </span>{" "}
                This theme encourages delegates to explore innovative solutions
                that integrate scientific advancements, global security
                strategies, and sustainable practices.
              </motion.p>

              <motion.h3
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-900 mb-6"
                variants={itemVariants}
              >
                Why Attend?
              </motion.h3>
              <motion.ul
                className="text-gray-100 mb-8 list-disc list-inside text-base sm:text-lg lg:text-xl leading-relaxed"
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
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-12"
                variants={itemVariants}
              >
                <a
                  href="#committees"
                  className="px-8 py-3 bg-red-900 hover:bg-red-950 text-white font-medium rounded-full transition-colors duration-300 text-center shadow-xl hover:shadow-red-900/90"
                >
                  View Committees
                </a>
                <a
                  href="#registration"
                  className="px-8 py-3 bg-transparent hover:bg-red-950/30 text-red-900 font-medium rounded-full border-2 border-red-900 transition-colors duration-300 text-center shadow-xl hover:shadow-red-900/90"
                >
                  Register Now
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="order-1 md:order-2"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              style={{ scale }}
            >
              <div className="relative max-w-full w-full md:w-auto">
                <img
                  src="/conference_hall.jpg"
                  alt="Conference hall"
                  className="rounded-xl shadow-2xl w-full max-h-[520px] object-cover border-2 border-red-900/80"
                />
                <motion.div
                  className="absolute -bottom-10 -right-10 bg-red-900/95 text-white p-6 rounded-xl shadow-2xl"
                  initial={{ x: 90, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 1.1, ease: "easeInOut" }}
                >
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold">
                    CU MUN 2025
                  </p>
                  <p className="text-sm lg:text-base">
                    Shaping Future Diplomats
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            ref={statsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-32"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {[
              {
                value: 300,
                label: "Delegates",
                desc: "From across India",
                suffix: "+",
              },
              { value: 5, label: "Committees", desc: "UNGA, WHO, and more" },
              {
                value: 50,
                label: "Universities",
                desc: "Nationwide participation",
                suffix: "+",
              },
              { value: 3, label: "Days", desc: "Of intense debate" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-red-900/30 p-8 rounded-xl shadow-xl hover:shadow-red-900/90 border border-red-900/50 transition-all duration-300"
                variants={statCardVariants}
                whileHover={{ y: -18, scale: 1.07 }}
              >
                <div className="text-red-900 font-bold text-4xl sm:text-5xl lg:text-6xl mb-4">
                  <NumberCounter end={stat.value} duration={3.5} />
                  {stat.suffix || ""}
                </div>
                <p className="text-white font-semibold text-lg sm:text-xl lg:text-2xl">
                  {stat.label}
                </p>
                <p className="text-gray-300 text-sm lg:text-base">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-28 text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            style={{ y: parallaxY }}
          >
            <motion.h3
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-900 mb-6"
              variants={itemVariants}
            >
              Our Legacy
            </motion.h3>
            <motion.p
              className="text-gray-100 max-w-5xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed"
              variants={itemVariants}
            >
              Since its inception, CU MUN has hosted over 2,000 delegates,
              fostering a community of changemakers. Our alumni have gone on to
              excel in diplomacy, law, and international relations, contributing
              to global discourse.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
