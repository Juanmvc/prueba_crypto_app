import React from "react";

export const userLocation = React.createContext({
    location: "dashboard",
    setLocation: (location) => {}
});

export const contextWrapper = (children) => {
    return (
    <userLocation.Provider>
        {children}
    </userLocation.Provider>
    );
}
