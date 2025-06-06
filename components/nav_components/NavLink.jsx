import { Box, useColorModeValue } from '@chakra-ui/react'
const NavLink = (props) => {
    const { children, link } = props
    return (
      <Box
        as="a"
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: 'blue.200',
          color: 'black',
        }}
        color = 'blue.600'
        alignSelf = 'center'
        fontSize={{base: 'large', md: 'large'}}
        href={link}>
        {children}
      </Box>
    )
  }
export default NavLink
  