import React from "react";

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

  const toolbar = props => (
    <header className='toolbar'>
      <nav className='toolbar_navigation'>
        <div>
          <DrawerToggleButton />
        </div>
        <div className='toolbar_logo'><a href="/">DERMOT OBRIEN</a></div>
        <div className='spacer'></div>
        <div className='toolbar_navigation_items'>
          <ul>
            <li><a href="/">SPECIALIST FACTUAL</a></li>
            <li><a href="/">OBSERVATIONAL</a></li>
            <li><a href="/">FACTUAL ENTERTAINMENT</a></li>
            <li><a href="/">ABOUT</a></li>
            <li><a href="/">CONTACT</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )

export default toolbar;
