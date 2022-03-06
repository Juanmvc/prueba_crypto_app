import React, { HTMLAttributes } from "react";
import { Box } from "../Box/Box";
import { Grid } from "../Grid/Grid";
import { Text } from "../Text/Text";

export interface CardOptions {
    name: string;
    abreviation: string;
    logo?: string;
    value: string;
    variant: string;
}

export const CryptoCard: React.FC<CardOptions> = ({
    name,
    abreviation,
    logo,
    value,
    variant,
}) => {
    return (
        <Grid gridTemplateColumns="1fr 2fr 2fr" gridColumnGap="20px">
            <Box bg="grey" borderRadius="50%" height="40px" width="40px" mt="auto" mb="auto">
            </Box>
            <Box display="flex" alignItems="start" flexDirection="column">
                <Text>{name}</Text>
                <Text disabled={true}>{abreviation}</Text>
            </Box>
            <Box display="flex" alignItems="end" flexDirection="column">
                <Text>{value}</Text>
                {variant.charAt(0) === "-" ?
                    <Text fontSize="16px" danger={true}>{variant}</Text>
                    :
                    <Text fontSize="16px" success={true}>{variant}</Text>
                }
            </Box>
        </Grid>
        
    )
}