import React, { useState } from 'react';
import { Box, Container, Grid, Typography, TextField, Button, CircularProgress } from '@mui/material';
// import login from '../../../images/login.png';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useAlert } from '../../../context/AlertMessage';

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const [loginData, setLoginData] = useState({});
    const { loginUser, isLoading, authError, signInWithGoogle } = useAuth();
    const [error, setError] = useState({});
    const { setAlertSuccessMessage } = useAlert();

    const handleOnChange = (e) => {
        let newData = { ...loginData };
        newData[e.target.name] = e.target.value;
        setLoginData(newData);
    };

    const handleLogin = (e) => {
        if (Object.keys(loginData).length === 0) {
            error.email = 'Email must be required';
            error.password = 'Password must be required';
            setError(error);
        } else if (!loginData.password && loginData.email) {
            error.email = '';
            error.password = 'Password must be required';
            setError(error);
        } else if (!loginData.email && loginData.password) {
            error.email = 'Email must be required';
            error.password = '';
            setError(error);
        } else {
            setError({});
            setLoginData({})
        }
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history);
        setAlertSuccessMessage(true);
    };

    const handleGoogleLogin = () => {
        signInWithGoogle(location, history);
        setAlertSuccessMessage(true);
    }

    return (
        <Container maxWidth="xl">
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} sx={{ mt: 12, textAlign: 'center' }}>
                    <Typography variant="button" display="block" gutterBottom>
                        Log In
                    </Typography>
                    {
                        Object.keys(error).length === 0 && isLoading ? (<CircularProgress />) : (
                            <>
                                <form onSubmit={handleLogin}>
                                    <TextField
                                        error={error.email ? true : false}
                                        sx={{ width: '400px', m: 1 }}
                                        id="standard-basic-email"
                                        label="Your Email"
                                        type="email"
                                        variant="standard"
                                        name="email"
                                        onChange={handleOnChange}
                                        helperText={error.email ? error.email : ''}
                                    />
                                    <TextField
                                        error={error.password ? true : false}
                                        sx={{ width: '400px', m: 1 }}
                                        id="standard-basic-password"
                                        label="Your Password"
                                        type="password"
                                        variant="standard"
                                        name="password"
                                        onChange={handleOnChange}
                                        helperText={error.password ? error.password : ''}
                                    />
                                    {Object.keys(error).length === 0 && authError && <Typography style={{ color: 'red', textAlign: 'left', margin: '0 23%' }} variant="caption" display="block" gutterBottom>{authError}</Typography>}
                                    <Button variant="contained" sx={{ width: '400px', m: 3, mb: 1 }} type="submit">Login</Button>
                                    <NavLink style={{ textDecoration: 'none' }} to="/register"><Button variant="text" sx={{ width: '400px', m: 2 }}>New User? Please Register</Button></NavLink>
                                </form>
                                <Box style={{
                                    margin: '1% 23%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: '#31BFFF'
                                }}>
                                    <hr style={{ width: '200px', height: '2px', background: '#000' }} /> <p style={{ margin: '0 1%', fontWeight: 'bolder', fontSize: '24px' }}>OR</p> <hr style={{ width: '200px', height: '2px', background: '#000' }} />
                                </Box>
                                <Button onClick={handleGoogleLogin} variant="outlined">Google Sign in</Button>
                            </>
                        )
                    }
                </Grid>
                {/* <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid> */}
            </Grid>
        </Container >
    );
};

export default Login;