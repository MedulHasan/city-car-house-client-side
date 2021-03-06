import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const NormalLoginUser = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    return (
        <>
            {
                isLoading ? <CircularProgress /> : (
                    <Route
                        {...rest}
                        render={({ location }) =>
                            user.email && !admin ? (
                                children
                            ) : (
                                <Redirect
                                    to={{
                                        pathname: "/",
                                        state: { from: location }
                                    }}
                                />
                            )
                        }
                    />
                )
            }
        </>
    );
};

export default NormalLoginUser;