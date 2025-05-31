import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/HomePage";
import Committees from "./pages/Committees";
import Registration from "./pages/Registration";
import Faculty from "./components/Faculty";
import Schedule from "./components/schedule";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="w-screen h-full overflow-x-hidden flex flex-col">
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/committees" element={<Committees />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/faculty" element={<Faculty/>} />
        <Route path="/schedule" element={<Schedule/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
