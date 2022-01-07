import { makeStyles } from "@material-ui/core/styles";
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import image from 'assets/img/back-my-project/GumballThumbnail.png'

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    color: '#fff',
    marginTop: '10px',
    '& p': {
      margin: 0
    },
    '& button': {
      textTransform: 'none',
      width: '80%'
    }
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    minHeight: '187px',
  },
  mainPara: {
    margin: '0px!important',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '22px',
    marginTop: '10px!important',
  },
  backed: {
    color: '#2FD384',
    fontSize: '16px',
    lineHeight: '18px',
    marginTop: '12px!important',
    
  },
  chip: {
    background: '#5A27E7',
    borderRadius: '100px',
    fontSize: '14px',
    lineHeight: '14px',
    display: 'inline-block',
    margin: '12px 0px!important',
    height: '25px',
    padding: '5px 10px',
    '& svg': {
      verticalAlign: 'middle'
    }
  },
  caption: {
    fontSize: '14px',
    lineHeight: '14px',
    color: '#999CA0',
    marginTop: '5px!important',
  }
}));

export default function BackMyProject() {
  const classes = useStyles();
  return (
    <div className={classes.mainWrapper}>
      <GridContainer>
        <GridItem xs={5}>
          <img src={image} alt="Images" className={classes.image} />
        </GridItem>
        <GridItem xs={7}>
          <div className={classes.contentWrapper}>
            <p className={classes.mainPara}>Help me attend the Gumball 3000</p>
            <p className={classes.caption}>I will post daily videos only for you!</p>
            <p className={classes.backed}><strong>$10,000</strong> pledged of $15,000</p>
            <p className={classes.chip}><AccessTimeIcon /> <span><strong>41 days</strong> to go</span></p>
            <div>
              <Button round size='md' color='primary'>Back It</Button>
            </div>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  )
}