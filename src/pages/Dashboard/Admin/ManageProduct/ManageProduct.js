import { CircularProgress, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import SingleCar from "../../../Home/BestSellers/SingleCar";

const ManageProduct = () => {
    const [exploreCars, setExploreCars] = useState([]);
    const { isLoading, setIsLoading, setManageProduct } = useAuth();

    useEffect(() => {
        // setIsLoading(true);
        fetch("https://city-car-house.herokuapp.com/cars/bestCars/0")
            .then((res) => res.json())
            .then((data) => {
                setExploreCars(data);
                setIsLoading(false);
                setManageProduct(true);
            });
    }, [setIsLoading, exploreCars, setManageProduct]);

    if (isLoading) {
        return (
            <Box
                style={{
                    marginTop: "10%",
                    width: "100%",
                    textAlign: "center",
                }}
            >
                <CircularProgress />
            </Box>
        );
    }
    return (
        <div>
            {exploreCars.map((bestCar) => (
                <SingleCar key={bestCar._id} bestCar={bestCar} />
            ))}
        </div>
    );
};

export default ManageProduct;
