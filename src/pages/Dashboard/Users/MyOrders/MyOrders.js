import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../../hooks/useAuth';

const MyOrders = () => {
    const [myOrder, setMyOrder] = useState([]);
    const [cars, setCars] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:8888/myOrder/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyOrder(data);
            })
    }, [user.email]);

    /* useEffect(() => {
        fetch(`http://localhost:8888/myOrder/${myOrder.carId}`)
            .then(res => res.json())
            .then(data => {
                setCars(data);
                console.log(data);
            })
    }, [myOrder]); */



    return (
        <Box>
            <Typography>Your Order</Typography>
            <hr />
            <Grid container spacing={3}>
                {
                    myOrder.map(order =>
                        <Grid key={order._id} item xs={12} sm={6} md={4}>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableBody>
                                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell component="th" scope="row">Name: </TableCell>
                                            <TableCell >{order.name}</TableCell>
                                        </TableRow>
                                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell component="th" scope="row">Email: </TableCell>
                                            <TableCell >{order.email}</TableCell>
                                        </TableRow>
                                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell component="th" scope="row">Phone: </TableCell>
                                            <TableCell >{order.phone}</TableCell>
                                        </TableRow>
                                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell component="th" scope="row">Address: </TableCell>
                                            <TableCell>{order.address}</TableCell>
                                        </TableRow>
                                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell component="th" scope="row">Date: </TableCell>
                                            <TableCell >{order.date}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    )
                }
            </Grid>
        </Box>
    );
};

export default MyOrders;