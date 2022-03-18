import { Box, Flex } from '@chakra-ui/react'

const Footer = () => {
 return (

  <Box align="center" opacity={0.4} pr={90} fontSize="sm">
   &copy; {new Date().getFullYear()} Mohamad Youness. All Rights Reserved.
  </Box>

 )
}

export default Footer