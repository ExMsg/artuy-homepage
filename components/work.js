import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box fontFamily='Poppins' mt={6}>
    <NextLink href="/works" passHref>
      <Link color={useColorModeValue('blue.300', 'green.300')}>Works</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const LinkTitle = ({children, href}) => (
  <Link href={href} target='_blank'>
    {children}
  </Link>
)

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme={useColorModeValue('purple', 'green')} fontFamily='Poppins' mr={2}>
    {children}
  </Badge>
)