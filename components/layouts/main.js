import Head from 'next/head'
import Navbar from '../navbar'
import Footer from '../footer'
import { Box, Container } from '@chakra-ui/react'

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Artha homepage" />
                <meta name="author" content="Artha Adiyaksa" />
                <meta name="author" content="ExMsg" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <title>Homepage - Artha Adiyaksa</title>
            </Head>
            
            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main