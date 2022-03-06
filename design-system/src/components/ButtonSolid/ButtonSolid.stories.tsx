import React from 'react'
import { ButtonSolid } from './ButtonSolid'
import { Box } from '../Box/Box'

export default {
  component: ButtonSolid,
  title: 'Action / ButtonSolid',
}

export const Primary = () => (
  <Box width="100px" height="60px">
    <ButtonSolid
        onClick={() => console.log("Pulsado")}      
        >Pulsa aquí
    </ButtonSolid>
  </Box>
)