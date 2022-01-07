import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
// core components
import Button from "components/CustomButtons/Button.js";
import PaymentForm from "common/PaymentInner/PaymentForm.js";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const styles = {
  mainWrapper: {
    marginTop: '1.5em',
    textAlign: 'left',
    '& svg': {
      height: '3em',
      width: '3em',
      
    },
    '& p': {
      color: '#BEC2C9'
    },
    '& button': {
      color: '#000',
      fontWeight: '600',
      fontSize: '14px',
      lineHeight: '17px',
      
    }
  },
  title: {
    color: '#fff',
    fontSize: '24px',
    lineHeight: '30px',
    fontWeight: 'bold'
  },
  firstPara: {
    color: '#999CA0',
    margin: '16px 0px',
    fontSize: '14px',
    lineHeight: '20px'
  },
  secondPara: {
    color: '#999CA0',
    margin: '16px 0px',
    fontSize: '12px',
    lineHeight: '20px',
    marginTop: 34
  }
};

function PaymentInner() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div className={classes.mainWrapper}>
      <Container maxWidth='xs'>
      <h1 className={classes.title}>Select payment</h1>
      <p className={classes.firstPara}>You chose: <strong>$60.00</strong> for 3 months</p>
      <PaymentForm />
      <p className={classes.secondPara}>By continuing, you agree with Lynq <strong>Terms of Use</strong>, <strong>Privacy Policy</strong> and <strong>Cookie Policy</strong></p>
      </Container>
    </div>
  );
}


export default PaymentInner;
