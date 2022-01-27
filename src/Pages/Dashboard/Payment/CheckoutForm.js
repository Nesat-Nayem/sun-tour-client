import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button, CircularProgress, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const CheckoutForm = ({ payment }) => {
  const { price, name, _id } = payment;
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      setSuccess("");
    } else {
      setError("");
      console.log(paymentMethod);
    }

    // payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: user.email,
          },
        },
      });
    if (intentError) {
      setError(intentError.message);
    } else {
      setProcessing(false);
      setSuccess("Your Payment Successfully");
      setError("");
      // console.log(paymentIntent);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {/* {processing ?
                    <CircularProgress color="success" />

                    : */}
        <Button
          type="submit"
          disabled={!stripe}
          variant="contained"
          sx={{ margin: "5px" }}
        >
          Pay ${price}
        </Button>
        {/* } */}
      </form>
      {error && (
        <Typography variant="h6" sx={{ color: "red" }}>
          {error}
        </Typography>
      )}
      {success && (
        <Typography variant="h6" sx={{ color: "green" }}>
          {success}
        </Typography>
      )}
    </div>
  );
};

export default CheckoutForm;
