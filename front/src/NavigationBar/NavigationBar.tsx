import { ButtonSolid, Grid, Box, Icon,  } from 'design-system';
import React, { useState, useContext  } from 'react';
import { userLocation } from "../AppContext"

export const NavigationBar = () => {
    const { location, setLocation } = useContext(userLocation);
    
    return (
        <>
            <Grid gridTemplateColumns={["1fr 1fr 1fr 1fr", "1fr"]} gridRowGap="24px" gridColumnGap="18px" pt="18px" pb="18px" mr="auto" ml="auto" width="fit-content">
                <Box height="64px" width="64px">
                    <ButtonSolid
                        variant={location === "dashboard"? "default" : "white"}
                        onClick={() => setLocation("dashboard")}
                    >
                        <Icon name="k-icon-dashboard"/>
                    </ButtonSolid>
                </Box>
                <Box height="64px" width="64px">
                    <ButtonSolid
                        variant={location === "card"? "default" : "white"}
                        onClick={() => setLocation("card")}
                    >
                        <Icon name="k-icon-card"/>
                    </ButtonSolid>
                </Box>
                <Box height="64px" width="64px">
                    <ButtonSolid
                        variant={location === "refresh"? "default" : "white"}
                        onClick={() => setLocation("refresh")}
                    >
                        <Icon name="k-icon-refresh"/>
                    </ButtonSolid>
                </Box>
                <Box height="64px" width="64px">
                    <ButtonSolid
                        variant={location === "settings"? "default" : "white"}
                        onClick={() => setLocation("settings")}
                    >
                        <Icon name="k-icon-settings"/>
                    </ButtonSolid>
                </Box>
            </Grid>
        </>
    )

}