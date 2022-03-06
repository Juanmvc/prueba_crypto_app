import React from 'react'
import { ButtonSolid } from '../ButtonSolid/ButtonSolid'
import { Box } from '../Box/Box'
import { Grid } from '../Grid/Grid'

export default {
  component: Grid,
  title: 'Layout/Grid',
}

export const Primary = () => (
<Grid gridTemplateColumns="1fr 1fr 1fr" gridColumnGap="80px" gridRowGap="30px">
    <Box>
        <ButtonSolid
            onClick={() => console.log("Pulsado")}      
            >Pulsa aquí
        </ButtonSolid>
    </Box>
    <Box>
        <ButtonSolid
            onClick={() => console.log("Pulsado")}      
            >O aquí
        </ButtonSolid>
    </Box>
    <Box>
        <ButtonSolid
            onClick={() => console.log("Pulsado")}      
            >O aquí
        </ButtonSolid>
    </Box>
    <Box>
        <ButtonSolid
            onClick={() => console.log("Pulsado")}      
            >O aquí
        </ButtonSolid>
    </Box>
    <Box>
        <ButtonSolid
            onClick={() => console.log("Pulsado")}      
            >O aquí
        </ButtonSolid>
    </Box>
    <Box>
        <ButtonSolid
            onClick={() => console.log("Pulsado")}      
            >O aquí
        </ButtonSolid>
    </Box>
  </Grid>
)