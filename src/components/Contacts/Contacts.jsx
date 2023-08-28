import { Box, Card, CardBody, HStack } from '@chakra-ui/react'
import React from 'react'

import {AiFillPhone,AiFillMail,AiFillClockCircle} from "react-icons/ai";
import {BiMap}from "react-icons/bi"
import './Contact.css'
import ContactsDesign from './ContactsDesign';

export default function Contacts() {
    const contact=[
        { Title:'Phone',
          line1:'(913) 756-3126 (921)',
          line2:'(913) 756-3126 (921)',
          line3:<AiFillPhone/>,
        },
        
        { 
            Title:'Email',
            line1:'example@example.ocm',
            line2:'example@example.ocm',
            line3:<AiFillMail/>,
        },
        { 
            Title:'Address',
            line1:'Lahore',
            line2:'Faislabad',
            line3:<BiMap/>,
        }, { 
            Title:'Open Hours',
            line1:'Mon-Fri: 7am-6pm',
            line2:'Saturday:9am-4am',
            line3:<AiFillClockCircle/>,     
        }
    ]
  return (
    <Box px={'10%'}  style={{backgroundColor:'#FBF9FF',height:'70vh',}}>
         <div style={{textAlign:'center',marginBottom:'40px'}}>
            <p ><b>Our Contacts</b></p>
            <h1>Contact</h1>
            </div>
            <div className='parent-container'>
            {contact.map((data,index)=>{
                return(
                <ContactsDesign 
                id={index}
                Title={data.Title}
                line1={data.line1}
                line2={data.line2}
                line3={data.line3}
                />
                )
            })}
           </div>
    {/* <Box justifyContent={'center'} alignContent={'center'} >
        
        <HStack  >
        {contact.map((data,index)=>{
        return(
            <Card  mb={'40px'} boxSize={'250px'} style={{border:'1px solid purple'}} key={index}>
                <CardBody>
                <div className='icon1'>
                   <div style={{color:'purple'}}>{data.line3}</div> 
                </div>
                <Box   alignItems={'center'} justifyContent={'center'}>
             <h3>{data.Title}</h3>
             <p>{data.line1}</p>
             <p>{data.line2}</p>
             
             </Box>
             </CardBody>
             
            </Card>
        )
        })}
        </HStack>
    </Box> */}
    </Box>
  )
}
