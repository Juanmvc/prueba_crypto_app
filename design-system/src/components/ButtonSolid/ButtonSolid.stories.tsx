import React from 'react'
import { ButtonSolid } from './ButtonSolid'
import { Box } from '../Box/Box'
import { Grid } from '../Grid/Grid'

export default {
  component: ButtonSolid,
  title: 'Action / ButtonSolid',
}

export const Primary = () => ( <>
  <Grid gridTemplateColumns="1fr 1fr" gridColumnGap="80px" gridRowGap="30px" maxWidth="50%">
    <Box>
      <ButtonSolid
          onClick={() => console.log("Pulsado")}      
          >Pulsa aquí
      </ButtonSolid>
    </Box>
    <Box>
      <ButtonSolid
          disabled={true}
          onClick={() => console.log("Pulsado")}      
          >!Desactivado¡
      </ButtonSolid>
    </Box>
    <Box>
      <ButtonSolid
          variant="white"
          onClick={() => console.log("Pulsado")}      
          >Variante blanca
      </ButtonSolid>
    </Box>
    <Box>
      <ButtonSolid
          variant="white"
          disabled={true}
          onClick={() => console.log("Pulsado")}      
          >!Desactivado¡
      </ButtonSolid>
    </Box>
  </Grid>
  </>
)