import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../Components/main'


const Website = ({Component, pageProps, router }) => {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website