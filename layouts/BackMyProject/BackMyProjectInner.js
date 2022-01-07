import { makeStyles } from "@material-ui/core/styles";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import image from 'assets/img/back-my-project/image.png'
import Admin from "layouts/Admin.js";
import Header from "common/Header";
import BackMyProjectInnerPage from 'common/BackMyProjectInnerPage'


const useStyles = makeStyles((theme) => ({
 
}));

export default function BackMyProjectInner() {
  const classes = useStyles();
  return (
    <div className={classes.mainWrapper}>
      <Header extraStyle={classes.extraStyle} />
      <BackMyProjectInnerPage />
    </div>
  )
}

BackMyProjectInner.layout = Admin;