import { Box } from '@chakra-ui/react'
import React from 'react'
import './FirstTxtBox.scss'
export default function FirstTxtBox() {
  return (
    <Box
    className='parent-box'
    px={"12%"}
   >
    <p className='p-text'><b>WE CARE FOR YOUR PETS</b></p>
    <div >
    <h1 className='textno1'>We Help You Care</h1>
    <h1 className='textno1'>for Animals With</h1>
    <h1 className='textno1'>Nutrition.</h1><br/></div>
    <p className='description'>All offers are subject to availability.Ut tortor pretium viverra</p> 
        <p className='description'> suspendisse potenti nullam ac tortor vitae.Consectetur a erat  </p>
       <p className='description'> nam at. Potenti nullam ac tortor vitae purus faucibus ornare.</p>
       </Box>
  )
}
