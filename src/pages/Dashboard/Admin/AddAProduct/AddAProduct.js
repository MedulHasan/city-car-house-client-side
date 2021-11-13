import { Alert, Box, Button, Grid, IconButton, MenuItem, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import useAuth from '../../../../hooks/useAuth';

const styleTextField = {
    width: '30%',
    marginBottom: '15px',
}

const carBrand = [
    {
        value: 'Select a Car',
        label: 'Select a Car'
    },
    {
        value: 'AUDI',
        label: 'AUDI',
        logo: 'https://cdn.freelogovectors.net/wp-content/uploads/2016/12/audi-logo.png'
    },
    {
        value: 'BMW',
        label: 'BMW',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1200px-BMW.svg.png'
    },
    {
        value: 'TESLA',
        label: 'TESLA',
        logo: 'https://i.pinimg.com/originals/43/e9/69/43e969979dfd8ae4b364f517571aee58.png'
    },
    {
        value: 'TOYOTA',
        label: 'TOYOTA',
        logo: 'https://w7.pngwing.com/pngs/344/173/png-transparent-toyota-alphard-car-lexus-daihatsu-boon-toyota-emblem-trademark-logo.png'
    },
    {
        value: 'HONDA',
        label: 'HONDA',
        logo: 'https://cdn.imgbin.com/7/22/12/imgbin-honda-logo-car-honda-fit-honda-civic-honda-jNH6P1BgT6w1ZfVy1Li8bXsPr.jpg'
    },
];

const AddAProduct = () => {
    const [addCar, setAddCar] = useState({});
    const [selectCar, setSelectCar] = useState('Select a Car')
    const [alertSuccessMessage, setAlertSuccessMessage] = useState(false);
    const [alertErrorMessage, setAlertErrorMessage] = useState(false);


    const handleChange = (e) => {
        setSelectCar(e.target.value)
    }

    const handleCarInfo = (e) => {
        let newData = { ...addCar };
        newData[e.target.name] = e.target.value;
        if (newData.carBrand === 'AUDI') {
            newData.carLogo = 'https://cdn.freelogovectors.net/wp-content/uploads/2016/12/audi-logo.png';
        } else if (newData.carBrand === 'BMW') {
            newData.carLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1200px-BMW.svg.png'
        } else if (newData.carBrand === 'TESLA') {
            newData.carLogo = 'https://i.pinimg.com/originals/43/e9/69/43e969979dfd8ae4b364f517571aee58.png'
        } else if (newData.carBrand === 'TOYOTA') {
            newData.carLogo = 'https://w7.pngwing.com/pngs/344/173/png-transparent-toyota-alphard-car-lexus-daihatsu-boon-toyota-emblem-trademark-logo.png'
        } else if (newData.carBrand === 'HONDA') {
            newData.carLogo = 'https://cdn.imgbin.com/7/22/12/imgbin-honda-logo-car-honda-fit-honda-civic-honda-jNH6P1BgT6w1ZfVy1Li8bXsPr.jpg'
        }
        setAddCar(newData)
    }
    const handleAddProductSubmit = (e) => {
        e.preventDefault();
        // console.log(addCar);
        fetch('https://city-car-house.herokuapp.com/admin/addCar', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addCar)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setAlertSuccessMessage(true);
                } else {
                    setAlertErrorMessage(true)
                }
            })
            .catch((err) => {
            })

    };
    return (
        <Box sx={{ mx: 2, mt: 2 }}>
            <Typography >Add a New Car</Typography>
            <hr />
            {alertSuccessMessage &&
                <Alert
                    severity="success"
                    style={{ marginBottom: '20px' }}
                    action={
                        <IconButton
                            aria-label="close"
                            onClick={() => setAlertSuccessMessage(false)}
                        >
                            <CloseIcon />
                        </IconButton>
                    }
                >
                    <Typography>Car Added Successfully!</Typography>

                </Alert>}
            {alertErrorMessage &&
                <Alert
                    severity="error"
                    style={{ marginBottom: '20px' }}
                    action={
                        <IconButton
                            aria-label="close"
                            onClick={() => setAlertErrorMessage(false)}
                        >
                            <CloseIcon />
                        </IconButton>
                    }
                >
                    <Typography>Car Added Failed!</Typography>
                </Alert>}

            <form onSubmit={handleAddProductSubmit}>
                <Grid container style={{ height: '50vh' }} sx={{ pl: '100px', mt: '50px' }}>
                    <Grid item xs={12} sm={6}>
                        <TextField style={styleTextField} value={selectCar} onBlur={handleCarInfo} onChange={handleChange} select type="text" name="carBrand" label="Car Brand" variant="standard" >
                            {carBrand.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <br />
                        <TextField style={styleTextField} onBlur={handleCarInfo} type="text" name="carModel" label="Car Model" variant="standard" />
                        <br />
                        <TextField style={styleTextField} onBlur={handleCarInfo} type="text" name="carQuote" label="Car Quote (write something about this car)" variant="standard" />
                        <br />
                        <TextField style={styleTextField} onBlur={handleCarInfo} type="text" name="powerReserve" label="Power Reserve (mi)" variant="standard" />
                        <br />
                        <TextField style={styleTextField} onBlur={handleCarInfo} type="text" name="maxSpeed" label="Max Speed km/h" variant="standard" />
                        <br />
                        <TextField style={styleTextField} onBlur={handleCarInfo} type="text" name="enginePower" label="Engine Power (hp)" variant="standard" />
                        <br />
                        <TextField style={styleTextField} onBlur={handleCarInfo} type="text" name="person" label="Person" variant="standard" />
                        <br />
                        <TextField style={styleTextField} onBlur={handleCarInfo} type="text" name="luggage" label="Luggage" variant="standard" />
                        <br />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField style={styleTextField} onBlur={handleCarInfo} type="text" name="battery" label="Battery (kw/h)" variant="standard" />
                        <br />
                        <TextField style={styleTextField} onBlur={handleCarInfo} type="text" name="speedUpTo100" label="Speed up to 100 km/s" variant="standard" />
                        <br />
                        <TextField style={styleTextField} onBlur={handleCarInfo} type="text" name="electricMotor" label="Electric motor (kw)" variant="standard" />
                        <br />
                        <TextField style={styleTextField} onBlur={handleCarInfo} type="text" name="carImage" label="Car Image (url)" variant="standard" />
                        <br />
                        <TextField style={styleTextField} onBlur={handleCarInfo} type="text" name="price" label="Price in $" variant="standard" />
                        <br />
                        <TextField style={styleTextField} onBlur={handleCarInfo} type="text" name="door" label="Door" variant="standard" />
                        <br />
                        <Button sx={{ mt: 2 }} type="submit" variant="outlined">Add A Car</Button>
                    </Grid>
                </Grid>
            </form>
        </Box >
    );
};

export default AddAProduct;