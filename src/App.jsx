import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import { Routes, Route } from "react-router-dom";
import NavbarDesktop from "./components/NavbarDesktop";
import NavbarMobile from "./components/NavbarMobile";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavbarMobile />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <NavbarMobile />
              <NavbarDesktop />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <NavbarMobile />
              <NavbarDesktop />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <NavbarMobile />
              <NavbarDesktop />
              <Projects />
              <Footer />
            </>
          }
        />
        <Route
          path="/resume"
          element={
            <>
              <NavbarMobile />
              <NavbarDesktop />
              <Resume />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
