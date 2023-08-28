import { Box, Button, Card, CardBody, CardHeader, HStack, Image, Input, List, ListIcon, ListItem, UnorderedList, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiFillPhone,AiOutlineArrowRight,AiFillFacebook,AiFillInstagram,AiFillTwitterCircle,AiOutlineWhatsApp} from "react-icons/ai";
import {BsDot} from "react-icons/bs"

export default function Footer() {
    
  return (
    
    <Box style={{ backgroundColor:'#FBF9FF',}} >
      <HStack alignItems={'center'} justifyContent={'center'}       >
        <HStack >
<Box>
          <Card ml={'5%'} variant={'unstyled'} background={'transparent'} 
          mb={'50px'} boxSize={'300px'}>
          <VStack>
            <HStack>
              <Image style={{height:'30px',width:'30px'}} src='src\assets\kutta.png'></Image>
              <h4 style={{color:'purple'}} >Pet Bonz</h4>

            </HStack>
            <p>Tristique nulla aliquet enim tortor at auctor urna nunc. Massa enim nec dui nunc mattis enim ut tellus. Sed ut perspiciatis unde ...</p>
          <HStack>

          <AiFillPhone style={{height:'50px',width:'50px',color:'purple'}}></AiFillPhone>
          <VStack>
            <h4>(913) 756-3126</h4>
            <p>Got Questions? Call us 24/7</p>
          </VStack>
          </HStack>
          </VStack>
          </Card>
          </Box>
          <Card ml={'5%'}  background={'transparent'} style={{borderRadius:'0', }} variant={'unstyled'} mb={'30px'} boxSize={'320px'} >
            <CardHeader>
          <h4 style={{color:'purple'}}>Working Hours</h4>
          </CardHeader>
          <CardBody  mb={'30px'} boxSize={'200px'}>
            <VStack backgroundColor={'white'}>
          
          <HStack>
            <p>Mon-Fri</p>
            <p><b>7am-6pm</b></p>
          </HStack>
          <HStack>
            <p>Saturday</p>
            <p><b>9am-4pm</b></p>
          </HStack>
          <HStack>
            <p>Sunday</p>
            <p><b>Closed</b></p>
          </HStack>
          </VStack>
          </CardBody >
          </Card>
         
          <Card  background={'transparent'} style={{borderRadius:'0', }} variant={'unstyled'} mb={'2px'} boxSize={'350px'}>
            <CardHeader background={'transparent'} style={{borderRadius:'0', }} variant={'unstyled'} textAlign={'center'}>
            <h4 style={{color:'purple'}}>Useful Link</h4>
            </CardHeader>
            <CardBody>
            <HStack>
            <List variant={''}  >
              <ListItem><ListIcon as={BsDot} color={'red'}></ListIcon>Home</ListItem>
              <ListItem><ListIcon as={BsDot} color={'red'}></ListIcon>About</ListItem>
              <ListItem><ListIcon as={BsDot} color={'red'}></ListIcon>Services</ListItem>
              <ListItem><ListIcon as={BsDot} color={'red'}></ListIcon>Shop</ListItem>
            </List>
            <List variant={''} >
              <ListItem><ListIcon as={BsDot} color={'red'}></ListIcon>FAQ</ListItem>
              <ListItem><ListIcon as={BsDot} color={'red'}></ListIcon>Gallery</ListItem>
              <ListItem><ListIcon as={BsDot} color={'red'}></ListIcon>Delivery</ListItem>
              <ListItem><ListIcon as={BsDot} color={'red'}></ListIcon>Store</ListItem>
            </List>
            </HStack>
            </CardBody>
          </Card >
          <Box px={'5%'}>
          <Card  background={'transparent'} style={{borderRadius:'0', }} variant={'unstyled'} mb={'30px'} boxSize={'320px'}>
            <h4 style={{color:'purple'}}>News Letter</h4>
            <p>Be first in the queue! Get our latest news straight to your inbox.</p>
            <HStack>
              <Input placeholder='Email'></Input>
              <Button style={{backgroundColor:'purple'}}><AiOutlineArrowRight style={{color:'white'}}/></Button>
            </HStack>
            <br />
            <HStack>
        <AiFillFacebook style={{color:'purple'}}></AiFillFacebook>
        <AiFillInstagram style={{color:'purple'}}></AiFillInstagram>
        <AiFillTwitterCircle style={{color:'purple'}}></AiFillTwitterCircle>
        <AiOutlineWhatsApp style={{color:'purple'}}></AiOutlineWhatsApp>
        </HStack>
       
          </Card>
          </Box>
        </HStack>
      
       
      </HStack>
          <div  style={{textAlign:'center'}}>
       <hr />
       
       <p>NOOT ©  All rights reserved Copyrights 2023</p>
       </div> 
       </Box> 
   
  )
}
