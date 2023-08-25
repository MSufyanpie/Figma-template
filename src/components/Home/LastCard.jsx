import { Box, HStack, SimpleGrid,Card, Image, VStack, Text } from '@chakra-ui/react'
import React from 'react'


export default function LastCard() {
  return (
    
    <Box  px={'13%'}   justifyContent={'center'} height={'30vh'} >
        
    <div style={{textAlign:'center'}}>
        <Card className='last-card'
        backgroundImage={' linear-gradient(315deg, #d4418e 38%, #0652c5 62%)'}
        backgroundColor={'#9C5BF5'}
        justifyContent={'space-evenly'} 
        height={'25vh'}
        >
        <HStack ml={'4%'} mr={'4%'}>
            
            
            <Box px={'5%'}>
             <HStack >
                <Image 
                height={'50px'}
                width={'50px'}
                 src="src\assets\last card dog1.png" alt="" />
                <VStack >
                    <h2 style={{color:'white'}}>
                        <b>120+</b>
                    </h2>
                    <Text color={'white'}>Satisfied Clients</Text>
                    
                </VStack>
             </HStack>  </Box>  

            <Box px={'6%'}>
            <HStack >
                <Image
                
                height={'50px'}
                width={'50px'}
                 src="src\assets\pngegg.png" alt="" />
                <VStack>
                    <h2 style={{color:'white'}}>
                        <b>20+</b>
                    </h2>
                    <Text color={'white'}>Years Experience</Text>
                    
                </VStack>
            </HStack>    
            </Box>
            <Box px={'6%'}>
            <HStack style={{display:'flex'}}>
                <Image  
                height={'50px'}
                width={'50px'}
                 src="src\assets\petshop.png" alt="" />
                <VStack>
                    <h2 style={{color:'white'}}>
                        <b>70+</b>
                    </h2>
                    <Text color={'white'}>Brands Avalaible</Text>
                </VStack>
            </HStack>    
            </Box>
            <Box px={'5%'}>
            <HStack>
                <Image 
                height={'50px'}
                width={'50px'}
                src="src\assets\petBag.png" alt="" />
                <VStack >
                    <h2 style={{color:'white'}}>
                        <b>200+</b>
                    </h2>
                    <Text color={'white'}>Products for pets</Text>
                    
                </VStack>
            </HStack>   
            </Box> 
        
        



            {/* </div> */}
            </HStack>
        </Card>
    </div>
    
    </Box>
    
  )
}
