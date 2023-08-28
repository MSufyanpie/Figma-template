import React from 'react'
import {  HStack, Image,  VStack, Card } from '@chakra-ui/react'
import './ProductDesign.css'
export default function ProductsDesign({id,Name,Price}) {
  return (
    <div
    style={{  justifyContent: "space-evenly",
                        maxWidth:'33.33%',
                        padding:'0 3px',
                        border:'none',
                        marginBottom:'15px'
                      
            
            }}
    >
        <Card
            mt={'10%'}
            px={'5%'}
            variant={'unstyled'}
             key={id}>
                <HStack>
                <Image height={'80px'} width={'80px'}
                src="src\assets\productImages\1.png" alt="" />
                <VStack textAlign={'center'}>
                <h6>{Name}</h6>
                <span style={{color:'#e8e82e'}}>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
                <p style={{color:'#9C5BF5'}}><b>{Price}</b></p>
                </VStack>
                </HStack>
                <hr/>
                
            </Card>
    </div>
  )
}
