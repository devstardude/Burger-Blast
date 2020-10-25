import React from 'react';
import {Link} from "react-scroll"

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
      <div className={classes.CheckoutSummary}>
        <h1>We hope it tastes well!</h1>
        <hr />
        <div style={{ width: "100%", margin: "auto" }}>
          <Burger ingredients={props.ingredients} />
        </div>
        <Button btnType="Danger" clicked={props.checkoutCancelled}>
          CANCEL
        </Button>
        <Link
          activeClass="active "
          to="Form-data"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <Button
            btnType="Success"
            clicked={props.checkoutContinued}
          >
            CONTINUE
          </Button>
        </Link>
      </div>
    );
}

export default checkoutSummary;