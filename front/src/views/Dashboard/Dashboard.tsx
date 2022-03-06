import { ButtonSolid, Grid, Box, Text, Icon, CryptoCard } from 'design-system';
import React from 'react';

export const Dashboard = () => {  
    return (<>
        <Box mt="24px" mb="32px">
            <Box pl="auto" pr="auto" pt="20px" mb="44px">
                <Text color="white">Hi Anakin</Text>
            </Box>
            <Box ml="auto" mr="auto" mb="8px">
                <Text color="white" fontSize="16px">Your balance</Text>
            </Box>
            <Box ml="auto" mr="auto">
                <Text weight="bold" color="white" fontSize="32px">5.908.873$</Text>
            </Box> 
        </Box>
        <Box bg="white" pt="28px" pl="16px" pr="16px" borderTopLeftRadius="30px" borderTopRightRadius="30px">
            <Box pl="16px" pr="16px" mb="65px">
                <Box display="flex" justifyContent="left">
                    <p>Recent</p>
                </Box>
                <Grid gridTemplateColumns={["1fr", "1fr 1fr"]} gridRowGap="24px" gridColumnGap="18px">
                    <CryptoCard
                    name="Bitcoin"
                    abreviation="BTC"
                    value="$67,908.8"
                    variant="+2.76"
                    />
                    <CryptoCard
                    name="Bitcoin"
                    abreviation="BTC"
                    value="$67,908.8"
                    variant="+2.76"
                    />
                    <CryptoCard
                    name="Bitcoin"
                    abreviation="BTC"
                    value="$67,908.8"
                    variant="+2.76"
                    />
                    <CryptoCard
                    name="Bitcoin"
                    abreviation="BTC"
                    value="$67,908.8"
                    variant="-2.76"
                    />
                    <CryptoCard
                    name="Bitcoin"
                    abreviation="BTC"
                    value="$67,908.8"
                    variant="-2.76"
                    />
                </Grid>
            </Box>
            <Box pb="32px" height="64px">
                <ButtonSolid
                    onClick={() => console.log("CLICK")}
                >
                    Show all transactions
                </ButtonSolid>
            </Box>
        </Box>
      </>
    );
  };