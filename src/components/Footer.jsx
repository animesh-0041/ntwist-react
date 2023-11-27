import { Box, Img, Text } from '@chakra-ui/react'
import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <Box h={'350px'} bg={'#081528'} p={'50px 0'}>
        <Box textAlign={'center'}>
            <Img display={'block'} m={'auto'} w={'10%'} src='https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png'/>
        </Box>
<Box w={'40%'} m={'auto'} p={'10px 0'}>
    <Box display={'flex'} justifyContent={'space-around'} gap={'20px'} color={'white'}>
    <Text >Home</Text>
    <Text>About Us</Text>
    <Text>Contact US</Text>
    <Text>Privacy Policy</Text>
    <Text>Sitemap</Text>
    </Box>
</Box>
<Text color={'gray'} textAlign={'center'} p={'10px 0'}>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</Text>
<Box color={'white'} display={'flex'} w={'30%'} m={'auto'}  justifyContent={'center'} gap={'25px'} p={'20px 0'}>
    <FaTwitter size={'20px'}/>
     <FaLinkedin size={'20px'}/>
   
    
</Box>
<Text color={'gray'} textAlign={'center'} p={'10px 0'}>© 2022. Ntwist Inc.

</Text>


    </Box>
  )
}

export default Footer
