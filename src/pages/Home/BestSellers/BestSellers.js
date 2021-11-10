import { Typography, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const BestSellers = () => {
    const [bestCarSell, setBestCarSell] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8888/cars/bestCars')
            .then(res => res.json())
            .then(data => setBestCarSell(data))
    }, []);


    return (
        <Box>
            <Box sx={{ mt: '100px', py: '80px', width: '300px' }}>
                <Typography variant="h5" sx={{ fontWeight: 900, fontSize: '34px' }}>BEST SELLERS</Typography>
                <Typography variant="body1" sx={{ fontSize: '20px', color: '#969696' }}>Available models of electric cars</Typography>
                <hr style={{ width: '200px', height: '2px', background: '#000' }} />
            </Box>
            {
                bestCarSell.map((bestCar) =>
                    <Box key={bestCar._id}>
                        <Box style={{
                            display: 'flex',
                            // background: '#F4F4F4',
                            padding: '15px 12%',
                            columnGap: '30px',
                            alignItems: 'center'
                        }}>
                            <img style={{ width: '100px' }} src={bestCar.carLogo} alt="" />
                            <Typography variant="h5" sx={{ fontWeight: 900, fontSize: '28px' }}>{bestCar.carBrand}</Typography>
                            <Typography variant="h5" sx={{ fontWeight: 400, fontSize: '28px', color: '#414141' }}>{bestCar.carQuote}</Typography>
                        </Box>
                        <Grid container>
                            <Grid item xs={12} md={5}>
                                <img src={bestCar.carImage} alt="" />
                            </Grid>
                            <Grid item xs={12} md={7}>Details</Grid>
                        </Grid>
                    </Box>
                )
            }
        </Box>
    );
};

export default BestSellers;