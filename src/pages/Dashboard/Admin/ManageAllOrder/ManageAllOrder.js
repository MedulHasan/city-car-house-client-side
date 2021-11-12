import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import swal from 'sweetalert';
import Order from '../../../../utils/Order';

const ManageAllOrder = () => {
    const [allOrder, setAllOrder] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8888/allOrder`)
            .then(res => res.json())
            .then(data => {
                setAllOrder(data);
            })
    }, [allOrder]);

    const handleDeleteItem = (id) => {
        swal({
            title: "Are you sure you want to delete this order?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:8888/deleteOrder/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then({})
                } else {
                }
            });
    };

    const handleStatus = (id) => {
        fetch(`http://localhost:8888/status/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'shipped' })
        })
    }

    return (
        <Box>
            <Typography>All Orders</Typography>
            <hr />
            <Grid container spacing={3}>
                {
                    allOrder.map(order => <Order key={order._id} order={order} handleDeleteItem={handleDeleteItem} handleStatus={handleStatus} />)
                }
            </Grid>
        </Box>
    );
};

export default ManageAllOrder;