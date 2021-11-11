import React from 'react';
import { Grid, Button, Box, Typography } from '@mui/material';
import { GiRoad } from 'react-icons/gi';
import { BsSpeedometer2 } from 'react-icons/bs';
import { SiGodotengine } from 'react-icons/si';
import { MdBatteryCharging80 } from 'react-icons/md';
import { IoMdClock } from 'react-icons/io';
import { SiYamahamotorcorporation } from 'react-icons/si';
import { AiFillCar } from 'react-icons/ai';


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
    return (
        <Box key={bestCar._id}>
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
                <Typography variant="h5" sx={{ fontWeight: 400, fontSize: '28px', color: '#414141' }}>{bestCar.carQuote}</Typography>
            </Box>
            <Grid container style={{
                padding: '15px 12%',
            }}>
                <Grid item xs={12} md={5}>
                    <img width="400px" src={bestCar.carImage} alt="" />
                </Grid>
                <Grid item xs={12} md={7}>
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
                    <Button sx={{
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
                </Grid>
            </Grid>
        </Box>
    );
};

export default SingleCar;