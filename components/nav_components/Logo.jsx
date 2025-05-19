import { Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const Logo = () => {
//  const color = useColorModeValue('blue.400', 'blue.200')
  return (
    <Text
    fontSize={{base: 'larger', md : 'x-large'}}
    fontWeight = {'bold'}
    color = {'blue.500'}
    w = 'max-content'
    alignSelf={'center'}
    >
      Nexus.AI
    </Text>
  )
}

export default Logo
