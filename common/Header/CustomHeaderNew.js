import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// layout for this page
import Admin from "layouts/Admin.js";
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

const useStyles = makeStyles((theme) => ({
  customNewWrapper: {
    position: 'relative'
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
  mnone: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  borderFull: {
    position: 'absolute',
    left: '0',
    right: '0',
    bottom: '11px',
    borderBottom: '1px solid #242526'
  }
}));

function CustomHeaderNew() {
  const classes = useStyles();
  return (
    <div className={classes.customNewWrapper}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              {/* <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6> */}
              <h4 className={classes.cardTitle}>Ben Burns</h4>
              <Chips />
              <p className={classes.description}>
              I am a sports cars specialist. Living in Los Angeles, CA
              </p>
              <p className={`${classes.description} ${classes.mnone}`}>
              Proceeds go to <a href="#">Save The Children</a>
              </p>
              <div className={`${classes.socialContainer} ${classes.mnone}`}>
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
              </div>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <p className={classes.borderFull} />
    </div>
  );
}

CustomHeaderNew.layout = Admin;

export default CustomHeaderNew;
