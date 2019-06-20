import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import './About.css';

  const about = props => (
      <ScrollableAnchor id={"about"}>
      <header className='about'>
        <div>
          <h1 className="header">ABOUT</h1>
        </div>
      </header>
      </ScrollableAnchor>
  )

export default about;
