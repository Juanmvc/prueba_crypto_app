import React from 'react'
import { Icon } from './Icon'
import { Box } from '../Box/Box'

export default {
  component: Icon,
  title: 'Icons / Icon',
}

export const Primary = () => (
    <Box width="100px" height="60px">
      <Icon
          name="k-icon-bell"    
          />
    </Box>
  )