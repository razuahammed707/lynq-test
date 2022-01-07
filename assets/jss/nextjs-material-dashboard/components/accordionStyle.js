import {
  blackColor,
  whiteColor,
  hexToRgb,
} from "assets/jss/nextjs-material-dashboard.js";

const accordionStyle = {
  accordion: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
    background: '#101011',
    width: "100%",
    boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
  },
  accordionPlain: {
    background: "transparent",
    boxShadow: "none",
  },
  accordionProfile: {
    marginTop: "30px",
    textAlign: "center",
    borderRadius: "0"
  },
  accordionChart: {
    "& p": {
      marginTop: "0px",
      paddingTop: "0px",
    },
  },
};

export default accordionStyle;
