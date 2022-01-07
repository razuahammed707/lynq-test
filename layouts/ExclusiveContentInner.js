import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// layout for this page
import Admin from "layouts/Admin.js";
import CustomHeaderNew from "common/Header/CustomHeaderNew.js";
// core components
import ExclusiveContentInnerBody from 'common/ExclusiveContentBody/ExclusiveContentInnerBody';

const styles = {
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
  }
};

function ExclusiveContentInner() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div>
      <CustomHeaderNew />
      
      <ExclusiveContentInnerBody />
    </div>
  );
}

ExclusiveContentInner.layout = Admin;

export default ExclusiveContentInner;
