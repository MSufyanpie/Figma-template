import React from 'react'
import { Badge, Button, Card } from 'react-bootstrap'
import { AiOutlineArrowRight } from "react-icons/ai";
import './LastCards.css'
import { Box, VStack } from '@chakra-ui/react';

export default function LastCards() {
  return (
    
    <Box px={'20%'} display={'flex'} alignItems={'center'} justifyContent={'center'} height={'100vh'} >
      
    <div  style={{display:'flex',justifyContent:'space-between'}}>
        <Card style={{width:'90%',backgroundColor:'#FCDCB5',height:'60%',border:'none',}}
        >
            <div style={{display:'flex',justifyContent:'space-evenly'}}>
            
            <h1 style={{marginTop:'10%',marginRight:'2%'}}>Check Out Our Specials </h1>
            <h4 style={{marginTop:'5%'}}> <Badge className='custom-badge' >Up to 40% off</Badge></h4>
            </div>
            <div style={{display:'flex',justifyContent:'space-evenly'}}>
                <div style={{display:'grid'}}>
                <p style={{marginTop:'2%',marginLeft:'10%'}}>suspendisse potenti nullam ac tortor vitaePotenti nullam ac tortor
              vitae purus faucibus ornare vitae purus faucibus ornare</p>
                
              </div>
            <img style={{height:'300px',width:'400px',marginRight:'3%'}} src="src\assets\pet-accessories-still-life-concept-with-chew-ball.png" alt="" />
            </div>

            <Button variant='none' style={{border:'none',color:'#9C5BF5'}}><h5><b>Get Service</b></h5></Button>
        </Card>
        <div style={{display:'grid'}}>
        <Card style={{height:'250px',width:'350px',backgroundColor:'#FFDA47',border:'none',borderRadius:'10px',marginLeft:'2%'}}>
        <div style={{display:'flex'}}>
            <div style={{display:'grid'}}>
            <h3 style={{marginLeft:'3%',marginTop:'4%'}}>Luxury Fashion Collection</h3>
            
            <Button variant='none' style={{border:'none',color:'#9C5BF5',}}><b>Shop Now</b></Button>
            </div>
            <img style={{height:'250px',width:'150px',float:'right'}} src="src\assets\pet-dressed-necktie-2021-08-27-22-18-47-utc (1).png" alt="" />
            
           
            </div>
            
        </Card>
        <Card style={{height:'250px',width:'350px',backgroundColor:'#FFDA47',border:'none',borderRadius:'10px',marginTop:'2%',marginLeft:'2%'}}>
        <div style={{display:'flex'}}>
            <div style={{display:'grid'}}>
            <h3 style={{marginLeft:'3%',marginTop:'4%'}}>Shop What's Trending</h3>
            
            <Button variant='none' style={{border:'none',color:'#9C5BF5',}}><b>Shop Now</b></Button>
            </div>
            <img style={{height:'250px',width:'150px',float:'right'}} src="src\assets\charles-deluvio-Mv9hjnEUHR4-unsplash (1).png" alt="" />
            
           
            </div>
            
        </Card>
        </div>
    </div>
    
    </Box>
   
  )
}
