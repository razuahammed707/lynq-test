import React from "react";
import Link from 'next/link';
import { useRouter, useEffect } from "next/router";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

// common components
import ExclusiveCounts from 'common/ExclusiveCounts/index.js';
import styles from "assets/jss/nextjs-material-dashboard/layouts/exclusiveContentStyle.js";

import blurImage from 'assets/img/exclusive-content/blur-image.png';
import lockImage from 'assets/img/exclusive-content/lock.svg';

export default function ExclusiveContent({ children, ...rest }) {
  // used for checking current route
  const router = useRouter();
  // styles
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])
  // states and functions
  return (
    <div className={classes.wrapper}>
      <ExclusiveCounts />
      <GridContainer>
        <GridItem xs={6} sm={6} md={4}>
          <Link href='/exclusive-content'>
            <div className={classes.imageContainer}>
              <img src={blurImage} />
              <img src={lockImage} />
            </div>
          </Link>
        </GridItem>
        <GridItem xs={6} sm={6} md={4}>
          <div className={classes.imageContainer}>
            <img src={blurImage} />
            <img src={lockImage} />
          </div>
        </GridItem>
        <GridItem xs={6} sm={6} md={4}>
          <div className={classes.imageContainer}>
            <img src={blurImage} />
            <img src={lockImage} />
          </div>
        </GridItem>
        <GridItem xs={6} sm={6} md={4}>
          <div className={classes.imageContainer}>
            <img src={blurImage} />
            <img src={lockImage} />
          </div>
        </GridItem>
        <GridItem xs={6} sm={6} md={4}>
          <div className={classes.imageContainer}>
            <img src={blurImage} />
            <img src={lockImage} />
          </div>
        </GridItem>
        <GridItem xs={6} sm={6} md={4}>
          <div className={classes.imageContainer}>
            <img src={blurImage} />
            <img src={lockImage} />
          </div>
        </GridItem>
        <GridItem xs={6} sm={6} md={4}>
          <div className={classes.imageContainer}>
            <img src={blurImage} />
            <img src={lockImage} />
          </div>
        </GridItem>
        <GridItem xs={6} sm={6} md={4}>
          <div className={classes.imageContainer}>
            <img src={blurImage} />
            <img src={lockImage} />
          </div>
        </GridItem>
        <GridItem xs={6} sm={6} md={4}>
          <div className={classes.imageContainer}>
            <img src={blurImage} />
            <img src={lockImage} />
          </div>
        </GridItem>
        <GridItem xs={6} sm={6} md={4}>
          <div className={classes.imageContainer}>
            <img src={blurImage} />
            <img src={lockImage} />
          </div>
        </GridItem>
        <GridItem xs={6} sm={6} md={4}>
          <div className={classes.imageContainer}>
            <img src={blurImage} />
            <img src={lockImage} />
          </div>
        </GridItem>
        <GridItem xs={6} sm={6} md={4}>
          <div className={classes.imageContainer}>
            <img src={blurImage} />
            <img src={lockImage} />
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
