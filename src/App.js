import React, { Component } from "react";
import SpecialistFactual from "./components/SpecialistFactual";
import Observational from "./components/Observational";
import FactEnt from "./components/FactEnt";
import About from "./components/About";
import Contact from "./components/Contact";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  drawerLinkClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer
          show={this.state.sideDrawerOpen}
          drawerLinkClickHandler={this.drawerLinkClickHandler}
        />
        {backdrop}
        <About />
        <SpecialistFactual />
        <Observational />
        <FactEnt />
        <Contact />
      </div>
    );
  }
}
export default App;
