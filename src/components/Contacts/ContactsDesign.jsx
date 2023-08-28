import React from 'react'
import { Box, Card, CardBody, HStack } from '@chakra-ui/react'
import {AiFillPhone,AiFillMail,AiFillClockCircle} from "react-icons/ai";
import {BiMap}from "react-icons/bi"
import './Contact.css'

export default function ContactsDesign({ id,Title,line1,line2,line3}) {
  return (
    
         <Box 
         
         justifyContent={'center'} alignContent={'center'} >
        
        
        
            <Card  mb={'40px'} boxSize={'250px'} style={{border:'1px solid purple'}} key={id}>
                <CardBody>
                <div className='icon1'>
                   <div style={{color:'purple'}}>{line3}</div> 
                </div>
                <Box   alignItems={'center'} justifyContent={'center'}>
             <h3>{Title}</h3>
             <p>{line1}</p>
             <p>{line2}</p>
             
             </Box>
             </CardBody>
             
            </Card>
        
       
       
    </Box> 
    
  )
}
