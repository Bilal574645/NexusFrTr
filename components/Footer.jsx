import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box
     bg = 'blue.800'
     p = {6}
     w = 'full'
     mt = '4'
     textAlign={'center'}
    >
       <Text className=''
       fontSize={'x-large'}
       fontWeight ='medium'
       color={'white'}
       fontStyle="italic"
       >Nexus Communication</Text>
    </Box>
  )
}

export default Footer
