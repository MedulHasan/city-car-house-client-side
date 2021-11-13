import React, { useState } from 'react';
import { Typography, Box, Grid, Alert, IconButton } from '@mui/material';
import Navigation from '../../../Shared/Navigation/Navigation';
import banner2 from '../../../image/banner/banner2.jpg';
import CarInfo from '../CarInfo/CarInfo';
import CarPurchaseInfo from '../CarPurchaseInfo/CarPurchaseInfo';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from 'react-router';
import Footer from '../../../Shared/Footer/Footer';

const bannerImgSty = {
    width: "100%",
    position: 'relative',
    filter: 'brightness(45%)',
};

const bannerTextStyle = {
    color: '#FFCC00',
    position: 'absolute',
    top: '15%',
    left: '25%',
    transform: 'translate(50%, 50%)',
    fontSize: '46px',
    fontWeight: 700,
}

const CarDetails = () => {
    const [alertSuccessMessage, setAlertSuccessMessage] = useState(false);
    const location = useLocation();
    return (
        <Box>
            <Navigation />
            <Box>
                <img style={bannerImgSty} src={banner2} alt="" />
                <Typography style={bannerTextStyle}>CITY CAR HOUSE</Typography>
            </Box>
            <Box style={{ padding: '5% 10%', background: '#F8F4D9' }}>
                {alertSuccessMessage &&
                    <Alert
                        severity="success"
                        style={{ marginBottom: '20px' }}
                        action={
                            <IconButton
                                aria-label="close"
                                onClick={() => setAlertSuccessMessage(false)}
                            >
                                <CloseIcon />
                            </IconButton>
                        }
                    >
                        <Typography>Successfully Complete Your Order!</Typography>

                    </Alert>}
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={8}>
                        <CarInfo carDetails={location.state.from} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <CarPurchaseInfo carDetails={location.state.from} setAlertSuccessMessage={setAlertSuccessMessage} />
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </Box>
    );
};

export default CarDetails;