import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import banner1 from '../../../image/banner/banner1.jpg';

const Banner = () => {
    return (
        <Box>
            <img style={{ opacity: 1 }} width="100%" src={banner1} alt="" />
            <Box
                sx={{
                    mt: '-100px',
                    mx: '20%'
                }}>
                <Typography variant="body1">120+ CARS TYPE & BRANDS</Typography>
                <Typography variant="h5">Search Your <span>Best Cars</span></Typography>
            </Box>
        </Box>
    );
};

export default Banner;