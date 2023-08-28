import { Box, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './ProductCard.css'

export default function ProductCard() {
  return (
    <Box 
    height={'55vh'}
     px={'10%'}  justifyContent={'center'} >
    
        
        <Card style={{border:'none',backgroundImage:'img.png',backgroundColor:'#7C58D3'}}>
        <HStack>
            <br></br>
            <br></br>
            <img className='img-1' height={'300px'} width={'300px'} src="src\assets\productImages\2ndDog.png" alt="" />
            <VStack mr={'2%'}>
                
                
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
            <img  height={'350px'} width={'350px'} src="src\assets\petdogg.png" alt="" />
            </HStack>
        </Card>
      
    </Box>
  )
}
