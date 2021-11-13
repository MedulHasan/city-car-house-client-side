import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';
import swal from 'sweetalert';
import Order from '../../../../utils/Order';

const MyOrders = () => {
    const [myOrder, setMyOrder] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://city-car-house.herokuapp.com/myOrder/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyOrder(data);
            })
    }, [user.email, myOrder]);

    //
    const handleDeleteItem = (id) => {
        swal({
            title: "Are you sure you want to delete this order?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    // swal("Poof! Your imaginary file has been deleted!", {
                    //     icon: "success",
                    // });
                    fetch(`https://city-car-house.herokuapp.com/deleteOrder/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then({})
                } else {
                    // swal("Your imaginary file is safe!");
                }
            });
    };

    return (
        <Box>
            <Typography>My Order</Typography>
            <hr />
            <Grid container spacing={3}>
                {
                    myOrder.map(order => <Order key={order._id} order={order} handleDeleteItem={handleDeleteItem} />)
                }
            </Grid>
        </Box>
    );
};

export default MyOrders;