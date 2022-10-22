import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" mt={6} opacity={0.4} fontFamily='Poppins' fontSize="sm">
      &copy; {new Date().getFullYear()} Artha Adiyaksa. All Rights Reserved.
    </Box>
  )
}

export default Footer