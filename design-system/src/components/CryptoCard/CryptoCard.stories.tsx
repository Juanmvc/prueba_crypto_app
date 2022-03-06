import React from 'react'
import { CryptoCard } from './CryptoCard'
import { Box } from '../Box/Box'
import { Grid } from '../Grid/Grid'

export default {
  component: CryptoCard,
  title: 'Cards / CryptoCard',
}

export const Primary = () => ( <>
  <Grid gridTemplateColumns="1fr 1fr" gridColumnGap="80px" gridRowGap="30px" maxWidth="50%">
    <CryptoCard
        name="Bitcoin"
        value="$28,729.01"
        abreviation="BTC"
        variant="+1.34%"
    />
     <CryptoCard
        name="Ethereum"
        value="$28,729.01"
        abreviation="ETH"
        variant="-8.23%"
    />
  </Grid>
  </>
)