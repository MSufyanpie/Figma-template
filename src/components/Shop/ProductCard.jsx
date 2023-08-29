import { Box, } from '@chakra-ui/react'
import React from 'react'
import {  Card } from 'react-bootstrap'
import './ProductCard.scss'

export default function ProductCard() {
  return (
    <Box 
    className='box'
     px={'10%'}   >
    
        
        <Card
        className='card'>
        <div className='parent-div'>
            
            
            <img className='img-1' height={'300px'} width={'300px'} src="src\assets\productImages\2ndDog.png" alt="" />
            <div className='second-div'>
                
              <br/>  
            <h3 className='head1'><b>Get 20% off Your First Purchase
            When You Use Petco Credit Card</b></h3>
           
            <p className='txt'>Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum varius.
            Ligula ullamcorper malesuada proin libero nunc consequat interdum  sit.
            </p>
            <br/>
            <div className='third-div'>
            <input  placeholder='Type your Email'></input>
            <button className='subscribe-btn'><b>Subscribe</b></button>
            </div>
            </div>
            <img  height={'350px'} width={'350px'} src="src\assets\petdogg.png" alt="" />
            </div>
        </Card>
      
    </Box>
  )
}
