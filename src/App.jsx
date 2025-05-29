import React from "react";
import Hero from "./components/Hero";
// import ImageStack from "./components/ImageStack";
import Registration from "./components/Registration";
// import Schedule from "./components/Schedule";
// import Schedule from "./components/Schedule";
import Sc from "./components/Schedule.jsx";
// import VantaBackground from "./components/VantaBackground";
// import About from "./components/About";
import About from "./components/About.jsx";
const App = () => {
  return (
    <div className="font-sans bg-gray-50">
      <Hero />
      <About />
      {/* <ImageStack /> */}
      <Registration />
      <Sc />
    </div>
  );
};

export default App;
