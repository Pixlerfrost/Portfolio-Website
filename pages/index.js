import { Box, Container, Heading } from "@chakra-ui/react"

function Page() {
  return (
  <Container>
    <Box borderRadius="lg" bg='red' p={3} mb={6} align="center">
      Hi, I'm a front-end developer based in the U.S! 
      </Box>

      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
        Mohamad Youness  
        </Heading>  
        <p>Beginner Developer</p>
        </Box>  
      </Box>
  </Container>
  )
}

export default Page
