import React from "react";
import { Button } from "@material-ui/core";

import classes from "./BuildControl.css";

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>

    <Button
      variant="contained"
      className={classes.Less}
      onClick={props.removed}
      disabled={props.disabled}
    >
      Less
    </Button>
    <Button variant="contained" className={classes.More} onClick={props.added}>
      More
    </Button>
  </div>
);

export default buildControl;
