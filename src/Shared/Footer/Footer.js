import React from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import footer from '../../image/banner/footer.jpg'

const textField = {
    width: '60%',
    marginBottom: '20px',
};

const textHeading2 = {
    fontSize: '20px',
    fontWeight: 600
};

const getTouch = {
    backgroundImage: `url(${footer})`,
    backgroundSize: 'cover',
    filter: 'brightness(45%)',
    color: '#fff',
    padding: '30px',
    position: 'relative'

}

const Footer = () => {
    return (
        <Box sx={{ pt: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={getTouch}>
                    <Box>
                        <Box sx={{ px: 10 }}>
                            <Typography style={{ fontSize: '26px', fontWeight: 700 }}>Get In Touch</Typography>
                            <Typography style={textHeading2}>(+1] 515-602-6843</Typography>
                        </Box>
                        <Box style={{ display: 'flex', justifyContent: 'space-between' }} sx={{ px: 10, mt: 5 }}>
                            <Box>
                                <Typography style={textHeading2}>Location</Typography>
                                <Typography sx={{ mb: 3 }}>3865 Nutters Barn Lane Clarion, IA 50525</Typography>
                                <Typography style={textHeading2}>Email</Typography>
                                <Typography>kevineevans@rhyta.com</Typography>
                            </Box>
                            <Box>
                                <Typography style={textHeading2}>Location</Typography>
                                <Typography>Mon: 10am - 5pm</Typography>
                                <Typography>Tue: 10am - 5pm</Typography>
                                <Typography>Wed Closed</Typography>
                                <Typography>Thu: 10am - 5pm</Typography>
                                <Typography>Fri: 10am - 5pm</Typography>
                                <Typography>Sat: 10am - 5pm</Typography>
                                <Typography>Sun Closed</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={{ background: '#E22937', color: '#fff', padding: '50px 100px' }} >
                    <Typography sx={{ mb: 2 }}>Send A Message</Typography>
                    <form onSubmit="">
                        <TextField style={textField} id="outlined-basic" size="small" name="customerName" label="Your Name" variant="outlined" />
                        <br />
                        <TextField style={textField} id="outlined-basic" size="small" name="carModel" label="Your Email" variant="outlined" />
                        <br />
                        <TextField style={textField} id="outlined-basic" size="small" name="feedback" label="Your Message" variant="outlined" multiline rows={4} />
                        <br />
                        <Button variant="contained">Submit</Button>
                    </form>
                </Grid>
            </Grid>
            <Box style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '50px',
                columnGap: '30px'
            }}>
                <Typography>Advertise</Typography>
                <Typography>Questions</Typography>
                <Typography>Terms & Condition</Typography>
                <Typography>Disclaimer</Typography>
                <Typography>Privacy Policy</Typography>
                <Typography>Site Map</Typography>
            </Box>
            <Typography style={{
                textAlign: 'center',
                background: '#EDF0F5',
                padding: '20px',
                color: '#9C9C9C'
            }}>&copy; 2021 Medul Hasan</Typography>
        </Box>
    );
};

export default Footer;