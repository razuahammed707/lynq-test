import {
  drawerWidth,
  transition,
  container,
} from "assets/jss/nextjs-material-dashboard.js";

const appStyle = (theme) => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh",
  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {
      // width: `calc(100% - ${drawerWidth}px)`,
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch",
  },
  content: {
    marginTop: "70px",
    padding: "0px",
    minHeight: "calc(100vh - 123px)",
    background: '#101011'
  },
  container,
  map: {
    marginTop: "70px",
  },
});

export default appStyle;
