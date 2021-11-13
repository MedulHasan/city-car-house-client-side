import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FaCar, FaUsers } from 'react-icons/fa';
import { GiTusksFlag } from 'react-icons/gi';
import { AiOutlineSolution } from 'react-icons/ai';
import banner1 from '../../../image/banner/banner1.jpg';

const icons = {
    fontSize: '40px',
    marginRight: '10px'
};

const counter = {
    fontSize: '30px',
    fontWeight: '500'
};

const Banner = () => {
    return (
        <Box>
            <img width="100%" src={banner1} alt="" />
            <Box style={{
                background: '#FFCF00',
                padding: '30px',
                color: '#fff',
                marginTop: '-5px'
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <FaUsers style={icons} />
                        <Box>
                            <Typography style={counter}>1.12.700</Typography>
                            <Typography>HAPPY CUSTOMERS</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <FaCar style={icons} />
                        <Box>
                            <Typography style={counter}>1.12.700</Typography>
                            <Typography>CARS IN GARAGE</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <GiTusksFlag style={icons} />
                        <Box>
                            <Typography style={counter}>1.211.100</Typography>
                            <Typography>TOTAL KILOMETER/MIL</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <AiOutlineSolution style={icons} />
                        <Box>
                            <Typography style={counter}>1.12.700</Typography>
                            <Typography>CAR CENTER SOLUTION</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Banner;