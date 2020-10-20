import React from "react";
import { Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

import classes from "./Button.css";

const button = (props) => (
  <Button
  type="submit"
    variant={props.variant}
    disabled={props.disabled}
    className={[classes.Button, classes[props.btnType]].join(" ")}
    onClick={props.clicked}
    endIcon={props.icon ? <Icon>send</Icon> : null}
  >
    {props.children}
  </Button>
);

export default button;
