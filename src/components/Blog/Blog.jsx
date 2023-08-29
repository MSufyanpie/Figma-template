import {  Box,  } from '@chakra-ui/react'
import React from 'react'

import blog1 from '../../assets/blog1.png'
import blog2 from '../../assets/blog2.png'
import blog3 from '../../assets/blog3.png'

import './Blog.scss'
import BlogDesign from './BlogDesign'

export default function Blog() {
    const posts=[
        { author:'by Corabelle Durrad',
          date:'02.01.2022',
          title:'5 Crazy Things Dogs Do When Left Alone',
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
          title:' Cat Foods to Consider If You Are a Owner',
          description:'Amet porttitor eget dolor morbi non arcu risus quis varius  sodales ut etiam sit amet ',
          imageUrl:blog3,
          badge:'Pet Food'
        }
    ]
  return (
    
        <Box
        className='postsBox'
         px={'15%'} >
            <div style={{textAlign:'center'}}>
            <p><b>Our Blog</b></p>
            <h1>Latest Post</h1><br/>
            </div>
           
        <div
        className='blog-posts'
        >

    {posts.map((data,index)=>{
        return(
         <BlogDesign
        
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
