import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";

import { selectCartTotal } from "../../store/cart/cart.selector";

import { Button, Box } from "@mui/material";

import "./payment-form.scss";

const PaymentForm = () => {
  const cartTotal = useSelector(selectCartTotal);

  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: 10000,
      }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    console.log(client_secret);

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        // billing_details: {
        //   name: "Steven",
        // },
      },
    });

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else if (paymentResult.paymentIntent.status === "succeeded") {
      alert("Payment Successful");
    }
  };

  return (
    <Box className="payment-container" boxShadow={3}>
      <form onSubmit={paymentHandler} className="payment-form-container">
        <label className="payment-label" htmlFor="card-element">
          Credit Card
        </label>
        <CardElement id="card-element" />
        <Button
          type="submit"
          sx={{ marginTop: "0.5rem" }}
          variant="outlined"
          size="small"
        >
          Pay ${cartTotal}
        </Button>
      </form>
    </Box>
  );
};

export default PaymentForm;
