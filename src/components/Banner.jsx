import { Box, Button, Heading, Img, Text } from '@chakra-ui/react'
import React from 'react'

const Banner = () => {
  return (
    <Box>
        <Box  position={'relative'}>
            <Img  h={'100vh'} w={'100%'} src='https://images.pexels.com/photos/416324/pexels-photo-416324.jpeg?auto=compress&cs=tinysrgb'/>
            <Box position={'absolute'} top={'25px'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} h={'100vh'}>
            <Box p={'20px'}>
                <Heading color={'white'} size={'2xl'}>Data-powered solutions for Industrial Excellence</Heading>
                <Button style={{borderRadius:'3px',padding:"0 30px"}} m={'25px 0'} colorScheme='blue'>Read More</Button>
            </Box>
            <Box >
                <Img w={'90%'} display={'block'} m={'auto'}  src='https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png'/>
            </Box>
            </Box>
            {/* navbar */}
            <Box position={'absolute'} top={'0'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} color={'white'}  p={'5px 20px'}>
        <Box>
            <Img w={'20%'} src={'https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png'}/>
        </Box>
        <Box display={'flex'} justifyContent={'space-between'} gap={'10px'} w={'50%'} >
            <Text fontWeight={'bold'}>Home</Text>
            <Text fontWeight={'bold'}>Industries</Text>
            <Text fontWeight={'bold'}>AI Software</Text>
            <Text fontWeight={'bold'}>Blog</Text>
            <Text fontWeight={'bold'}>Contact Us</Text>
        </Box>
    </Box>

        </Box>
    </Box>
  )
}

export default Banner
