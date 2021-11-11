import { Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleCar from './SingleCar';

const BestSellers = () => {
    const [bestCarSell, setBestCarSell] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8888/cars/bestCars/3')
            .then(res => res.json())
            .then(data => setBestCarSell(data))
    }, []);

    return (
        <Box>
            <Box sx={{ mt: '100px', py: '50px', pl: '12%', width: '300px' }}>
                <Typography variant="h5" sx={{ fontWeight: 900, fontSize: '34px' }}>BEST SELLERS</Typography>
                <Typography variant="body1" sx={{ fontSize: '20px', color: '#969696' }}>Available models of electric cars</Typography>
                <hr style={{ width: '100px', textAlign: 'left', marginLeft: '0px', height: '2px', background: '#000' }} />
            </Box>
            {
                bestCarSell.map((bestCar) => <SingleCar bestCar={bestCar} />)
            }
        </Box>
    );
};

export default BestSellers;