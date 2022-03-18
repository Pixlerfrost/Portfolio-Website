import { Box, Container, Heading, Image, useColorModeValue, Button } from "@chakra-ui/react"
import Paragraph from '../Components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Section from '../components/section'


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
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Mohamad Youness is a front-end developer thats based in the U.S. He is a passionate programmer and aspires to become a Freelancer. In his free time he likes to play sports and watch Anime/tv.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1984</BioYear>
          Born in Osaka (大阪), Japan.
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Completed the Master&apos;s Program in the Graduate School of
          Information Science at Nara Institute of Science and Technology
          (奈良先端科学技術大学院大学情報科学研究科修士課程)
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Worked at Yahoo! Japan (ヤフー株式会社入社)
        </BioSection>
        <BioSection>
          <BioYear>2012 to present</BioYear>
          Works as a freelance
        </BioSection>
      </Section>
    </Container>
  )
}

export default Page
