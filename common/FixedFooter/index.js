import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// layout for this page
import Admin from "layouts/Admin.js";
import Header from "common/Header/index.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Accordion from "components/Accordion/Accordion.js";
import Chips from "components/Chips/Chips.js";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

import avatar from "assets/img/faces/marc.jpg";

const styles = {
  buttonWrapper: {
    background: '#101011',
    boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.75)',
    position: 'fixed',
    width: '100%',
    bottom: '0',
    textAlign: 'center',
    padding: '20px 0px',
    '& button': {
      width: '345px'
    }
  }
};

function FixedFooter({setPrice}) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div className={classes.buttonWrapper}>
      <Button color="primary" round size="lg" disabled={!setPrice}>
        {setPrice ? `$${setPrice} Continue` : 'Continue'}
      </Button>
    </div>
  );
}

export default FixedFooter;
