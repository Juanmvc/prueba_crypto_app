import React from 'react'
import { Box } from '../Box/Box'
import { Text } from './Text'

export default {
  component: Text,
  title: 'Text / Text',
}

export const Primary = () => ( <>
  <Box>
    <Text
      fontSize="20px"
      fontWeight="bold"
      >Default
    </Text>
  </Box>
  <Box>
    <Text
      success={true}
      fontSize="20px"
      fontWeight="bold"
      >Success
    </Text>
  </Box>
  <Box>
    <Text
      danger={true}
      fontSize="20px"
      fontWeight="bold"
      >Danger
    </Text>
  </Box>
  <Box>
    <Text
      disabled={true}
      fontSize="20px"
      fontWeight="bold"
      >Disabled
    </Text>
  </Box>
  </>
)