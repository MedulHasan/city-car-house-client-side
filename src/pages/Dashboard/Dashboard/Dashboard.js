import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import LogoutIcon from '@mui/icons-material/Logout';
import RateReviewIcon from '@mui/icons-material/RateReview';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PaymentsIcon from '@mui/icons-material/Payments';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import HomeIcon from '@mui/icons-material/Home';
import { Button } from '@mui/material';
import { AiFillDashboard } from 'react-icons/ai';
import { RiAdminFill } from 'react-icons/ri';
import { MdLibraryAdd } from 'react-icons/md';
import { GrProductHunt } from 'react-icons/gr';
import { SiManageiq } from 'react-icons/si';
import { FaHospitalUser } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import {
    Switch,
    Route,
    Redirect,
    Link,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/PrivateRoute/AdminRoute';
import AddAProduct from '../Admin/AddAProduct/AddAProduct';
import ManageAllOrder from '../Admin/ManageAllOrder/ManageAllOrder';
import ManageProduct from '../Admin/ManageProduct/ManageProduct';
import PrivateRoute from '../../Login/PrivateRoute/PrivateRoute';
import Payment from '../Users/Payment/Payment';
import MyOrders from '../Users/MyOrders/MyOrders';
import Review from '../Users/Review/Review';

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [date, setDate] = React.useState(new Date());
    const { admin, logout } = useAuth();
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box
            sx={{ pt: 5 }}
            style={{
                background: 'linear-gradient(#18D2AE, #0FCFEA)',
                height: '100vh'
            }}>
            <List>
                <Link id="RouterNavLink" to="/" style={{
                    color: '#fff',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <ListItem button>
                        <HomeIcon />
                        <Button sx={{ color: '#fff' }}>Home</Button>
                    </ListItem>
                </Link>
                {/* <Link id="RouterNavLink" to={`${url}`} style={{
                    color: '#fff',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <ListItem button>
                        <AiFillDashboard style={{ fontSize: '25px' }} />
                        <Button sx={{ color: '#fff' }}>Dashboard</Button>
                    </ListItem>
                </Link> */}
                {
                    admin &&
                    <Box>
                        <Link id="RouterNavLink" to={`${url}/manageAllOrders`} style={{
                            color: '#fff',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <ListItem button>
                                <SiManageiq style={{ fontSize: '25px' }} />
                                <Button sx={{ color: '#fff' }}>Manage All Cars</Button>
                            </ListItem>
                        </Link>
                        <Link id="RouterNavLink" to={`${url}/addAProduct`} style={{
                            color: '#fff',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <ListItem button>
                                <MdLibraryAdd style={{ fontSize: '25px' }} />
                                <Button sx={{ color: '#fff' }}>Add a Car</Button>
                            </ListItem>
                        </Link>
                        <Link id="RouterNavLink" to={`${url}/makeAdmin`} style={{
                            color: '#fff',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <ListItem button>
                                <RiAdminFill style={{ fontSize: '25px' }} />
                                <Button sx={{ color: '#fff' }}>Make Admin</Button>
                            </ListItem>
                        </Link>
                        <Link id="RouterNavLink" to={`${url}/manageProduct`} style={{
                            color: '#fff',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <ListItem button>
                                <GrProductHunt style={{ fontSize: '25px' }} />
                                <Button sx={{ color: '#fff' }}>Manage Cars</Button>
                            </ListItem>
                        </Link>
                    </Box>
                }
                {
                    !admin &&
                    <Box>
                        <Link id="RouterNavLink" to={`${url}/payment`} style={{
                            color: '#fff',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <ListItem button>
                                <PaymentsIcon style={{ fontSize: '25px' }} />
                                <Button sx={{ color: '#fff' }}>Payment</Button>
                            </ListItem>
                        </Link>
                        <Link id="RouterNavLink" to={`${url}/myOrders`} style={{
                            color: '#fff',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <ListItem button>
                                <AddShoppingCartIcon style={{ fontSize: '25px' }} />
                                <Button sx={{ color: '#fff' }}>My Orders</Button>
                            </ListItem>
                        </Link>
                        <Link id="RouterNavLink" to={`${url}/review`} style={{
                            color: '#fff',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <ListItem button>
                                <RateReviewIcon style={{ fontSize: '25px' }} />
                                <Button sx={{ color: '#fff' }}>Review</Button>
                            </ListItem>
                        </Link>
                    </Box>
                }
                <Link onClick={logout} id="RouterNavLink" to={`/home`} style={{
                    marginTop: 'auto',
                    color: '#fff',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <ListItem button>
                        <LogoutIcon style={{ fontSize: '25px' }} />
                        <Button sx={{ color: '#fff' }}>Logout</Button>
                    </ListItem>
                </Link>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', background: '#F4FDFB', height: '100vh' }}>
            <MenuIcon
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 2, mt: 2, display: { md: 'none' } }}
            />
            <Box
                component="nav"
                sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Switch>
                    <Route exact path={path}>
                        {/* <DashboardHome /> */}
                        <Redirect to={{
                            pathname: `${path}/${admin ? 'addAProduct' : 'payment'}`
                        }} />
                    </Route>
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrder />
                    </AdminRoute>
                    <AdminRoute path={`${path}/addAProduct`}>
                        <AddAProduct />
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProduct`}>
                        <ManageProduct />
                    </AdminRoute>
                    <PrivateRoute path={`${path}/payment`}>
                        <Payment />
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/myOrders`}>
                        <MyOrders />
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/review`}>
                        <Review />
                    </PrivateRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
