import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';

const textField = {
    width: '30%',
    marginBottom: '20px'
}

const Review = () => {
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
        fetch('http://localhost:8888/customerReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(feedback)
        })
            .then(res => res.json())
            .then({})
    }
    return (
        <Box>
            <Typography variant="h5" sx={{ mb: 5 }}>Give us your feedback about our website</Typography>
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