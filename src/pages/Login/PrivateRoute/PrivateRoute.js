import { CircularProgress, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const { isLoading } = useAuth();
    const userEmail = localStorage.getItem("user");

    useEffect(() => {
        if (userEmail) {
            fetch(`https://city-car-house.herokuapp.com/loginUser/${userEmail}`)
                .then((res) => res.json())
                .then((data) => {
                    setUser(data);
                    setLoading(false);
                });
        } else {
            setUser({});
        }
    }, [userEmail]);
    return (
        <Box>
            {isLoading || loading ? (
                <Box
                    style={{
                        marginTop: "10%",
                        width: "100%",
                        textAlign: "center",
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : (
                <Route
                    {...rest}
                    render={({ location }) =>
                        user.email ? (
                            children
                        ) : (
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: { from: location },
                                }}
                            />
                        )
                    }
                />
            )}
        </Box>
    );
};

export default PrivateRoute;
