import React, { HTMLAttributes } from "react";
import styled from '@emotion/styled'
import { css } from '@styled-system/css'
import { variant } from "styled-system";
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
        <Grid gridTemplateColumns="1fr 1fr 1fr" gridColumnGap="20px">
            <Box bg="grey" borderRadius="50%" height="40px" width="40px" mt="auto" mb="auto">
            </Box>
            <Box justifyContent="left" mr="30px">
                <Text>{name}</Text>
                <Text disabled={true}>{abreviation}</Text>
            </Box>
            <Box display="flex" alignItems="end"flexDirection="column">
                <Text>{value}</Text>
                {variant.charAt(0) === "+" ?
                    <Text success={true}>{variant}</Text>
                    :
                    <Text danger={true}>{variant}</Text>
                }
            </Box>
        </Grid>
        
    )
}