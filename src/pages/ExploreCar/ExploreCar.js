import React, { useEffect, useState } from 'react';
import SingleCar from '../Home/BestSellers/SingleCar';
import { CircularProgress } from '@mui/material';
import useAuth from '../../hooks/useAuth';

const ExploreCar = () => {
    const [exploreCars, setExploreCars] = useState([]);
    const { isLoading, setIsLoading } = useAuth();

    useEffect(() => {
        fetch('http://localhost:8888/cars/bestCars/0')
            .then(res => res.json())
            .then(data => {
                setExploreCars(data);
                setIsLoading(false)
            })
    }, [setIsLoading]);

    if (isLoading) {
        return <CircularProgress />
    }
    return (
        <div>
            {
                exploreCars.map((bestCar) => <SingleCar bestCar={bestCar} />)
            }
        </div>
    );
};

export default ExploreCar;