import React from 'react';
import { Grid, Button, Box, Typography } from '@mui/material';
import { GiRoad } from 'react-icons/gi';
import { BsSpeedometer2 } from 'react-icons/bs';
import { SiGodotengine } from 'react-icons/si';
import { MdBatteryCharging80 } from 'react-icons/md';
import { IoMdClock } from 'react-icons/io';
import { SiYamahamotorcorporation } from 'react-icons/si';
import { AiFillCar } from 'react-icons/ai';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import swal from 'sweetalert';


const spanItem = {
    fontSize: '30px',
    fontWeight: 700
};

const innerGridStyle = {
    display: 'flex',
    alignItems: 'center',
    columnGap: '10px'
}

const SingleCar = ({ bestCar }) => {
    const history = useHistory();
    const { manageProduct } = useAuth();

    const handleOrder = () => {
        history.push({
            pathname: '/carDetails',
            state: { from: bestCar }
        });
    };

    const handleDeleteItem = (id) => {
        swal({
            title: "Are you sure you want to delete this Car?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://city-car-house.herokuapp.com/deleteCar/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then({})
                } else {
                }
            });
    };

    return (
        <Box>
            <Box style={{
                display: 'flex',
                background: '#F4F4F4',
                padding: '15px 12%',
                columnGap: '30px',
                alignItems: 'center',
                height: '60px'
            }}>
                <img style={{ width: '80px' }} src={bestCar.carLogo} alt="" />
                <Typography variant="h5" sx={{ fontWeight: 900, fontSize: '28px' }}>{bestCar.carBrand}</Typography>
                <Box>
                    <Typography variant="h5" sx={{ fontWeight: 400, fontSize: '28px', color: '#414141' }}>{bestCar.carQuote}</Typography>
                    <Typography variant="h5" sx={{ fontWeight: 600, fontSize: '28px', color: '#FFCF00', }}>Price: $ {bestCar.price}</Typography>
                </Box>
            </Box>
            <Grid container spacing={3} style={{
                padding: '15px 12%',
                alignItems: 'center',
            }}>
                <Grid item xs={12} lg={5}>
                    <img width="400px" src={bestCar.carImage} alt="" />
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Typography style={{ fontWeight: 900, fontSize: '28px' }}>{bestCar.carModel}</Typography>
                    <hr style={{ width: '50px', textAlign: 'left', marginLeft: '0px', height: '1px', background: '#000' }} />
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={4} style={innerGridStyle}>
                            <GiRoad style={{ fontSize: '35px' }} />
                            <Typography variant="h6">
                                TO<span style={spanItem}> {bestCar.powerReserve} </span>MI
                                <Typography sx={{ color: '#848484' }}>Power reserve</Typography>
                            </Typography>
                        </Grid >
                        <Grid item xs={12} sm={4} style={innerGridStyle}>
                            <BsSpeedometer2 style={{ fontSize: '35px' }} />
                            <Typography variant="h6">
                                <span style={spanItem}>{bestCar.maxSpeed} </span>KM/H
                                <Typography sx={{ color: '#848484' }}>Max speed</Typography>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} style={innerGridStyle}>
                            <SiGodotengine style={{ fontSize: '35px' }} />
                            <Typography variant="h6">
                                <span style={spanItem}>{bestCar.enginePower} </span>HP
                                <Typography sx={{ color: '#848484' }}>Engine power</Typography>
                            </Typography>
                        </Grid >
                        <Grid item xs={12} sm={4} style={innerGridStyle}>
                            <MdBatteryCharging80 style={{ fontSize: '35px' }} />
                            <Typography variant="h6">
                                <span style={spanItem}>{bestCar.battery} </span>KW/H
                                <Typography sx={{ color: '#848484' }}>Battery</Typography>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} style={innerGridStyle}>
                            <IoMdClock style={{ fontSize: '35px' }} />
                            <Typography variant="h6">
                                <span style={spanItem}>{bestCar.speedUpTo100} </span>S
                                <Typography sx={{ color: '#848484' }}>Speed-up to 100 KM</Typography>
                            </Typography>
                        </Grid >
                        <Grid item xs={12} sm={4} style={innerGridStyle}>
                            <SiYamahamotorcorporation style={{ fontSize: '35px' }} />
                            <Typography variant="h6">
                                <span style={spanItem}>{bestCar.electricMotor} </span>KW
                                <Typography sx={{ color: '#848484' }}>Electric motor</Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                    {
                        manageProduct ? (
                            <Button
                                onClick={() => handleDeleteItem(bestCar._id)}
                                sx={{
                                    mt: 5,
                                    ml: 5,
                                    background: 'red',
                                    '&:hover': {
                                        background: "#000",
                                    },
                                    color: '#fff',
                                    border: 'none',
                                    padding: 0,
                                    borderRadius: 0,
                                }}
                                variant="contained">
                                <span style={{ padding: '10px 15px' }}>Delete Item</span>
                                <AiFillCar style={{
                                    fontSize: '28px',
                                    background: '#000',
                                    padding: '10px 15px'
                                }} />
                            </Button>
                        ) : (
                            <Button
                                onClick={handleOrder}
                                sx={{
                                    mt: 5,
                                    ml: 5,
                                    background: '#2CC0C7',
                                    '&:hover': {
                                        background: "#000",
                                    },
                                    color: '#fff',
                                    border: 'none',
                                    padding: 0,
                                    borderRadius: 0,
                                }}
                                variant="contained">
                                <span style={{ padding: '10px 15px' }}>Order Now</span>
                                <AiFillCar style={{
                                    fontSize: '28px',
                                    background: '#000',
                                    padding: '10px 15px'
                                }} />
                            </Button>
                        )
                    }
                </Grid>
            </Grid>
        </Box >
    );
};

export default SingleCar;