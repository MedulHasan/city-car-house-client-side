import { Alert, Box, Button, IconButton, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import useAuth from '../../../../hooks/useAuth';

const MakeAdmin = () => {
    const [adminEmail, setAdminEmail] = useState('');
    const [alertSuccessMessage, setAlertSuccessMessage] = useState(false);
    const [alertErrorMessage, setAlertErrorMessage] = useState(false);
    const { token } = useAuth();

    const handleAdmin = (e) => {
        setAdminEmail(e.target.value)
    }
    const handleAdminSubmit = (e) => {
        e.preventDefault();

        fetch('https://city-car-house.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({ adminEmail })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setAlertSuccessMessage(true);
                } else {
                    setAlertErrorMessage(true)
                }
            })
            .catch((err) => {
            })

    };
    return (
        <Box sx={{ m: 2 }}>
            {alertSuccessMessage &&
                <Alert
                    severity="success"
                    style={{ marginBottom: '20px' }}
                >
                    <Typography>Made Admin Successfully!</Typography>
                    <IconButton
                        aria-label="close"
                        onClick={() => setAlertSuccessMessage(false)}
                        sx={{
                            position: 'absolute',
                            right: 30,
                            top: 25,
                            mr: 1,
                            mt: 1
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Alert>}
            {alertErrorMessage &&
                <Alert
                    severity="error"
                    style={{ marginBottom: '20px' }}
                >
                    <Typography>Made Admin Failed!</Typography>
                    <IconButton
                        aria-label="close"
                        onClick={() => setAlertErrorMessage(false)}
                        sx={{
                            position: 'absolute',
                            right: 30,
                            top: 25,
                            mr: 1,
                            mt: 1
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Alert>}
            <Typography>Make an Admin</Typography>
            <hr />
            <form onSubmit={handleAdminSubmit}>
                <TextField style={{ width: '30%' }} onBlur={handleAdmin} type="email" label="Email" variant="standard" />
                <br />
                <Button sx={{ mt: 2 }} type="submit" variant="outlined">Add Admin</Button>
            </form>
        </Box>
    );
};

export default MakeAdmin;