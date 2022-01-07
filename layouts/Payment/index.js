import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import CustomHeader from "common/Header/CustomHeader.js";
import PaymentInner from 'common/PaymentInner/index.js';

const styles = {
  mainWrapper: {
    '& div[class^="makeStyles-cardProfile"], & div[class^="makeStyles-card"]': {
      marginBottom: '0px!important'
    }
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  socialContainer: {
    marginTop: '20px',
    '& svg': {
      marginRight: '8px',
      cursor: 'pointer',
      '&:last-child': {

        marginRight: '0'
      }
    }
  },
  marginTop: {
    marginTop: '3em'
  },
  extraStyle: {
    backgroundColor: "#101011",
    paddingTop: "4.5em"
  }
};

function Payment() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div className={classes.mainWrapper}>
      <CustomHeader extraStyle={classes.extraStyle} />
      <PaymentInner />
    </div>
  );
}


export default Payment;
