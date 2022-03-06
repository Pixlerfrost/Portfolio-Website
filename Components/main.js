import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../Components/navbar'

const Main = ({router, children}) => {
 return (
  <Box as='main' pb={8}>
   <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1 "/>
    <title>Mohamad Youness - HomePage</title>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
   </Head>

   <Navbar path={router.asPath} />

   <Container maxW="container.md" pt={14}>
    {children}
    </Container>
   </Box>
 )
}

export default Main