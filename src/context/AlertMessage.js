import React, { createContext, useState, useContext } from 'react';

const AlertContext = createContext();

export const useAlert = () => {
    return useContext(AlertContext);
}

const AlertMessage = ({ children }) => {
    const [alertSuccessMessage, setAlertSuccessMessage] = useState(false);
    const [alertErrorMessage, setAlertErrorMessage] = useState(false);
    const allAlert = {
        alertSuccessMessage,
        setAlertSuccessMessage,
        alertErrorMessage,
        setAlertErrorMessage
    };
    return (
        <AlertContext.Provider value={allAlert}>
            {children}
        </AlertContext.Provider>
    );
};

export default AlertMessage;