import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const navigationBar = {
  color: '#fff',
  textDecoration: 'none'
}

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: '28px' }}>
            CITY-CAR-HOUSE
          </Typography>
          <Box>
            <Link to="/" style={navigationBar}><Button color="inherit" >Home</Button></Link>
            <Link to="/exploreCar" style={navigationBar}><Button color="inherit" >Explore Car</Button></Link>
            {
              user.email ? (
                <NavLink to="/" style={navigationBar}>
                  <Link to="/dashboard" style={navigationBar}><Button color="inherit" >Dashboard</Button></Link>
                  <Button onClick={logout} style={navigationBar} color="inherit">Logout</Button>
                  <Button style={navigationBar} color="inherit">{user.displayName}</Button>
                </NavLink>
              ) : (
                <NavLink to="/login" style={navigationBar}>
                  <Button color="inherit">Login</Button>
                </NavLink>
              )
            }
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;