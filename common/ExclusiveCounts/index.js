import { makeStyles } from "@material-ui/core/styles";

import ImageIcon from '@material-ui/icons/Image';
import VideocamIcon from '@material-ui/icons/Videocam';
import ReplayIcon from '@material-ui/icons/Replay';

const styles = {
  header: {
    margin: 'auto',
    marginBottom: '10px',
    '& p': {
      margin: 0,
      display: "inline-block",
      marginRight: '8px',
      '& span': {
        fontSize: "12px",
        color: '#999CA0'
      }
    },
    '& svg': {
      verticalAlign: "middle",
      height: '18px',
      marginRight: '-5px',
      '& path': {
        fill: '#999CA0'
      }
    }
  },
}

export default function ExclusiveCount() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <p><ImageIcon /> <span>21</span></p>
      <p><VideocamIcon /> <span>8</span></p>
      <p><ReplayIcon /> <span>3 days</span></p>
    </div>
  )
} 