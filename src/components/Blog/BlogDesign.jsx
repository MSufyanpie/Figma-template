import React from 'react'
import {  Box,  HStack,Image, } from '@chakra-ui/react'
import  { AiOutlineUser,AiFillCalendar } from 'react-icons/ai'
import { Badge, Card } from 'react-bootstrap'
import './Blog.scss'

export default function BlogDesign({id,author,date,title,description,imageUrl,badge}) {
  return (
    <div>
        
            <Box
           
            key={id}>
           
            
                <Card 
                className='postsCard'
                >
              
                  <div>
                    <Badge className='badge-1' bg='warning' style={{color:'black'}} >{badge}</Badge>
                  </div>
                  
                  <Image className='postimages' src={imageUrl}></Image>
                          
                </Card>
                
                <HStack>
                <p style={{fontSize:'15px'}}>
                    <AiOutlineUser style={{color:'purple'}}/><b>{author}</b></p>
                    
                    <p style={{fontSize:'15px'}}><AiFillCalendar style={{color:'purple'}}/><b>{date}</b></p>
                </HStack>
                <h5><b>{title}</b></h5>
                <p>{description}</p>
                
                 </Box>
                 
    </div>
  )
}
