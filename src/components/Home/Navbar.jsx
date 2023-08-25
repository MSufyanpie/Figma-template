import React, { useState,useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HamburgerIcon } from "@chakra-ui/icons";
import { cart } from '../../App';

import { AiFillFacebook,AiFillInstagram,AiFillTwitterCircle,AiOutlineWhatsApp,AiFillPhone,AiFillMail,AiOutlineShoppingCart } from 'react-icons/ai';
import { Box, Button, HStack, Image,useBreakpointValue,Drawer, VStack,Link,IconButton,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody
 } from '@chakra-ui/react';
import './NavBar.css'
export default function NavBar() {
  const displayValue = useBreakpointValue({ base: "none", md: "flex" });
  // Add state to control the drawer
  const [isOpen, setIsOpen] = useState(false);
  // Function to toggle the drawer
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  // Close the drawer when a navigation link is clicked
  const closeDrawer = () => {
    setIsOpen(false);
  };
  // Close the drawer when screen size becomes larger
  useEffect(() => {
    if (displayValue === "flex") {
      setIsOpen(false);
    }
  }, [displayValue]);
  const[item,setItems]=useState(0)

   const itemCount=()=>{
    setItems(item+1)
  }
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className='nav-bar' style={{ position:'relative',height:'35vh'}}>
        <HStack px={'10%'} style={{backgroundColor:'#9C5BF5',color:'white',  }}>
                <div style={{fontSize:'30px'}}><AiFillFacebook></AiFillFacebook></div>
                <div style={{fontSize:'30px'}}><AiFillInstagram></AiFillInstagram></div>
                <div style={{fontSize:'30px'}}><AiFillTwitterCircle></AiFillTwitterCircle></div>
                <div style={{fontSize:'30px'}}><AiOutlineWhatsApp></AiOutlineWhatsApp></div>
                
                
                <Box px={'6%'}>
                <HStack style={{textAlign:'center',justifyContent:'space-evenly'}}>
                <AiFillPhone  style={{fontSize:'30px',}}></AiFillPhone>
                <p style={{fontSize:'20px'}}> 0000-1234567</p>
                
                <AiFillMail style={{fontSize:'30px',}}></AiFillMail> 
                <p style={{fontSize:'20px'}}>info@example.com</p>
                
                
                </HStack>
                </Box>
                
                </HStack>
        <Navbar >
                
        
        <Container  >
       
        <HStack>
        <Image style={{height:'30px',width:'30px'}} 
          src='src\assets\petopia-icon.png'></Image>
          <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          variant="ghost"
          display={displayValue === "none" ? "flex" : "none"}
          onClick={toggleDrawer}
        />
          <Navbar.Brand  style={{color:'#9C5BF5'}} href="#home">
            
            
         <h3><b>Petopia</b></h3> </Navbar.Brand></HStack>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Box className='menu' >
                <HStack>
              <Box px={"8px"}>
               <Nav.Link onClick={()=>scrollToSection("#section1")}  style={{color:'black'}} href="/#section1"><b>Home</b></Nav.Link>
               </Box>
               <Box px={"8px"}>
              <Nav.Link onClick={()=>scrollToSection("#section2")} style={{color:'black'}} href="/#section2"><b>Services</b></Nav.Link>
              </Box>
              <Box px={"8px"}>
              <Nav.Link onClick={()=>scrollToSection("#section3")} style={{color:'black'}} href="/#section3"><b>Shop</b></Nav.Link>
              </Box>
              <Box px={"8px"}>
              <Nav.Link  onClick={()=>scrollToSection("#section4")}style={{color:'black'}} href="/#section4"><b>Blog</b></Nav.Link>
              </Box>
              <Box px={"8px"}>
              <Nav.Link onClick={()=>scrollToSection("#section5")} style={{color:'black'}} href="/#section5"><b>Contact</b></Nav.Link> 
              
              </Box>
              </HStack>
              </Box>
              <Box 
              px={'2%' }
              >
              
              <Nav.Link   >
                <Button  style={{backgroundColor:'#FFDA47'}}><AiOutlineShoppingCart style={{color:'purple',fontSize:'20px'}}></AiOutlineShoppingCart>({cart})</Button>
                </Nav.Link>
                </Box>
              
            </Nav>
          </Navbar.Collapse>
          
        </Container>
        
      </Navbar><br/>
      <Drawer placement="right" onClose={toggleDrawer} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4}>
                <Box>
              <Nav.Link onClick={()=>scrollToSection("#section1")}  style={{color:'black'}} href="/#section1"><b>Home</b></Nav.Link>
               </Box>
               <Box px={"8px"}>
              <Nav.Link onClick={()=>scrollToSection("#section2")} style={{color:'black'}} href="/#section2"><b>Services</b></Nav.Link>
              </Box>
              <Box px={"8px"}>
              <Nav.Link onClick={()=>scrollToSection("#section3")} style={{color:'black'}} href="/#section3"><b>Shop</b></Nav.Link>
              </Box>
              <Box px={"8px"}>
              <Nav.Link  onClick={()=>scrollToSection("#section4")}style={{color:'black'}} href="/#section4"><b>Blog</b></Nav.Link>
              </Box>
              <Box px={"8px"}>
              <Nav.Link onClick={()=>scrollToSection("#section5")} style={{color:'black'}} href="/#section5"><b>Contact</b></Nav.Link> 
              </Box>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    
     
    </div>
  )
}
