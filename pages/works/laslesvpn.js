import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta, LinkTitle } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="LaslesVPN">
      <Container>
        <Title>
          LaslesVPN <Badge>2022</Badge>
        </Title>
        <P>
            Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.
        </P>
        <List fontFamily='Poppins' ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <LinkTitle href='/'>
              LaslesVPN <ExternalLinkIcon mx="2px" />
            </LinkTitle>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>TailwindCSS, React Native</span>
          </ListItem>
          <ListItem>
            <Meta>Designed By</Meta>
            <LinkTitle href='https://dribbble.com/didikurniawan'>
              Didi Kurniawan <ExternalLinkIcon mx="2px" />
            </LinkTitle>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/LaslesVPN.png" alt="LaslesVPN" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'