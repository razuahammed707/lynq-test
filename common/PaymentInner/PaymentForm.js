import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import { loadStripe } from '@stripe/stripe-js';
import Button from "components/CustomButtons/Button.js";
import { makeStyles } from "@material-ui/core/styles";

import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    position: 'fixed',
    bottom: '0',
    background: '#101011',
    boxShadow: '0px 0px 25px rgb(0 0 0 / 75%)',
    left: '0',
    right: '0',
    textAlign: 'center',
    borderTop: '1pt solid #393B3F',
    height: '99px',
    width: '100%',
    '& button': {
      marginTop: '30px',
      width: '90%',
      maxWidth: '345px'
    }
  }
}))

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const classes = useStyles();

  // stripe styling
  const useOptions = () => {
    const options = useMemo(
      () => ({
        style: {
          base: {
            backgroundColor: "#393B3F",
            padding: "10px",
            color: "#424770",
            letterSpacing: "0.025em",
            color: "white",
            height: '60px',
            "::placeholder": {
              color: "#999CA0",
            },
          },
          invalid: {
            color: "#9e2146",
          },
        },
      }),
      [],
    );

    return options;
  };

  const options = useOptions();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={options} />
      <div className={classes.buttonWrapper}>
        <Button round size="md" color="primary" type="submit" disabled={!stripe || !elements}>
          Pay $60
        </Button>
      </div>
    </form>
  );
};

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_SECRET);

const PaymentForm = () => (
  <>
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  </>
);

export default PaymentForm;