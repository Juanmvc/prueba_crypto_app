import React from 'react'
import { Box } from '../Box/Box'
import { Text } from './Text'

export default {
  component: Text,
  title: 'Text / Text',
}

export const Primary = () => (
  <Box>
    <Text
        fontSize="20px"
        fontWeight="bold"
        >Lorem ipsum
    </Text>
  </Box>
)