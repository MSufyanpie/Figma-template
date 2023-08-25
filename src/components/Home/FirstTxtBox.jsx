import { Box } from '@chakra-ui/react'
import React from 'react'

export default function FirstTxtBox() {
  return (
    <Box
    px={"12%"}
    alignItems={"center"}
    justifyContent={"center"}
    height={"35vh"}>
    <p style={{color:'#7C58D3',fontFamily:'nunito',fontWeight:'300px'}}><b>WE CARE FOR YOUR PETS</b></p>
    <div >
    <h1 style={{fontSize:'60px',fontFamily:'nunito',fontWeight:'1000'}}>We Help You Care</h1>
    <h1 style={{fontSize:'60px',fontFamily:'nunito',fontWeight:'1000'}}>for Animals With</h1>
    <h1 style={{fontSize:'60px',fontFamily:'nunito',fontWeight:'1000'}}>Nutrition.</h1><br/></div>
    <p>All offers are subject to availability.Ut tortor pretium viverra</p> 
        <p> suspendisse potenti nullam ac tortor vitae.Consectetur a erat  </p>
       <p> nam at. Potenti nullam ac tortor vitae purus faucibus ornare.</p>
       </Box>
  )
}
