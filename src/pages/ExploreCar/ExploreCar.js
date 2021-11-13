import React, { useEffect, useState } from 'react';
import SingleCar from '../Home/BestSellers/SingleCar';
import { CircularProgress } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import { Box } from '@mui/system';
import Footer from '../../Shared/Footer/Footer';

const ExploreCar = () => {
    const [exploreCars, setExploreCars] = useState([]);
    const { isLoading, setIsLoading, setManageProduct } = useAuth();

    useEffect(() => {
        setIsLoading(true);
        fetch('https://city-car-house.herokuapp.com/cars/bestCars/0')
            .then(res => res.json())
            .then(data => {
                setExploreCars(data);
                setIsLoading(false);
                setManageProduct(false);
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
            <Footer />
        </div>
    );
};

export default ExploreCar;