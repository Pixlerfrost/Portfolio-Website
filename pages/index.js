import { Box, Container, Heading, Image, useColorModeValue } from "@chakra-ui/react"



function Page() {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('gray.300', 'whiteAlpha.200')} p={3} mb={6} align="center">
        Hello, I'm a front-end developer based in the U.S!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Mohamad Youness
          </Heading>
          <p>Digital Craftsman ( 3D Artist / Developer / Animator )</p>
        </Box>
        <Box flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center">
          <Image borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow='hidden'
            src="/images/MyBird.png" />
        </Box>
      </Box>
    </Container>
  )
}

export default Page
