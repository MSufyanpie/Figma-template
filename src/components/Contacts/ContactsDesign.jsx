import React from 'react'
import { Box, Card, CardBody,   } from '@chakra-ui/react'

import './Contact.scss'


export default function ContactsDesign({ id,Title,line1,line2,line3}) {
  return (
    
         <Box 
         
          >
        
        
        
            <Card
            boxSize={'250px'}
            className='contact-cards'
            
             key={id}>
                <CardBody>
                <div className='icon1'>
                   <div className='contact-icons' >{line3}</div> 
                </div>
                <Box>
             <h3>{Title}</h3>
             <p>{line1}</p>
             <p>{line2}</p>
             
             </Box>
             </CardBody>
             
            </Card>
        
       
       
    </Box> 
    
  )
}
