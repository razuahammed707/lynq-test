import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Container from '@material-ui/core/Container';
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import ProgressBar from 'components/ProgressBar/index.js';

import image from 'assets/img/back-my-project/inner-image.png'
import image2 from 'assets/img/back-my-project/image-inner-2.png'

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    color: '#fff',
    marginTop: '10px',
    '& p': {
      margin: 0,
      color: '#BEC2C9',
      fontSize: '16px',
      lineHeight: '22px',
      marginBottom: '12px',
    },
    '& button': {
      textTransform: 'none',
      width: '100%'
    }
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  backProject: {
    fontSize: '12px!important',
    color: '#BEC2C9',
    textTransform: 'uppercase'
  },
  title: {
    fontSize: '24px',
    lineHeight: '30px',
    fontWeight: 'bold',
    margin: 0,
    padding: 0,
    marginBottom: '12px'
  },
  chip: {
    background: '#5A27E7',
    borderRadius: '100px',
    fontSize: '14px',
    lineHeight: '14px',
    display: 'inline-block',
    margin: '24px 0px!important',
    height: '25px',
    padding: '5px 10px',
    '& svg': {
      verticalAlign: 'middle'
    }
  },
  mainPrice: {
    fontSize: '20px!important',
    lineHeight: '10px!important',
    fontWeight: 'bold',
    color: '#2FD384!important',
    margin: '0px!important',
    marginTop: '1em!important'
  },
  number: {
    fontSize: '20px!important',
    lineHeight: '10px!important',
    fontWeight: 'bold',
    margin: '0px!important',
    marginTop: '1em!important'
  },
  caption: {
    fontSize: '12px',
    lineHeight: '14px',
    color: '#999CA0'
  }
}));

export default function BackMyProjectInnerPage() {
  const classes = useStyles();
  return (
    <div className={classes.mainWrapper}>
      <Container maxWidth='md'>
        <GridContainer>
          <GridItem xs={7}>
            <img src={image} alt="Images" className={classes.image} />
            <p className={classes.backProject}>Back My Project</p>
            <h1 className={classes.title}>Reinventing the Flipbook - A Fun Coloring Flipbook</h1>
            <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>

            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>

            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            <img src={image2} alt="Images" className={classes.image} />
          </GridItem>
          <GridItem xs={5}>
            <div className={classes.contentWrapper}>
              <ProgressBar />
              <GridContainer>
                <GridItem xs={6}>
                  <p className={classes.mainPrice}>$785 <small><small>(78.5%)</small></small></p>
                  <span className={classes.caption}>pledged of $1,000</span>
                </GridItem>
                <GridItem xs={6}>
                  <p className={classes.number}>18</p>
                  <span className={classes.caption}>backers</span>
                </GridItem>
              </GridContainer>
              <p className={classes.chip}><AccessTimeIcon /> <span><strong>2 days</strong> to go</span></p>
              <div>
                <Button round size='md' color='primary'>Back It</Button>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </Container>
    </div>
  )
}
