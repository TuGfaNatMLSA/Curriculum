/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Nataly Gemio",
  title:
    "Computer Science, WTM, GDG El Alto, MLSA - Alpha , R00thouse HackLab La Paz, Microsoft Users Group Bolivia",
  email: "natalygemio@gmail.com",
  gitHub: "TuGfaNatMLSA",
  instagram: "TuGfaNat",
  linkedIn: "nataly-gemio-32602a216",
  medium: "",
  twitter: "NatalyGemio",
  youTube: "UCbwB3TmAp7wofRz7HaDi2VQ",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Education />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
