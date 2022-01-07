import { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// layout for this page
import Admin from "layouts/Admin.js";
import CustomHeader from "common/Header/CustomHeader.js";
// core components
import MembershipBody from 'common/MembershipBody/index.js';
import FixedFooter from 'common/FixedFooter/index.js';

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
  extraStyle: {
    backgroundColor: "#101011",
    paddingTop: "4.5em"
  }
};

function Membership() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [price, setPrice] = useState();

  const setPriceValue = (val) => {
    setPrice(val)
  }
  return (
    <div className={classes.mainWrapper}>
      <CustomHeader extraStyle={classes.extraStyle} />
      <MembershipBody getPriceValue={setPriceValue} />
      <FixedFooter setPrice={price} />
    </div>
  );
}

// Membership.layout = Admin;

export default Membership;
