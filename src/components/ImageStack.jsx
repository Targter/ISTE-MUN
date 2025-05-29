import React from "react";

const ParallaxSections = () => {
  const sections = [
    {
      image: "https://i.ibb.co/KcyTtsRQ/IMG-9447.jpg",
      title: "Welcome to Section 1",
      desc: "Scroll to explore more.",
    },
    {
      image: "https://i.ibb.co/rfHhkp0T/IMG-9321.jpg",
      title: "This is Section 2",
      desc: "Different background, same scroll.",
    },
    {
      image: "https://i.ibb.co/99nHVvpz/IMG-8830.jpg",
      title: "Final Section",
      desc: "Parallax-style scroll complete.",
    },
  ];

  return (
    <div className="w-screen h-full">
      {sections.map((section, index) => (
        <div
          key={index}
          className="relative w-screen h-screen bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url(${section.image})` }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-60 z-10" />

          {/* Foreground Content */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {section.title}
            </h1>
            <p className="text-lg md:text-xl max-w-xl">{section.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParallaxSections;
