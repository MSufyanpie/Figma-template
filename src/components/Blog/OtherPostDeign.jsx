import React from 'react'
import { Box, HStack,Image,VStack } from '@chakra-ui/react'
import { Badge, Card } from 'react-bootstrap'
import  { AiOutlineUser,AiFillCalendar } from 'react-icons/ai'
export default function OtherPostDeign({id,author,date,title,description,imageUrl,badge}) {
  return (
    
      <Box key={id}>
            
            <Card className='otherpost-card'>
            <div>
                <Badge className='badge-1' bg='warning' style={{color:'black'}} >{badge}</Badge>
              </div>
                
                  <Image src={imageUrl}></Image>
                
                    
            </Card>
            <HStack>
               <p style={{fontSize:'15px'}}>
                <AiOutlineUser style={{color:'purple'}}/><b>{author}</b></p>
                
                <p style={{fontSize:'15px'}}><AiFillCalendar style={{color:'purple'}}/><b>{date}</b></p>
            </HStack>
            <h5><b>{title}</b></h5>
            <p>{description}</p>
            
            </Box>   
    
  )
}
