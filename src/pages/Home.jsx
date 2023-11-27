import { Box, Button, Heading, Img, Text } from '@chakra-ui/react'
import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

export default function Home() {
  return (
   <Box>

<Banner/>




    {/* body content */}
    <Box w={'95%'} m={' auto'}>
        {/* one */}
        <Box display={'flex'} justifyContent={'space-between'}gap={'20px'} m={'20px 0'}>
            <Box w={'50%'} p={'10px'} alignContent={'center'}>
                <Heading size={'2xl'} fontWeight={'semiBold'} color={'red'}>Mine-To-Mill-To-Mine Optimization</Heading>
                <Text p={'20px 0'}>NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans.</Text>
                <Button bg='#FF3A2D' color={'white'} m={'20px 0'} style={{borderRadius:'3px'}}>Read More</Button>
            </Box>
            <Box w={'50%'}  >
                <Img display={'block'} m={'auto'} w={'95%'} src='https://ntwist.com/wp-content/uploads/2023/01/iStock-1339284457-1536x1024.jpg'/>
            </Box>
        </Box>
        {/* two */}
        <Box display={'flex'} justifyContent={'space-between'}gap={'20px'} m={'20px 0'}>
        <Box w={'50%'}  >
                <Img display={'block'} m={'auto'} w={'95%'} src='https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575.jpg'/>
            </Box>
            <Box w={'50%'} p={'10px'}>
                <Heading size={'2xl'} fontWeight={'semiBold'} color={'red'}>Sustainability</Heading>
                <Text p={'20px 0'}>Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers.</Text>
                <Text>With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics.</Text>
                <Button bg='#FF3A2D' color={'white'} m={'20px 0'} style={{borderRadius:'3px'}}>Read More</Button>
            </Box>
            
        </Box>

        {/* third */}
        <Box display={'flex'} justifyContent={'space-between'}gap={'20px'} m={'20px 0'}>
            <Box w={'50%'} p={'10px'}>
                <Heading size={'2xl'} fontWeight={'semiBold'} color={'red'}>Mineral Processing</Heading>
                <Text p={'20px 0'}>NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.</Text>
                <Button bg='#FF3A2D' color={'white'} m={'20px 0'} style={{borderRadius:'3px'}}>Read More</Button>
            </Box>
            <Box w={'50%'}  >
                <Img display={'block'} m={'auto'} w={'95%'} src='https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg'/>
            </Box>
        </Box>

         {/* fourth */}
         <Box display={'flex'} justifyContent={'space-between'}gap={'20px'} m={'20px 0'}>
        <Box w={'50%'}  >
                <Img display={'block'} m={'auto'} w={'95%'} src='https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png'/>
            </Box>
            <Box w={'50%'} p={'10px'}>
                <Heading size={'2xl'} fontWeight={'semiBold'} color={'red'}>Oil & Gas</Heading>
                <Text p={'20px 0'}>Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment.</Text>
                <Text>NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety.</Text>
                <Button bg='#FF3A2D' color={'white'} m={'20px 0'} style={{borderRadius:'3px'}}>Read More</Button>
            </Box>
            
        </Box>
    </Box>


    {/* footer */}
<Footer/>
   </Box>
  )
}
