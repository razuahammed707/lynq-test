import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Payment from 'layouts/Payment/index.js';

const styles = {
  
};

function PaymentPage() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div className={classes.mainWrapper}>
      <Payment />
    </div>
  );
}


export default PaymentPage;
