import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useAuth from "../../hooks/useAuth";
import { Container } from "@mui/material";

const stripePromise = loadStripe(
  "pk_test_51JwCt5Hck8KbGWQKzdsGm8EV0mQygETYpOCGo17U8mQxGmZ8cjyneCsEY6P2FL4drRqfM9lkzSFv0RnEUGIeXymG00AKuCVEyL"
);

const Payment = () => {
  const { paymentID } = useParams();
  const [payment, setPayment] = useState({});
  console.log(paymentID);
  const { isLoading } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/payment/${paymentID}`)
      .then((res) => res.json())
      .then((data) => setPayment(data));
  }, [paymentID]);

  return (
    <Container>
      <h2>User Name: {payment?.name}</h2>
      <h5>Payment For: {payment?.serviceName} service</h5>
      <p>Total amount: ${payment?.price}</p>
      <p>Payment Date: {payment?.date}</p>

      {/* {
                isLoading && 
                 */}
      <Elements stripe={stripePromise}>
        <CheckoutForm payment={payment} />
      </Elements>

      {/* }  */}
    </Container>
  );
};

export default Payment;
