import { Box,} from '@chakra-ui/react'
import React from 'react'

import {AiFillPhone,AiFillMail,AiFillClockCircle} from "react-icons/ai";
import {BiMap}from "react-icons/bi"
import './Contact.scss'
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
    <Box
    className='contacts-box'
    px={'10%'}  >
         <div className='first-div'>
            <p ><b>Our Contacts</b></p>
            <h1>Contact</h1>
            </div><br/>
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
  
    </Box>
  )
}
