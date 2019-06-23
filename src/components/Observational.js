import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import './Observational.css';



  const specialistfactual = props => (
      <ScrollableAnchor id={"observational"}>
        <div>
        <div className="header">
          <header>OBSERVATIONAL</header>
        </div>

        <div className="wrapper">
        <div className="panel">Panel A</div>
        <div className="panel">Panel B</div>
        <div className="panel">Panel C</div>
        <div className="panel">Panel D</div>
        <div className="panel">Panel E</div>
        <div className="panel">Panel F</div>
        <div className="panel">Panel G</div>
        <div className="panel">Panel H</div>
        <div className="panel">Panel I</div>
        <div className="panel">Panel J</div>
        <div className="panel">Panel K</div>
        <div className="panel">Panel L</div>
        </div>
        </div>
      </ScrollableAnchor>
  )

export default specialistfactual;
