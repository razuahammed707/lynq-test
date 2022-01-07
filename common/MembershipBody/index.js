import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  membershipMainWrapper: {
    margin: 'auto',
    textAlign: 'center',
    marginTop: '1.5em'
  },
  
  membershipWrapper: {
    border: '2px solid #4CC9F0',
    borderRadius: '5px',
    width: '108px',
    height: '81px',
    color: '#4CC9F0',
    cursor: 'pointer',
    minHeight: "82px",
    verticalAlign: "middle",
    [theme.breakpoints.down("sm")]: {
      width: '80px'
    },
    '&:hover, &.activeWrapper': {
      color: '#fff',
      background: '#4CC9F0'
    },
    '& p': {
      margin: '0'
    },
    display: 'inline-block',
    marginRight: '12px'
  },
  price: {
    
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '19px',
    textAlign: 'center',
    marginTop: '12px!important',
  },
  duration: {
    textAlign: 'center',
    fontSize: '12px',
    lineHeight: '15px'
  },
  save: {
    color: '#FBFF12',
    borderRadius: '3px',
    display: 'inline-block',
    margin: 'auto',
    textTransform: 'uppercase',
    fontSize: '10px',
    lineHeight: '12px',
    backgroundColor: 'rgba(251, 255, 18, 0.1)',
    padding: '3px'
  },
  title: {
    fontSize: '24px',
    lineHeight: '30px',
    fontWeight: 'bold',
    margin: 0,
    padding: 0,
    marginBottom: '22px'
  },
  cancel: {
    color: '#999CA0',
    fontSize: '12px',
    lineHeight: '12px',
    textAlign: 'center',
    marginTop: '32px'
  }
}));

function MembershipBody({ getPriceValue }) {
  const classes = useStyles();
  const [price, setPrice] = useState();
  const toggleClass = (price) => {
    setPrice(price)
    getPriceValue(price)
  }
  return (
    <div className={classes.membershipMainWrapper}>
      <h1 className={classes.title}>Select your membership</h1>
      <div>
      <div className={`${classes.membershipWrapper} ${price === 30 ? 'activeWrapper' : ''}`} onClick={() => toggleClass(30)} >
        <p className={classes.price}>$30.00</p>
        <p className={classes.duration}>per month</p>
      </div>
      <div className={`${classes.membershipWrapper} ${price === 60 ? 'activeWrapper' : ''}`} onClick={() => toggleClass(60)} >
        <p className={classes.price}>$60.00</p>
        <p className={classes.duration}>per month</p>
        <p className={classes.save}>save %33</p>
      </div>
      <div className={`${classes.membershipWrapper} ${price === 144 ? 'activeWrapper' : ''}`} onClick={() => toggleClass(144)} >
        <p className={classes.price}>$30.00</p>
        <p className={classes.duration}>per month</p>
        <p className={classes.save}>save %33</p>
      </div>
      </div>
      <p className={classes.cancel}>Cancel anytime</p>
    </div>
  );
}

export default MembershipBody;
