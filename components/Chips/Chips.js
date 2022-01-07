import { makeStyles } from "@material-ui/core/styles";
import Chip from '@material-ui/core/Chip';
// import Stack from '@material-ui/core/Stack';

const styles = {
  chipsContainer: {
    '& .MuiChip-root': {
      background: '#393B3F',
      borderRadius: '2px',
      marginRight: '6px',
      height: '17px',
      '&:last-child': {
        marginRight: '0px'
      },
      '& .MuiChip-label': {
        color: '#999CA0',
        fontSize: '11px',
        lineHeight: '13px'
      }
    }
  }
};

export default function Chips() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div className={classes.chipsContainer} direction="row" spacing={1}>
      <Chip label="Designers" />
      <Chip label="Creative" />
      <Chip label="Creative Business" />
    </div>
  );
}