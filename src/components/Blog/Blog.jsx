import {  Box,  HStack,Image,VStack } from '@chakra-ui/react'
import React from 'react'
import { Badge, Card } from 'react-bootstrap'
import blog1 from '../../assets/blog1.png'
import blog2 from '../../assets/blog2.png'
import blog3 from '../../assets/blog3.png'
import  { AiOutlineUser,AiFillCalendar } from 'react-icons/ai'
import './Blog.css'

export default function Blog() {
    const posts=[
        { author:'by Corabelle Durrad',
          date:'02.01.2022',
          title:'5 Crazy Things Dogs Do When Left Alone At Home',
          description:'Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.',
          imageUrl:blog1,
          badge:'Training'

          
        },
        
        { 
            author:'by Corabelle Durrad',
          date:'02.01.2022',
          title:'Your Dog Desperately Needs From You',
          description:'Amet porttitor eget dolor morbi non arcu risus quis varius  sodales ut etiam sit amet ',
          imageUrl:blog2,
          badge:'Pet Health'
        },
        { 
            author:'by Corabelle Durrad',
          date:'02.01.2022',
          title:'Top Cat Foods to Consider If You Are a First Time Owner',
          description:'Amet porttitor eget dolor morbi non arcu risus quis varius  sodales ut etiam sit amet ',
          imageUrl:blog3,
          badge:'Pet Food'
        }
    ]
  return (
        <Box px={'25%'}  alignItems={'center'} justifyContent={'center'} height={'70vh'}>
            <div style={{textAlign:'center'}}>
            <p><b>Our Blog</b></p>
            <h1>Latest Post</h1><br/>
            </div>
        <HStack>
    {posts.map((data,index)=>{
        return(
            <Box key={index}>
            
                <Card>
              
                  <div>
                    <Badge className='badge-1' bg='warning' style={{color:'black'}} >{data.badge}</Badge>
                  </div>
                  
                  <Image src={data.imageUrl}></Image>
                        
                  
                      
                </Card>
                
                <HStack>
                <p style={{fontSize:'15px'}}>
                    <AiOutlineUser style={{color:'purple'}}/><b>{data.author}</b></p>
                    
                    <p style={{fontSize:'15px'}}><AiFillCalendar style={{color:'purple'}}/><b>{data.date}</b></p>
                </HStack>
                <h5><b>{data.title}</b></h5>
                <p>{data.description}</p>
                
                </Box>
        )
    }
    )}
    </HStack>
    </Box>
    
  )
}
