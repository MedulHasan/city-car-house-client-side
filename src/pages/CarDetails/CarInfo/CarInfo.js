import { Grid, Typography, Rating } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { BsSpeedometer2 } from 'react-icons/bs';
import { SiGodotengine } from 'react-icons/si';
import { MdBatteryCharging80 } from 'react-icons/md';
import { IoMdClock } from 'react-icons/io';
import { SiYamahamotorcorporation } from 'react-icons/si';
import { GiRoad } from 'react-icons/gi';
import { IoIosPeople } from 'react-icons/io';
import { MdOutlineLuggage } from 'react-icons/md';
import { BiDoorOpen } from 'react-icons/bi';

const spanItem = {
    fontSize: '30px',
    fontWeight: 700
};

const innerGridStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    background: '#fff',
    borderRight: '1px solid',
    marginBottom: '10px',
    padding: '10px 15px'
};

const carRatting = {
    padding: '15px',
    borderRadius: '50%',
    background: '#fff',
    marginRight: '10px',
    fontSize: '24px',
    fontWeight: '600',
    color: '#FBCC00',
}

const CarInfo = ({ carDetails }) => {
    return (
        <Box>
            <Box style={{
                marginBottom: '15px',
                marginLeft: '30px',
                fontSize: '30px',
                fontWeight: '900'
            }}>
                <Rating style={{ fontSize: '20px', fontWeight: '600' }} name="read-only" value={5} readOnly /><span style={{ fontSize: '12px', fontWeight: '600' }}> 2 Reviews</span>
                <Typography variant="h4" >{carDetails.carModel}</Typography>
            </Box>
            <img width="100%" src={carDetails.carImage} alt="" />
            <Grid container sx={{ mt: 1 }}>
                <Grid item xs={12} sm={6} md={4} style={innerGridStyle} sx={{ borderRight: '0px' }}>
                    <IoIosPeople style={{ fontSize: '35px' }} />
                    <Typography variant="h6">
                        <span style={spanItem}>{carDetails.person} </span>
                        <Typography sx={{ color: '#848484' }}>Passengers</Typography>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} style={innerGridStyle}>
                    <MdOutlineLuggage style={{ fontSize: '35px' }} />
                    <Typography variant="h6">
                        <span style={spanItem}>{carDetails.luggage} </span>
                        <Typography sx={{ color: '#848484' }}>Luggages</Typography>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} style={innerGridStyle}>
                    <BiDoorOpen style={{ fontSize: '35px' }} />
                    <Typography variant="h6">
                        <span style={spanItem}>{carDetails.door} </span>
                        <Typography sx={{ color: '#848484' }}>Doors</Typography>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} style={innerGridStyle}>
                    <GiRoad style={{ fontSize: '35px' }} />
                    <Typography variant="h6">
                        TO<span style={spanItem}> {carDetails.powerReserve} </span>MI
                        <Typography sx={{ color: '#848484' }}>Power reserve</Typography>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} style={innerGridStyle}>
                    <BsSpeedometer2 style={{ fontSize: '35px' }} />
                    <Typography variant="h6">
                        <span style={spanItem}>{carDetails.maxSpeed} </span>KM/H
                        <Typography sx={{ color: '#848484' }}>Max speed</Typography>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} style={innerGridStyle}>
                    <SiGodotengine style={{ fontSize: '35px' }} />
                    <Typography variant="h6">
                        <span style={spanItem}>{carDetails.enginePower} </span>HP
                        <Typography sx={{ color: '#848484' }}>Engine power</Typography>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} style={innerGridStyle}>
                    <MdBatteryCharging80 style={{ fontSize: '35px' }} />
                    <Typography variant="h6">
                        <span style={spanItem}>{carDetails.battery} </span>KW/H
                        <Typography sx={{ color: '#848484' }}>Battery</Typography>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} style={innerGridStyle}>
                    <IoMdClock style={{ fontSize: '35px' }} />
                    <Typography variant="h6">
                        <span style={spanItem}>{carDetails.speedUpTo100} </span>S
                        <Typography sx={{ color: '#848484' }}>Speed-up to 100 KM</Typography>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} style={innerGridStyle}>
                    <SiYamahamotorcorporation style={{ fontSize: '35px' }} />
                    <Typography variant="h6">
                        <span style={spanItem}>{carDetails.electricMotor} </span>KW
                        <Typography sx={{ color: '#848484' }}>Electric motor</Typography>
                    </Typography>
                </Grid>
            </Grid>
            <Box>
                <Typography style={{ margin: '30px 0', fontSize: '24px', fontWeight: '700' }}>Car Ratting</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography style={carRatting}>5.0</Typography>
                        <Box>
                            <Typography>DRIVING</Typography>
                            <Rating name="read-only" value={5} readOnly />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography style={carRatting}>4.0</Typography>
                        <Box>
                            <Typography>PRACTICALITY</Typography>
                            <Rating name="read-only" value={4} readOnly />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography style={carRatting}>5.0</Typography>
                        <Box>
                            <Typography>CAR INTERIOR</Typography>
                            <Rating name="read-only" value={5} readOnly />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Typography style={{ margin: '20px 0', fontSize: '14px' }}>The engine may be unchanged, the but bodywork certainly isn’t. The BR20 is three inches longer than the GTC4Lusso and the elegant roofline calls to mind classics like the 500 Superfast. An aerodynamic channel in the rear pillar creates a flying buttress, while the roof is painted black. The BR20 retains the dual taillight look from the GTC4Lusso but pairs it with a more chiseled rear bumper with a diffuser that works in conjunction with active flaps on the underbody.</Typography>
        </Box>
    );
};

export default CarInfo;