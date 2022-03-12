import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../Components/navbar'
import Earth3d from '../Components/earth-3d'

const Main = ({ router, children }) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1 " />
        <title>Mohamad Youness - HomePage</title>
        <meta name="description" content="Mohamad's homepage" />
        <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" />
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
        <Earth3d />
      </Container>
    </Box>
  )
}

export default Main