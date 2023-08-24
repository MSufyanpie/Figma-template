import { Box, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './ProductCard.css'

export default function ProductCard() {
  return (
    <Box  px={'18%'}  justifyContent={'center'} >
    
        
        <Card style={{border:'3px solid purple',backgroundImage:'img.png',backgroundColor:'#7C58D3'}}>
        <HStack>
            <br></br>
            <br></br>
            <img height={'250px'} width={'250px'} src="src\assets\productImages\ginger.png" alt="" />
            <VStack>
                
                
            <h2 style={{color:'white'}}><b>Get 20% off Your First Purchase
            When You Use Petco Credit Card</b></h2>
            {/* <h2 style={{color:'white'}}><b>When You Use Petco Credit Card</b></h2> */}
            <p style={{color:'white',marginTop:'1%'}}>Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum varius.
            Ligula ullamcorper malesuada proin libero nunc consequat interdum  sit.
            </p>
            <HStack>
            <input  placeholder='Type your Email'></input>
            <button className='subscribe-btn'><b>Subscribe</b></button>
            </HStack>
            </VStack>
            <img height={'300px'} width={'300px'} src="src\assets\productImages\2ndDog.png" alt="" />
            </HStack>
        </Card>
      
    </Box>
  )
}
