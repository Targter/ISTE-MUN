import React from "react";
import Hero from "./components/Hero";
// import ImageStack from "./components/ImageStack";
import Registration from "./components/Registration";
import Schedule from "./components/Schedule";
// import VantaBackground from "./components/VantaBackground";
// import About from "./components/About";
import About from "./components/About";
const App = () => {
  return (
    <div className="font-sans bg-gray-50">
      <Hero />
      <About />
      {/* <ImageStack /> */}
      <Registration />
      <Schedule />
    </div>
  );
};

export default App;
