import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { AiFillCreditCard } from "react-icons/ai";
import { useParams } from "react-router";
import "./Payment.css";

// payment
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
    "pk_test_51JvuqtDIBQXTyseWr2DBmTUEHU92dHY7QtS5XvXUDxRVJynMuLObBvZ4kn6pVSGqOglelW0HBDnVcO7nopGQ75W700RHLvvfFJ"
);

const Payment = () => {
    const [carInfo, setCarInfo] = useState({});
    const { carId } = useParams();
    useEffect(() => {
        fetch(`https://city-car-house.herokuapp.com/payment/${carId}`)
            .then((res) => res.json())
            .then((data) => setCarInfo(data));
    }, [carId]);
    return (
        <Box sx={{ m: 5 }}>
            <div>
                <h2>Select Your Payment Method</h2>
                <Box className='payment-method'>
                    <Box className='payment-way'>
                        <AiFillCreditCard />
                        <Typography>credit/debit card</Typography>
                        {!carInfo.price ? (
                            <CircularProgress />
                        ) : (
                            <Elements stripe={stripePromise}>
                                <CheckoutForm carInfo={carInfo} />
                            </Elements>
                        )}
                    </Box>
                    <Box>
                        <Typography variant='h5'>Order Summary</Typography>
                        <Typography variant='body'>
                            Total Amount: ${carInfo.price}
                        </Typography>
                    </Box>
                </Box>
            </div>
        </Box>
    );
};

export default Payment;
