import { ButtonSolid, Grid, Box, Icon,  } from 'design-system';
import React, { useState } from 'react';

export const NavigationBar = () => {

    const [section, setSection] = useState("dashboard")

    return (
        <>
            <Grid gridTemplateColumns={["1fr 1fr 1fr 1fr", "1fr"]} gridRowGap="24px" gridColumnGap="18px" pt="18px" pb="18px" mr="auto" ml="auto" width="fit-content">
                <Box height="64px" width="64px">
                    <ButtonSolid
                        variant={section === "dashboard"? "default" : "white"}
                        onClick={() => setSection("dashboard")}
                    >
                        <Icon name="k-icon-dashboard"/>
                    </ButtonSolid>
                </Box>
                <Box height="64px" width="64px">
                    <ButtonSolid
                        variant={section === "card"? "default" : "white"}
                        onClick={() => setSection("card")}
                    >
                        <Icon name="k-icon-card"/>
                    </ButtonSolid>
                </Box>
                <Box height="64px" width="64px">
                    <ButtonSolid
                        variant={section === "refresh"? "default" : "white"}
                        onClick={() => setSection("refresh")}
                    >
                        <Icon name="k-icon-refresh"/>
                    </ButtonSolid>
                </Box>
                <Box height="64px" width="64px">
                    <ButtonSolid
                        variant={section === "settings"? "default" : "white"}
                        onClick={() => setSection("settings")}
                    >
                        <Icon name="k-icon-settings"/>
                    </ButtonSolid>
                </Box>
            </Grid>
        </>
    )

}