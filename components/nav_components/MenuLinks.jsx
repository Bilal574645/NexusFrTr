import { Stack } from '@chakra-ui/react'
import React from 'react'
import NavLink from './NavLink'
const Links = [
    {
        name: "Home",
        link : '/',
    },
    {
        name: "About Nexus",
        link : '#',
    },
    {
        name: "How Nexus works",
        link : '#',
    },
    {
        name: "Support Nexus",
        link : '#',
    },
]
const MenuLinks = () => {
  return (
    <Stack
     direction={{base: 'column', md : 'row'}}
     spacing = {4}
     as = {'nav'}
    >
      {
        Links.map((item) =>{
            return <NavLink 
            link = {item.link}
            key = {item.name}
            >{item.name}</NavLink>
        })
      }
    </Stack>
  )
}

export default MenuLinks
