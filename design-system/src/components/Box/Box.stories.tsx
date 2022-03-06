import React from 'react'
import { Box } from './Box'

export default {
  component: Box,
  title: 'Layout/Box',
}

export const Default = () => (
  <>
    <Box bg={["red", "blue"]}>Hello Box</Box>
  </>
)
