import React from 'react';

import burgerLogo from '../../assets/images/burger-logo-name.png';
import classes from './Logo.css';

const logo = (props) => (
  <React.Fragment>
    <div className={classes.Logo} style={{ height: props.height }}>
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  </React.Fragment>
);

export default logo;