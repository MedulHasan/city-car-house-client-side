import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { BsFillAwardFill } from 'react-icons/bs';
import { FaCarSide } from 'react-icons/fa';
import { GiCartwheel } from 'react-icons/gi';

const bestBrandIcon = {
    fontSize: '38px',
    fontWeight: 600,
    color: '#E43B47'
}
const bestBrandTitle = {
    fontSize: '24px',
    fontWeight: 500
};
const bestBrandText = {
    fontSize: '30px',
    fontWeight: 600
}

const BestBrand = () => {
    return (
        <>
            <hr style={{ margin: '0 7%' }} />
            <Box style={{ margin: '3% 7%' }}>
                <Typography style={{
                    textAlign: 'center',
                    fontSize: '34px',
                    fontWeight: '600'
                }}>Every day we help the world’s leading brands <br /> create their most vehicles</Typography>
                <hr style={{ width: '100px', marginBottom: '80px', height: '2px', background: '#000' }} />
                <Grid container spacing={8}>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
                                <BsFillAwardFill style={bestBrandIcon} />
                                <Typography style={bestBrandTitle}>Total Awards</Typography>
                                <Typography style={bestBrandText}>32</Typography>
                            </Grid>
                            <Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
                                <FaCarSide style={bestBrandIcon} />
                                <Typography style={bestBrandTitle}>Car Sold Month</Typography>
                                <Typography style={bestBrandText}>1200</Typography>
                            </Grid>
                            <Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
                                <GiCartwheel style={bestBrandIcon} />
                                <Typography style={bestBrandTitle}>Available Brands</Typography>
                                <Typography style={bestBrandText}>20</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography>
                            Along with 1000s of cars to choose from, you can apply for finance online and value your existing car all from the comfort of your favourite armchair

                            In line with our commitment to treating customers fairly, you can find more information about Charles Hurst complaints policy here
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default BestBrand;