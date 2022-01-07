import React from "react";
import Header from "../../components/razu/Header";
import { Container, Box, Grid, Typography, Button } from "@mui/material";
import ProfilePic from "../../assets/img/user_img.png";
import { makeStyles } from "@mui/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import brief from "assets/img/brief.svg";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import { lineHeight } from "@mui/system";

const myStyle = makeStyles({
  container: {
    maxWidth: "640px",
    textAlign: "center",
    position: "relative",
    top: "-45px",
  },
  expertiseBtn: {
    background: "#393B3F",
    color: "#999CA0 !important",
    padding: "3px 7px",
    fontSize: "11px !important",
    fontWeight: "500 !important",
    marginRight: "10px",
    marginBottom: "23px",
    "&:last-child": {
      marginRight: "0",
    },
  },
  avaraterTitle: {
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "30px",
    fontWeight: "700 !important",
    marginBottom: "17px",
  },
  avater: {
    filter: "drop-shadow(0px 0px 25px rgba(0, 0, 0, 0.75))",
    borderRadius: "20px",
    width: "90px",
    height: "90px",
    marginBottom: "20px",
  },
  socialMediaIcons: {
    marginTop: "20px",
    marginBottom: "46px",
    "& svg": {
      marginRight: "12px",
      cursor: "pointer",
      "&:last-child": {
        marginRight: "0",
      },
    },
  },
  accordion: {
    background: "transparent",
    margin: "0px !important",
    marginBottom: "20px !important",
  },
  accordion_summery: {
    position: "relative",
    background: "#5A27E7",
    borderRadius: "100px",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px !important",
  },
  accordion_summery_icon: {
    position: "absolute !important",
    left: "10px",
    bottom: "6px",
    height: "39px",
    width: "39px",
  },
  accordion_text: {
    fontSize: "16px",
    fontWeight: 600,
    paddingTop: "4px",
    padding: 0,
    textAlign: "center",
    width: "100%",
  },
});

function Test() {
  const classes = myStyle();

  return (
    <Box sx={{ background: "#101011" }}>
      <Header />
      <Container component="main" className={classes.container}>
        <img src={ProfilePic} alt="profile" className={classes.avater} />
        <Typography className={classes.avaraterTitle}>Ben Burns</Typography>
        <Box>
          <Button className={classes.expertiseBtn}>Desingers</Button>
          <Button className={classes.expertiseBtn}>Creative</Button>
          <Button className={classes.expertiseBtn}>Creative Buysiness</Button>
        </Box>
        <Box sx={{ color: "#BEC2C9" }}>
          <Typography>
            I am an executive level creative leader with more than...more
          </Typography>
          <Typography>
            Proceeds go to{" "}
            <span style={{ color: "#4CC9F0" }}>Save The Children</span>{" "}
          </Typography>
        </Box>
        <Box className={classes.socialMediaIcons}>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </Box>
        <Box>
          <Accordion className={classes.accordion} expanded={false}>
            <AccordionSummary
              expandIcon={<AddCircleIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.accordion_summery}
            >
              <img src={brief} className={classes.accordion_summery_icon} />
              <Typography className={classes.accordion_text}>
                Back My Project
              </Typography>
            </AccordionSummary>
          </Accordion>

          <Accordion className={classes.accordion} expanded={false}>
            <AccordionSummary
              expandIcon={<AddCircleIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.accordion_summery}
            >
              <Typography className={classes.accordion_text}>
                Exclusive Content
              </Typography>
            </AccordionSummary>
          </Accordion>
        </Box>
      </Container>
    </Box>
  );
}
export default Test;
