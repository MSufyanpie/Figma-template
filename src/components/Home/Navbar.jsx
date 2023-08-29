import React, { useState,useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HamburgerIcon } from "@chakra-ui/icons";
import { cart } from '../../App';
import './NavBar.scss'
import { AiFillFacebook,AiFillInstagram,AiFillTwitterCircle,AiOutlineWhatsApp,AiFillPhone,AiFillMail,AiOutlineShoppingCart } from 'react-icons/ai';
import { Box, Button, HStack, Image,useBreakpointValue,Drawer, VStack,Link,IconButton,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody
 } from '@chakra-ui/react';

export default function NavBar() {
  const displayValue = useBreakpointValue({ base: "none", md: "flex" });
  
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  
  const closeDrawer = () => {
    setIsOpen(false);
  };
  
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
    <div className='nav-bar' >
        <div className='social-div'>
          <div className='four-icons'>
                <div className='social-icons' ><AiFillFacebook></AiFillFacebook></div>
                <div className='social-icons' ><AiFillInstagram></AiFillInstagram></div>
                <div className='social-icons' ><AiFillTwitterCircle></AiFillTwitterCircle></div>
                <div className='social-icons' ><AiOutlineWhatsApp></AiOutlineWhatsApp></div>
                </div>
                
                <Box 
                
                px={'4%'}>
                <div className='last-icons' >
                <AiFillPhone className='phone'  ></AiFillPhone>
                <p className='phoneNo' > 0000-1234567</p>
               <p style={{color:'#9C5BF5'}}>.....</p>
                <AiFillMail className='mail'></AiFillMail> 
                <p className='Email' >info@example.com</p>
                
                
                </div >
                </Box>
                
                </div>
                <IconButton
        className='toggle-btn'
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          variant="ghost"
          display={displayValue === "none" ? "flex" : "none"}
          onClick={toggleDrawer}
        />
        <Navbar >
        
        
        <Container  >
       
       
        <div className='navbar-div'>
       
        <Image className='petopia-img'  
          src='src\assets\petopia-icon.png'></Image>
         
          <Navbar.Brand className='navbar-brand'    href="#home">
            
            
         <h3 className='petopia'><b>Petopia</b></h3> </Navbar.Brand></div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Box className='menu' >
                <HStack>
              <Box px={"1px"}>
               <Nav.Link className='nav-link' onClick={()=>scrollToSection("#section1")}  href="/#section1"><b>Home</b></Nav.Link>
               </Box>
               <Box px={"1px"}>
              <Nav.Link className='nav-link' onClick={()=>scrollToSection("#section2")} href="/#section2"><b>Services</b></Nav.Link>
              </Box>
              <Box px={"1px"}>
              <Nav.Link className='nav-link' onClick={()=>scrollToSection("#section3")}  href="/#section3"><b>Shop</b></Nav.Link>
              </Box>
              <Box px={"1px"}>
              <Nav.Link className='nav-link'  onClick={()=>scrollToSection("#section4")}  href="/#section4"><b>Blog</b></Nav.Link>
              </Box>
              <Box px={"1px"}>
              <Nav.Link className='nav-link' onClick={()=>scrollToSection("#section5")}  href="/#section5"><b>Contact</b></Nav.Link> 
              
              </Box>
              </HStack>
              </Box>
              <Box 
              px={'2%' }
              >
              
              <Nav.Link   >
                <Button className='cart-btn'  style={{backgroundColor:'#FFDA47'}}>
                  <AiOutlineShoppingCart className='cart-icon'>
                    </AiOutlineShoppingCart></Button>
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
              
                <Box>
              <Nav.Link onClick={()=>scrollToSection("#section1")}   href="/#section1"><b>Home</b></Nav.Link>
               </Box>
               <Box px={"8px"}>
              <Nav.Link onClick={()=>scrollToSection("#section2")}  href="/#section2"><b>Services</b></Nav.Link>
              </Box>
              <Box px={"8px"}>
              <Nav.Link onClick={()=>scrollToSection("#section3")}  href="/#section3"><b>Shop</b></Nav.Link>
              </Box>
              <Box px={"8px"}>
              <Nav.Link  onClick={()=>scrollToSection("#section4")} href="/#section4"><b>Blog</b></Nav.Link>
              </Box>
              <Box px={"8px"}>
              <Nav.Link onClick={()=>scrollToSection("#section5")} style={{color:'black'}} href="/#section5"><b>Contact</b></Nav.Link> 
              </Box>
              
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    
     
    </div>
  )
}
