import { Box,Card, Image, Text } from '@chakra-ui/react'
import React from 'react'
import './LastCard.scss'

export default function LastCard() {
  return (
    
    <Box
    className='card-Box'
    px={'8%'}>
        
    <div 
    className='parentdiv'
   >
        <Card className='Card'
        backgroundImage={' linear-gradient(315deg, #d4418e 38%, #0652c5 62%)'}
       
        >
        <div  
        className='seconddiv'
        >
            
            
            <Box px={'5%'}>
             <div className='contentdiv' >
                <Image 
                height={'50px'}
                width={'50px'}
                 src="src\assets\last card dog1.png" alt="" />
                <div >
                    <h2>
                        <b>120+</b>
                    </h2>
                    <Text className='Text'>Satisfied Clients</Text>
                    
                </div>
             </div >  </Box>  

            <Box px={'6%'}>
            <div className='contentdiv' >
                <Image
                
                height={'50px'}
                width={'50px'}
                 src="src\assets\pngegg.png" alt="" />
                <div>
                    <h2>
                        <b>20+</b>
                    </h2>
                    <Text className='Text'>Years Experience</Text>
                    
                </div>
            </div >    
            </Box>
            <Box px={'6%'}>
            <div className='contentdiv' >
                <Image  
                height={'50px'}
                width={'50px'}
                 src="src\assets\petshop.png" alt="" />
                <div>
                    <h2>
                        <b>70+</b>
                    </h2>
                    <Text className='Text'>Brands Avalaible</Text>
                </div>
            </div >    
            </Box>
            <Box px={'5%'}>
            <div className='contentdiv'>
                <Image 
                height={'50px'}
                width={'50px'}
                src="src\assets\petBag.png" alt="" />
                <div>
                    <h2>
                        <b>200+</b>
                    </h2>
                    <Text className='Text'>Products for pets</Text>
                    
                </div>
            </div>   
            </Box> 
        
        



            
            </div>
        </Card>
    </div>
    
    </Box>
    
  )
}
