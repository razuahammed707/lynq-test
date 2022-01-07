import { hexToRgb, blackColor } from "assets/jss/nextjs-material-dashboard.js";

const cardAvatarStyle = {
  cardAvatar: {
    "&$cardAvatarProfile img": {
      width: "100%",
      height: "auto",
    },
  },
  cardAvatarProfile: {
    maxWidth: "81px",
    maxHeight: "81px",
    margin: "-74px auto 0",
    borderRadius: "10%",
    overflow: "hidden",
    padding: "0",
    boxShadow:
      "0 16px 38px -12px rgba(" +
      hexToRgb(blackColor) +
      ", 0.56), 0 4px 25px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2)",
    "&$cardAvatarPlain": {
      marginTop: "0",
    },
  },
  cardAvatarPlain: {},
};

export default cardAvatarStyle;
