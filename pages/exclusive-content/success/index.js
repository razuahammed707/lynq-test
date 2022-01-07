import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Success from 'layouts/Success/index.js';

const styles = {
  
};

function SuccessPage() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div className={classes.mainWrapper}>
      <Success />
    </div>
  );
}


export default SuccessPage;
