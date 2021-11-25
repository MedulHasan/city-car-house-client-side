import React, { useEffect, useState } from "react";
import {
    useStripe,
    useElements,
    CardElement,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
} from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import useAuth from "../../../hooks/useAuth";
import { CircularProgress } from "@mui/material";

const CheckoutForm = ({ carInfo }) => {
    const { user } = useAuth();
    const { price } = carInfo;
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8888/create-payment-intent", {
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

        if (card == null) {
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

        const { paymentIntent, intentError } = await stripe.confirmCardPayment(
            "{PAYMENT_INTENT_CLIENT_SECRET}",
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user.email,
                    },
                },
            }
        );

        if (intentError) {
            setError(intentError.message);
            setSuccess("");
            setProcessing(false);
        } else {
            setError("");
            setSuccess("Your payment process successfully");
            setProcessing(false);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className='card-box'>
                <div className='card-element'>
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
                </div>
                {/* <div className='expire-card'>
                    <div className='card-exp'>
                        <CardExpiryElement
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
                    </div>
                    <div className='card-exp'>
                        <CardCvcElement
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
                    </div>
                </div> */}

                {processing ? (
                    <CircularProgress />
                ) : (
                    <button type='submit' disabled={!stripe || success}>
                        Pay
                    </button>
                )}
                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{success}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;
