import React, { useState } from 'react';
import { Alert, Box, Button, IconButton, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import useAuth from '../../../../hooks/useAuth';

const textField = {
    width: '30%',
    marginBottom: '20px'
}

const Review = () => {
    const [alertSuccessMessage, setAlertSuccessMessage] = useState(false);
    const { user } = useAuth();
    const initialValue = { customerName: user.displayName };
    const [feedback, setFeedback] = useState(initialValue);

    const handleFeedback = (e) => {
        const newData = { ...feedback };
        newData[e.target.name] = e.target.value;
        setFeedback(newData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://city-car-house.herokuapp.com/customerReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(feedback)
        })
            .then(res => res.json())
            .then((data) => {
                e.target.reset();
                setAlertSuccessMessage(true);
            })
    }
    return (
        <Box sx={{ m: 2 }}>
            <Typography variant="h5">Give us your feedback about our website</Typography>
            <hr style={{ marginBottom: '40px' }} />
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
                    <Typography>Review Post Successfully!</Typography>

                </Alert>}
            <form onSubmit={handleSubmit}>
                <TextField style={textField} id="outlined-basic" size="small" onBlur={handleFeedback} defaultValue={user.displayName} name="customerName" label="Your Name" variant="outlined" />
                <br />
                <TextField style={textField} id="outlined-basic" size="small" onBlur={handleFeedback} name="carModel" label="Car Model" variant="outlined" />
                <br />
                <TextField style={textField} id="outlined-basic" size="small" onBlur={handleFeedback} name="feedback" label="Your Feedback" variant="outlined" multiline rows={4} />
                <br />
                <TextField style={textField} id="outlined-basic" size="small" onBlur={handleFeedback} name="ratting" label="Ratting just between (0 - 5)" variant="outlined" />
                <br />
                <Button type="submit" variant="outlined">Submit</Button>
            </form>
        </Box>
    );
};

export default Review;