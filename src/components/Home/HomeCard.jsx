import { Box,Card } from '@chakra-ui/react'
import React from 'react'

import { AiFillCar,AiOutlineUser, } from 'react-icons/ai'
import { BiSolidDiscount,BiCheckboxChecked } from 'react-icons/bi'
import './HomeCard.scss'
export default function HomeCard() {
    
  return (
    <Box  
    className='firstBox'
    px={"12%"}
    >
        <Card 
        variant={'unstyled'}
        className='home-card'
        >
            <div 
            className='parentDiv'
            >
                <div
                className='icon-div1'
               ><AiFillCar></AiFillCar></div>
                <div
                className='content-div1'
               >
                <h5>
                    Trust & Safety
                </h5>
                <p>Velit euismod pellentes</p>
                </div>
                <div
                className='icon-div2'
                ><BiSolidDiscount></BiSolidDiscount></div>
                <div
                 className='content-div2'
                >
               
                <h5>
                    Discounts
                </h5>
                <p>Velit euismod pellentes</p>
                
                </div>
            </div>


            <div
            className='parentDiv2'
           >
                <div  className='icon-div3' ><AiOutlineUser></AiOutlineUser></div>
                <div 
                 className='content-div3'
               >
                <h5>
                    Support
                </h5>
                <p>Velit euismod pellentes</p>
                </div>
                <div
                 className='icon-div4'
               ><BiCheckboxChecked></BiCheckboxChecked></div>
                <div
                 className='content-div4'
               >
                <h5>
                    Guarantee
                </h5>
                <p>Velit euismod pellentes</p>
                </div>
            </div>
        </Card>
        </Box>
  )
}
