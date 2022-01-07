import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useUser } from '@auth0/nextjs-auth0';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from '@material-ui/core/Container';

import styles from "assets/jss/nextjs-material-dashboard/components/headerStyle.js";

export default function Header(props) {
  // used for checking current route
  const router = useRouter();
  // create styles for this component
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { user } = useUser();
  function makeBrand() {
    var name = "NextJS Material Dashboard";
    props.routes.map((prop) => {
      if (router.route.indexOf(prop.layout + prop.path) !== -1) {
        name = props.rtlActive ? prop.rtlName : prop.name;
      }
      return null;
    });
    return name;
  }
  const { color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color,
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Container maxWidth='sm'>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          <a className={classes.title} href="#" className={classes.title}>
            Follow
          </a>
        </div>
          {user ? (
            <>
              <a className={classes.title} href="/api/logout" data-testid="logout">
                Logout
              </a>
            </>
          ) : (
            <>
              <a className={classes.title} href="/api/login" data-testid="login">
              Sign In
              </a>
            </>
          )}
       
      </Toolbar>
      </Container>
    </AppBar>
  );
}

Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object),
};
