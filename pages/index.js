import { Container, Box, Heading, Image, useColorModeValue, Button, Link, Icon, Wrap, WrapItem }from '@chakra-ui/react'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoInstagram, IoLogoGithub, IoLogoWhatsapp } from 'react-icons/io5'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'


const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" fontFamily="Poppins" bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")} p={3} mb={6} mt={6} align="center">
                    Hello, I&apos;m a full-stack developer based in Indonesian !
                </Box>
                <Box display={{md: "flex"}}>
                    <Box flexGrow={1} fontFamily="Poppins">
                        <Heading as="h2" variant="page-title" >
                            Artha Adiyaksa
                        </Heading>
                        <p>Student"s ( Fullstack Developer / Full Time Trader )</p>
                    </Box>
                    <Box 
                    flexShrink={1} 
                    mt={{base: 4, md: 0}} 
                    ml={{md: 6}} 
                    align="center">
                        <Image 
                        borderColor="whiteAlpha.800" 
                        borderWidth={2} 
                        borderStyle="solid" 
                        maxWidth="100px" 
                        display="inline-block" 
                        borderRadius="full"
                        src="/images/Artha.png"
                        alt="Profile" />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        Artha is a freelance and a full passion for building a digital services/stuff he wants. I"am a 20 y.o from indonesian and have a dream become a great programmer, and have motivation to build a amazing application that people can use.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button fontFamily={"Poppins"} rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                My Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2002</BioYear>
                        Born in Ternate, Indonesia
                    </BioSection>
                    <BioSection>
                        <BioYear>2015</BioYear>
                        Completed Balikpapan State Elementary School Education
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Completed Airlangga Samarinda High School Education majoring in <b>Software Engineering</b>
                    </BioSection>
                    <BioSection>
                        <BioYear>2021 to present</BioYear>
                        Work"s as a freelance
                    </BioSection>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I &hearts;
                    </Heading>
                    <Paragraph>
                        Games, Art, Music, Machine Learning
                    </Paragraph>
                </Section>
                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title"> 
                        On the web
                    </Heading>
                    <Wrap spacing="10px" alignItems="center">
                        <WrapItem>
                            <Link href="https://github.com/ExMsg/" style={{textDecoration: "none"}} target="_blank">
                                <Button variant="ghost" colorScheme="teal" fontWeight="normal" leftIcon={<Icon as={IoLogoGithub} />}>
                                    @ExMsg
                                </Button>
                            </Link>
                        </WrapItem>
                        <WrapItem>
                            <Link href="https://instagram.com/xyzzarta/" style={{textDecoration: "none"}} target="_blank">
                                <Button variant="ghost" colorScheme="teal" fontWeight="normal" leftIcon={<Icon as={IoLogoInstagram} />}>
                                    @xyzzarta
                                </Button>
                            </Link>
                        </WrapItem>
                        <WrapItem>
                            <Link href="https://wa.me/6281253817752?text=Hello There, Any project you working for?" style={{textDecoration: "none"}} target="_blank">
                                <Button variant="ghost" colorScheme="teal" fontWeight="normal" leftIcon={<Icon as={IoLogoWhatsapp} />}>
                                    @Arthaaa
                                </Button>
                            </Link>
                        </WrapItem>
                    </Wrap>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page