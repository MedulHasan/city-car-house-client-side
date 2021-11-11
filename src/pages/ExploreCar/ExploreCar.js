import React, { useEffect, useState } from 'react';
import SingleCar from '../Home/BestSellers/SingleCar';
import { CircularProgress } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import { Box } from '@mui/system';

const ExploreCar = () => {
    const [exploreCars, setExploreCars] = useState([]);
    const { isLoading, setIsLoading } = useAuth();

    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:8888/cars/bestCars/0')
            .then(res => res.json())
            .then(data => {
                setExploreCars(data);
                setIsLoading(false);
            })
    }, [setIsLoading]);

    if (isLoading) {
        return <Box style={{
            marginTop: '10%',
            width: '100%',
            textAlign: 'center'
        }}><CircularProgress /></Box>
    }
    return (
        <div>
            {
                exploreCars.map((bestCar) => <SingleCar key={bestCar._id} bestCar={bestCar} />)
            }
        </div>
    );
};

export default ExploreCar;