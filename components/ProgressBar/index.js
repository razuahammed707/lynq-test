import * as React from 'react';
import { useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


const useStyles = makeStyles((theme) => ({
  progressWrapper: {
    '& .MuiMobileStepper-root': {
      backgroundColor: 'transparent'
    },
    '& .MuiMobileStepper-progress': {
      height: '8px',
      borderRadius: '100px',
      width: '100%'
    },
    '& .MuiLinearProgress-barColorPrimary': {
      background: '#2FD384',
      borderRadius: '100px',
      height: '8px'
    }
  }
}))

export default function ProgressBar() {
  // const theme = useTheme();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(4);


  return (
    <div className={classes.progressWrapper}>
    <MobileStepper
      variant="progress"
      steps={6}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 500, flexGrow: 1 }}
      color="primary"
      // nextButton={}
    />
    </div>
  );
}