import { Typography, Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AiFillCar } from 'react-icons/ai';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';
import SingleCar from './SingleCar';

const BestSellers = () => {
    const history = useHistory();
    const [bestCarSell, setBestCarSell] = useState([]);
    const { isLoading, setIsLoading } = useAuth();

    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:8888/cars/bestCars/6')
            .then(res => res.json())
            .then(data => {
                setBestCarSell(data);
                setIsLoading(false);
            })
    }, []);

    const handleMoreDataLoad = () => {
        history.push('/exploreCar')
    }

    if (isLoading) {
        return <Box style={{
            marginTop: '10%',
            width: '100%',
            textAlign: 'center'
        }}><CircularProgress /></Box>
    }

    return (
        <Box sx={{ pb: 5 }}>
            <Box sx={{ mt: '100px', py: '50px', pl: '12%', width: '300px' }}>
                <Typography variant="h5" sx={{ fontWeight: 900, fontSize: '34px' }}>BEST SELLERS</Typography>
                <Typography variant="body1" sx={{ fontSize: '20px', color: '#969696' }}>Available models of electric cars</Typography>
                <hr style={{ width: '100px', textAlign: 'left', marginLeft: '0px', height: '2px', background: '#000' }} />
            </Box>
            {
                bestCarSell.map((bestCar) => <SingleCar key={bestCar._id} bestCar={bestCar} />)
            }
            <Box style={{
                marginTop: '20px',
                width: '100%',
                textAlign: 'center'
            }}>
                <Button onClick={handleMoreDataLoad} variant="outlined">Show More Cars</Button>
            </Box>
        </Box>
    );
};

export default BestSellers;