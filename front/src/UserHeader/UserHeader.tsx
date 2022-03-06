import { ButtonSolid, Grid, Box, Text, Icon, CryptoCard } from 'design-system';
import React from 'react';

export const UserHeader = () => {  
    return (<>
        <Box mt="18px" mb="24px">
            <Box pl="auto" pr="auto" pt="20px" mb="34px">
                <Text color="white">Hi Anakin</Text>
            </Box>
            <Box ml="auto" mr="auto" mb="8px">
                <Text color="white" fontSize="16px">Your balance</Text>
            </Box>
            <Box ml="auto" mr="auto">
                <Text weight="bold" color="white" fontSize="32px">5.908.873$</Text>
            </Box> 
        </Box>
        </>
    )
}