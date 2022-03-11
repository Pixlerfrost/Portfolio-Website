import NextLink from 'next/link'


import {
 Container, 
 Box, 
 Link, 
 Stack, 
 Heading,
 Flex,
 Menu,
 MenuItem,
 MenuList,
 MenuButton,
 IconButton,
 useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from '../Components/theme-toggle-button'
import Logo from '../Components/logo'


const LinkItem = ({ href, path, children}) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

  return (
   <NextLink href={href}>
    <Link p={2} bg={active ? '#202023' : inactiveColor} > 
    {children} 
     </Link>
   </NextLink>
  )
}



const Navbar = props => {
 const {path} = props
 
 return (
  <Box position="fixed " as="nav" w="100%" bg={useColorModeValue('#ffffff40', '#20202380')} style={{backdropFilter: 'blur(10px'}} zIndex={1} {...props}>
    <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between" >
      <Flex align="center" mr={5} >
        <Heading as="h1" size="md" mb={1} letterSpacing={'tighter'}>
          <Logo />
        </Heading>
      </Flex>
       <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <NextLink href="/about" >
            <a>About</a>
          </NextLink>
          <NextLink href="/works" >
            <a className='m'>Works</a>
          </NextLink>
          <NextLink href="/Posts" >
            <a className='m'>Posts</a>
          </NextLink>
        </Stack>
        
        <Box flex={1} align="right">
            <ThemeToggleButton/>
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/Posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
    </Container>  
  </Box>
 )
}

export default Navbar