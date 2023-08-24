import { Box, HStack } from '@chakra-ui/react'
import React from 'react'
import { Card } from 'react-bootstrap'

export default function LastCard() {
  return (
    <Box px={'30%'}   justifyContent={'center'} height={'30vh'} >
        
    <div style={{textAlign:'center'}}>
        <Card style={{backgroundColor:'#9C5BF5', justifyContent:'space-evenly',height:'25vh'}}>
        <HStack ml={'4%'} mr={'4%'}>
            {/* <div style={{display:'flex',justifyContent:'space-evenly',marginTop:'3%',marginBottom:'3%'}}> */}
            
            <Box px={'2%'}>
             <div style={{display:'flex'}}>
                <img  style={{height:'50px',width:'50px',marginTop:'5%'}} src="src\assets\last card dog1.png" alt="" />
                <div style={{display:'grid',marginLeft:'3%'}}>
                    <h2 style={{color:'white'}}>
                        <b>120+</b>
                    </h2>
                    <p style={{color:'white'}}>Satisfied Clients</p>
                </div>
             </div>  </Box>  

            <Box px={'6%'}>
            <div style={{display:'flex'}}>
                <img  style={{height:'50px',width:'50px',marginTop:'5%'}} src="src\assets\pngegg.png" alt="" />
                <div style={{display:'grid',marginLeft:'3%'}}>
                    <h2 style={{color:'white'}}>
                        <b>20+</b>
                    </h2>
                    <p style={{color:'white'}}>Years Experience</p>
                </div>
            </div>    
            </Box>
            <Box px={'6%'}>
            <div style={{display:'flex'}}>
                <img  style={{height:'50px',width:'50px',marginTop:'5%'}} src="src\assets\petshop.png" alt="" />
                <div style={{display:'grid',marginLeft:'3%'}}>
                    <h2 style={{color:'white'}}>
                        <b>70+</b>
                    </h2>
                    <p style={{color:'white'}}>Brands Avalaible</p>
                </div>
            </div>    
            </Box>
            <Box px={'5%'}>
            <div style={{display:'flex'}}>
                <img  style={{height:'50px',width:'50px',marginTop:'5%'}} src="src\assets\petBag.png" alt="" />
                <div style={{display:'grid',marginLeft:'3%'}}>
                    <h2 style={{color:'white'}}>
                        <b>200+</b>
                    </h2>
                    <p style={{color:'white'}}>Products for pets</p>
                </div>
            </div>   
            </Box> 
        
        



            {/* </div> */}
            </HStack>
        </Card>
    </div>
    
    </Box>
  )
}
