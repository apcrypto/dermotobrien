import React, { Component } from 'react';
import SpecialistFactual from "./components/SpecialistFactual";
import Observational from "./components/Observational";
import FactEnt from "./components/FactEnt";
import About from "./components/About";
import Contact from "./components/Contact";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer"
import Backdrop from "./components/Backdrop/Backdrop"

class App extends Component {

  render() {
    return (
      <div style={{height: '100%'}}>
      <Toolbar />
      <SideDrawer />
      <Backdrop />
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
