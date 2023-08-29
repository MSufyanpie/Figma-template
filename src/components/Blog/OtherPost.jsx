import { Box, HStack,Image,VStack } from '@chakra-ui/react'
import React from 'react'
import { Badge, Card } from 'react-bootstrap'
import other1 from '../../assets/other1.png'
import other2 from '../../assets/other2.png'
import other3 from '../../assets/other3.png'

import './Blog.scss'
import OtherPostDeign from './OtherPostDeign'
 

export default function OtherPost() {
    const posts=[
        { author:'by Corabelle Durrad',
          date:'02.01.2022',
          title:'5 Crazy Things Dogs Do When Left Alone At Home',
          description:'Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.',
          imageUrl:other1,
          badge:'Training'
          
        },
        
        { 
            author:'by Corabelle Durrad',
          date:'02.01.2022',
          title:'Your Dog Desperately Needs From You',
          description:'Amet porttitor eget dolor morbi non arcu risus quis varius  sodales ut etiam sit amet ',
          imageUrl:other2,
          badge:'Training'
        },
        { 
            author:'by Corabelle Durrad',
          date:'02.01.2022',
          title:'Top Cat Foods to Consider If You Are a First Time Owner',
          description:'Amet porttitor eget dolor morbi non arcu risus quis varius  sodales ut etiam sit amet ',
          imageUrl:other3,
          badge:'Pet Food'
        }
    ]
  return (
        <Box
        className='otherposts-box'
        px={'10%'}  >
            <div style={{textAlign:'center'}}>
            
            <h1>Other Posts</h1><br/>
            </div>
        <div className='otherpost-div' >
    {posts.map((data,index)=>{
        return(
          <OtherPostDeign
        
          id={index}
          author={data.author}
          date={data.date}
          title={data.title}
         description={data.description}
         imageUrl={data.imageUrl}
          badge={data.badge}
          />
        )
    }
    )}
    </div>
    </Box>
    
  )
}
