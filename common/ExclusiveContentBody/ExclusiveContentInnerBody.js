import React from "react";
import Link from 'next/link';
import { useRouter, useEffect } from "next/router";

// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import LockIcon from '@material-ui/icons/Lock';

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";

// common components
import ExclusiveCounts from 'common/ExclusiveCounts/index.js';
// import styles from "assets/jss/nextjs-material-dashboard/layouts/exclusiveContentStyle.js";

import blurImage from 'assets/img/exclusive-content/blur-main.png';
import lockImage from 'assets/img/exclusive-content/lock.svg';
import mainImage from 'assets/img/exclusive-content/Hamptons_christ.jpg';
// import video from 'assets/img/exclusive-content/video1.mp4';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
    top: "0",
    width: "100%",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
    },
    '& .MuiGrid-container': {
      '& .MuiGrid-item': {
        padding: '0!important',
      }
    }
  },
  title: {
    fontSize: '24px',
    lineHeight: '30px',
    fontWeight: 'bold',
    margin: 0,
    padding: 0
  },
  para: {
    color: '#BEC2C9',
    fontSize: '16px',
    lineHeight: '22px'
  },
  imageContainer: {
    position: "relative",
    marginBottom: '-6px',
    '& img': {
      maxHeight: '100%',
      maxWidth: '100%',
    }
  },
  centerContent: {
    position: 'absolute',
    height: '40px',
    marginTop: '-110px',
    top: '50%',
    left: 0,
    right: 0,
    margin: 'auto',
    color: '#FFFFFF',
    '& svg': {
      width: '36px',
      height: '36px',
      display: 'block',
      margin: '0 auto'
    },
    '& button': {
      color: '#000000',
      fontSize: '14px',
      lineHeight: '17px',
      fontWeight: '600',
      textTransform: 'none'
    },
    '& p': {
      margin: '0',
      marginTop: '12px',
      fontSize: '14px',
      lineHeight: '17px'
    }
  },
  mainWrapper: {
    background: '#1A1B1C',
    border: '1px solid #393B3F',
    boxSizing: 'border-box',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
    borderRadius: '5px',
    display: 'block',
    padding: '10px',
    marginBottom: '12px',
    textAlign: 'center'
  },
  caption: {
    display: 'flex'
  },
  leftSection: {
    flex: 'auto'
  },
  date: {
    color: '#BEC2C9',
    lineHeight: '18px',
    fontSize: '12px',
    textAlign: 'left',
    margin: 0,
    marginBottom: '8px'
  },
  position: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '22px',
    textAlign: 'left',
    color: '#fff',
    margin: 0,
    marginBottom: '16px'
  },
  likes: {
    color: '#BEC2C9',
    fontSize: '12px',
    lineHeight: '18px',
    textAlign: 'left',
    margin: 0
  },
  rightSection: {
    color: '#999CA0',
    fontSize: '12px',
    lineHeight: '16px',
    '& svg': {
      verticalAlign: 'middle',
      height: '20px'
    }
  }
}));

export default function ExclusiveContentInnerBody({ children, ...rest }) {
  // used for checking current route
  const router = useRouter();
  // styles
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container maxWidth='xs'>
        <h1 className={classes.title}>Exclusive Content</h1>
        <ExclusiveCounts />
        <p className={classes.para}>Find resources to level up your design and creative skills. Learn how to get better clients and make more money</p>
        <GridContainer>
          <GridItem xs={12}>
            <div className={classes.mainWrapper}>
              <div className={classes.imageContainer}>
                <img src={mainImage} />
                <div className={classes.centerContent}>
                  {/* <LockIcon /> */}
                  {/* <Button color="primary" round>
                    Join Now for $5 / month
                  </Button> */}
                  {/* <p>Already have an account? <a>Sign In</a></p> */}
                </div>
                <div className={classes.caption}>
                  <div className={classes.leftSection}>
                    <p className={classes.date}>03 January 2022</p>
                    <p className={classes.position}>Check these Japanese Electric Sports Cars  coming after 2022</p>
                    <p className={classes.likes}>321 Likes</p>
                  </div>
                  <div className={classes.rightSection}>
                    {/* <LockIcon /> <span>Locked</span> */}
                  </div>
                </div>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12}>
            <div className={classes.mainWrapper}>
              <div className={classes.imageContainer}>
                {/* <img src={blurImage} /> */}
                <video width="377" height="250" controls >
                <source src="/video1.mp4" type="video/mp4"/>
                </video>
                <div className={classes.centerContent}>
                  {/* <LockIcon />
                  <Button color="primary" round>
                    Join Now for $5 / month
                  </Button> */}
                  {/* <p>Already have an account? <a>Sign In</a></p> */}
                </div>
                <div className={classes.caption}>
                  <div className={classes.leftSection}>
                    <p className={classes.date}>01 January 2022</p>
                    <p className={classes.position}>I tried the new Range Rover 2022 Sport HSE</p>
                    <p className={classes.likes}>199 Likes</p>
                  </div>
                  <div className={classes.rightSection}>
                    {/* <LockIcon /> <span>Locked</span> */}
                  </div>
                </div>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12}>
            <div className={classes.mainWrapper}>
              <div className={classes.imageContainer}>
                <img src={blurImage} />
                <div className={classes.centerContent}>
                  <LockIcon />
                  <Button color="primary" round>
                    Join Now for $5 / month
                  </Button>
                  <p>Already have an account? <a>Sign In</a></p>
                </div>
                <div className={classes.caption}>
                  <div className={classes.leftSection}>
                    <p className={classes.date}>28 December 2021</p>
                    <p className={classes.position}>OMG, the New BMW XM Concept SUV Luxury is insane </p>
                    <p className={classes.likes}>111 likes</p>
                  </div>
                  <div className={classes.rightSection}>
                    <LockIcon /> <span>Locked</span>
                  </div>
                </div>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12}>
            <div className={classes.mainWrapper}>
              <div className={classes.imageContainer}>
                <img src={blurImage} />
                <div className={classes.centerContent}>
                  <LockIcon />
                  <Button color="primary" round>
                    Join Now for $5 / month
                  </Button>
                  <p>Already have an account? <a>Sign In</a></p>
                </div>
                <div className={classes.caption}>
                  <div className={classes.leftSection}>
                    <p className={classes.date}>25 December 2021</p>
                    <p className={classes.position}>My Bro surprising his fiance with her dream car for her birthday! </p>
                    <p className={classes.likes}>283 Likes</p>
                  </div>
                  <div className={classes.rightSection}>
                    <LockIcon /> <span>Locked</span>
                  </div>
                </div>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12}>
            <div className={classes.mainWrapper}>
              <div className={classes.imageContainer}>
                <img src={blurImage} />
                <div className={classes.centerContent}>
                  <LockIcon />
                  <Button color="primary" round>
                    Join Now for $5 / month
                  </Button>
                  <p>Already have an account? <a>Sign In</a></p>
                </div>
                <div className={classes.caption}>
                  <div className={classes.leftSection}>
                    <p className={classes.date}>18 December 2021</p>
                    <p className={classes.position}>I was beingd the scene for Only The Family & Lil Durk video shoot</p>
                    <p className={classes.likes}>99 likes</p>
                  </div>
                  <div className={classes.rightSection}>
                    <LockIcon /> <span>Locked</span>
                  </div>
                </div>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12}>
            <div className={classes.mainWrapper}>
              <div className={classes.imageContainer}>
                <img src={blurImage} />
                <div className={classes.centerContent}>
                  <LockIcon />
                  <Button color="primary" round>
                    Join Now for $5 / month
                  </Button>
                  <p>Already have an account? <a>Sign In</a></p>
                </div>
                <div className={classes.caption}>
                  <div className={classes.leftSection}>
                    <p className={classes.date}>16 December 2021</p>
                    <p className={classes.position}>They SOLD THE $1.1 MILLION FORD GT</p>
                    <p className={classes.likes}>104 likes</p>
                  </div>
                  <div className={classes.rightSection}>
                    <LockIcon /> <span>Locked</span>
                  </div>
                </div>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12}>
            <div className={classes.mainWrapper}>
              <div className={classes.imageContainer}>
                <img src={blurImage} />
                <div className={classes.centerContent}>
                  <LockIcon />
                  <Button color="primary" round>
                    Join Now for $5 / month
                  </Button>
                  <p>Already have an account? <a>Sign In</a></p>
                </div>
                <div className={classes.caption}>
                  <div className={classes.leftSection}>
                    <p className={classes.date}>14 December 2021</p>
                    <p className={classes.position}>This is what I will drive for Holidays in the Hamptons. Who’s coming with me next time?</p>
                    <p className={classes.likes}>87 likes</p>
                  </div>
                  <div className={classes.rightSection}>
                    <LockIcon /> <span>Locked</span>
                  </div>
                </div>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </Container>
    </div>
  );
}
