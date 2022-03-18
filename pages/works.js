import { Container, Heading } from "@chakra-ui/react";
import Paragraph from '../Components/paragraph'
function Works() {

 return (
  <Container>
   <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
    Works
   </Heading>
   <Paragraph>
    All my main projects should be pinned repositories on my GitHub
   </Paragraph>
  </Container>
 )
}

export default Works