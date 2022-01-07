import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Button from "components/CustomButtons/Button.js";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const styles = {
  mainWrapper: {
    marginTop: '1.5em',
    textAlign: 'center',
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
  }
};

function SuccessInner() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div className={classes.mainWrapper}>
      <a><CheckCircleOutlineIcon /></a>
      <h1 className={classes.title}>Congratulations</h1>
      <p>You’re have subscribed to Ben Burns exclusive content</p>
      <p>You can manage this subscription in your <a href="#">profile</a></p>
      <Button color="primary" size="md" round>Visit Exclusive Content</Button>
    </div>
  );
}


export default SuccessInner;
