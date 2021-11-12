import React from 'react';
import { Button, Grid, Box, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../hooks/useAuth';

const Order = ({ order, handleDeleteItem, handleStatus }) => {
    const { admin } = useAuth();
    return (
        <Grid item xs={12} sm={6} md={4}>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">Name: </TableCell>
                            <TableCell >{order.name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Email: </TableCell>
                            <TableCell >{order.email}</TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell component="th" scope="row">Phone: </TableCell>
                            <TableCell >{order.phone}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Address: </TableCell>
                            <TableCell>{order.address}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Car Model: </TableCell>
                            <TableCell >{order.carModel}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Price: </TableCell>
                            <TableCell >$ {order.price}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Date: </TableCell>
                            <TableCell >{order.date}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Button onClick={() => handleDeleteItem(order._id)} sx={{ color: 'red', m: 1, border: '1px solid' }}>Cancel Order</Button>
                    {
                        admin ? (
                            <Button onClick={() => handleStatus(order._id)} sx={{ m: 1, border: '1px solid' }} disabled={order.status ? true : false}>
                                {
                                    order.status ? 'Approved' : 'Approve'
                                }
                            </Button>
                        ) : (
                            <Typography sx={{ mr: 3, padding: '5px', background: `${order.status ? '#18D2AF' : 'red'}`, color: '#fff', borderRadius: '5px' }}>{order.status || 'pending'}</Typography>
                        )
                    }
                </Box>
            </TableContainer>
        </Grid>
    );
};

export default Order;