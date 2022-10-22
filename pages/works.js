import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'

// Assets
import thumbLasles from '../public/images/works/LaslesVPN.png'

const Work = () => (
    <Layout title='Works'>
        <Container>
            <Heading as='h3' fontSize={20} mb={4} mt={6}>
                Works
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id='laslesvpn' title='LaslesVPN' thumbnail={thumbLasles}>
                        Slicing design Landing page application for LaslesVPN.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>    
)

export default Work