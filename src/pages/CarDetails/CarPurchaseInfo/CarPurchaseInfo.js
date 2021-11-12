import React, { useState } from 'react';
import { Grid, Typography, Box, TextField, Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const styleTextField = {
    marginBottom: '15px',
}

const CarPurchaseInfo = ({ carDetails }) => {
    const { user } = useAuth();
    const initialInfo = { name: user.displayName, email: user.email, phone: '' }
    const [addOrder, setAddOrder] = useState(initialInfo);

    const handleCarInfo = (e) => {
        let newData = { ...addOrder };
        newData.carId = carDetails._id;
        newData[e.target.name] = e.target.value;
        setAddOrder(newData)
    };

    const handlePlaceOrderSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8888/customerOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // setAlertSuccessMessage(true);
                } else {
                    // setAlertErrorMessage(true)
                }
            })
            .catch((err) => {
            })
    }
    return (
        <Box>
            <Box style={{
                marginBottom: '15px',
                marginLeft: '30px',
                fontSize: '40px',
                fontWeight: '500',

                width: '127px',
                padding: '5px 0px',
                marginTop: '25px',
            }}>
                <Typography variant="h5" sx={{ px: 2 }} style={{ background: '#FDCE00', color: '#fff' }} ><span style={{ borderRight: '1px solid white', paddingRight: '6px' }}>$</span> {carDetails.price}</Typography>
                <Typography style={{ fontSize: '9px', textAlign: 'right', marginTop: '5px' }}>INCLUDE TAX & CHECKUP</Typography>
            </Box>
            <Box>
                <Typography style={{ fontSize: '24px', fontWeight: 600, marginBottom: '15px' }}>Order This Car</Typography>
                <form onSubmit={handlePlaceOrderSubmit}>
                    <TextField style={styleTextField} onBlur={handleCarInfo} type="text" name="name" defaultValue={user.displayName} label="Name" variant="standard" />
                    <br />
                    <TextField style={styleTextField} onBlur={handleCarInfo} type="email" name="email" defaultValue={user.email} label="Email Address" variant="standard" />
                    <br />
                    <TextField style={styleTextField} onBlur={handleCarInfo} type="text" name="phone" label="Phone Number" variant="standard" required />
                    <br />
                    <TextField style={styleTextField} onBlur={handleCarInfo} type="text" name="address" label="Address" variant="standard" required />
                    <br />
                    <TextField style={styleTextField} onBlur={handleCarInfo} type="text" name="price" defaultValue={carDetails.price} label="Price in $" variant="standard" />
                    <br />
                    <TextField style={styleTextField} onBlur={handleCarInfo} type="date" name="date" label="" variant="standard" required />
                    <br />
                    <Button sx={{ mt: 2 }} type="submit" variant="outlined">Place Order</Button>
                </form>
            </Box>
        </Box>
    );
};

export default CarPurchaseInfo;