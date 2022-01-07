import {
  drawerWidth,
  transition,
  container,
} from "assets/jss/nextjs-material-dashboard.js";

const appStyle = (theme) => ({
  wrapper: {
    position: "relative",
    top: "0",
    width: "100%",
    textAlign: "center",
    '& .MuiGrid-container': {
      '& .MuiGrid-item': {
        padding: '0!important',
      }
    }
  },
  imageContainer: {
    position: "relative",
    marginBottom: '-6px',
    '& img': {
      maxHeight: '100%',
      maxWidth: '100%',
      '&:last-child': {
        position: 'absolute',
        height: '40px',
        marginTop: '-32px',
        top: '50%',
        left: 0,
        right: 0,
        margin: 'auto'
      }
    }
  },
  centerContent: {
    position: 'absolute',
        height: '40px',
        marginTop: '-32px',
        top: '50%',
        left: 0,
        right: 0,
        margin: 'auto'
  },
  container,
  map: {
    marginTop: "70px",
  },
});

export default appStyle;
