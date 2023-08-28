import React from "react";

import "./LastCards.scss";
import {  Box, HStack, Image, Text, VStack,Button } from "@chakra-ui/react";
import { Badge, Card } from "react-bootstrap";

export default function LastCards() {
  return (
    <Box
    className="lastcards-box"
      
    
      
      
     
    >
      <HStack >
        <Card
        className="last-cards"
        
        >
          <HStack justifyContent={'space-evenly'} >
            
            <h1 style={{ marginTop: "20%",  }}>
              Check Out Our Specials {" "}
            </h1>
            
            
            <Badge
              className="badge"
             
            >
              Up to 40% off
            </Badge>
          </HStack>
          <HStack >
          <VStack>
              <Text className="text" >
                suspendisse potenti nullam ac tortor vitaePotenti nullam ac
                tortor vitae purus faucibus ornare vitae purus faucibus ornare
              </Text>
            </VStack>
            <Image
            height={"300px"}
            width={"400px"}
           
              
              src="src\assets\pet-accessories-still-life-concept-with-chew-ball.png"
              
            />
          </HStack>

          <Button 
          className="service-btn"
         variant="none"
          > 
              Get Service
            
          </Button>
        </Card>
        <Box className="othercards">
          <Card
          className="card2"
           
          >
            <HStack>
              <VStack >
                <h4 style={{marginLeft:'5%'}}>
                  <b>Luxury Fashion Collection</b>
                </h4>

                <Button
                  variant="none"
                  color={"#9C5BF5"}
                >
                  <b>Shop Now</b>
                </Button>
              </VStack>
              <Image
              className="image1"
              height={"250px"}
              width={"150px"}
                
                src="src\assets\pet-dressed-necktie-2021-08-27-22-18-47-utc (1).png"
                
              />
            </HStack>
          </Card>
          <Card
            style={{
              height: "250px",
              width: "350px",
              backgroundColor: "#FFDA47",
              border: "none",
              borderRadius: "10px",
              marginTop: "2%",
              marginLeft: "2%",
            }}
          >
            <HStack >
              <VStack >
                <h4 style={{ marginLeft: "5%",  }}>
                  <b>Shop What's Trending</b>
                </h4>

                <Button
                  variant="none"
                  color={"#9C5BF5"}
                  
                >
                  <b>Shop Now</b>
                </Button>
              </VStack>
              <Image
              className="image2"
                  height={"250px"}
                  width={"150px"}
                
                src="src\assets\charles-deluvio-Mv9hjnEUHR4-unsplash (1).png"
                alt=""
                
              />
            </HStack>
          </Card>
        </Box>
      </HStack>
    </Box>
  );
}
