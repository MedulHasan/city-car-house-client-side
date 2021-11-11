import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import Navigation from '../../../Shared/Navigation/Navigation';
import banner2 from '../../../image/banner/banner2.jpg';
import CarInfo from '../CarInfo/CarInfo';
import CarPurchaseInfo from '../CarPurchaseInfo/CarPurchaseInfo';
import { useLocation } from 'react-router';

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
    const location = useLocation();
    return (
        <Box>
            <Navigation />
            <Box>
                <img style={bannerImgSty} src={banner2} alt="" />
                <Typography style={bannerTextStyle}>CITY CAR HOUSE</Typography>
            </Box>
            <Grid container spacing={5} style={{ padding: '5% 10%', background: '#F8F4D9' }}>
                <Grid item xs={12} sm={8}>
                    <CarInfo carDetails={location.state.from} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <CarPurchaseInfo carDetails={location.state.from} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default CarDetails;