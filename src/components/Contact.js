import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import './Contact.css';

  const contact = props => (
      <ScrollableAnchor id={"contact"}>
      <header className='contact'>
        <div>
          <h1 className="header">CONTACT</h1>
        </div>
      </header>
      </ScrollableAnchor>
  )

export default contact;
