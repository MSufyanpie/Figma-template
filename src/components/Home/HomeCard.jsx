import { Box } from '@chakra-ui/react'
import React from 'react'
import { Card } from 'react-bootstrap'
import { AiFillCar,AiOutlineUser, } from 'react-icons/ai'
import { BiSolidDiscount,BiCheckboxChecked } from 'react-icons/bi'

export default function HomeCard() {
    
  return (
    <Box  px={"12%"}
    
    alignItems={"center"}
    justifyContent={"center"}
    height={"60vh"}>
        <Card  style={{border:'none',
        }}>
            <div style={{display:'flex',}}>
                <div style={{border:'0.5px solid grey',
                color:'#7C58D3', 
                fontSize:'40px',
                borderRadius:'5px',
                height:'55px',
                width:'45px'
                
                }}><AiFillCar></AiFillCar></div>
                <div style={{display:'block', marginRight:'1%',marginLeft:'1%'}}>
                <h5>
                    Trust & Safety
                </h5>
                <p>Velit euismod pellentes</p>
                </div>
                <div style={{border:'0.5px solid grey',
                
                color:'#7C58D3',
                 marginBottom:'2.5%' ,
                 borderRadius:'5px',
                 fontSize:'40px',
                 height:'55px',
                 width:'45px',
                 marginLeft:'4%'
                 }}><BiSolidDiscount></BiSolidDiscount></div>
                <div style={{display:'block',marginLeft:'1%',marginRight:'1%'}}>
               
                <h5>
                    Discounts
                </h5>
                <p>Velit euismod pellentes</p>
                
                </div>
            </div>


            <div style={{display:'flex'}}>
                <div style={{border:'0.5px solid grey',
                
                color:'#7C58D3',
                marginBottom:'2.5%',
                borderRadius:'5px',
                fontSize:'40px',
                height:'55px',
                width:'45px',
                
                }}><AiOutlineUser></AiOutlineUser></div>
                <div style={{display:'block',marginRight:'1%',marginLeft:'1%'}}>
                <h5>
                    Support
                </h5>
                <p>Velit euismod pellentes</p>
                </div>
                <div style={{border:'0.5px solid grey',
                
                color:'#7C58D3',
                marginBottom:'2.5%',
                borderRadius:'5px',
                fontSize:'40px',
                height:'55px',
                width:'45px',
                marginLeft:'4%'
                }}><BiCheckboxChecked></BiCheckboxChecked></div>
                <div style={{display:'block',marginLeft:'1%'}}>
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
