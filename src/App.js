import React, { Component } from 'react';
import SpecialistFactual from "./components/SpecialistFactual";
import Observational from "./components/Observational";
import FactEnt from "./components/FactEnt";
import About from "./components/About";
import Contact from "./components/Contact";
import Toolbar from "./components/Toolbar/Toolbar";

class App extends Component {

  render() {
    return (
      <div className="App">
      <Toolbar />
      <SpecialistFactual />
      <Observational />
      <FactEnt />
      <About />
      <Contact />
      </div>
    );
  }
}

export default App;
