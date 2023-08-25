import React from "react";
// import { Button, } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./LastCards.css";
import { Badge, Box, Card, HStack, Image, Text, VStack,Button } from "@chakra-ui/react";

export default function LastCards() {
  return (
    <HStack
      px={"18%"}
      
      alignItems={"center"}
      justifyContent={"center"}
      height={"100vh"}
    >
      <HStack >
        <Card
        backgroundColor={"#FCDCB5"}
        border={'none'}
          
        >
          <HStack justifyContent={'space-evenly'} >
            
            <h1 style={{ marginTop: "20%", marginRight: "2%" }}>
              Check Out Our Specials {" "}
            </h1>
            
            
            <Badge
              borderRadius={"5px"}
              color={"white"}
              textAlign={"center"}
              alignContent={"center"}
              justifyContent={"center"}
              fontSize={"20px"}
              backgroundColor={"#9C5BF5"}
              
              height={'40px'}
            >
              Up to 40% off
            </Badge>
          </HStack>
          <HStack style={{ display: "flex",  }}>
          <VStack>
              <Text mb={'60%'} style={{   marginLeft: "10%" }}>
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
         variant="none"
         color={"#9C5BF5"}
         fontWeight={'bold'}
         fontSize={'20px'}
          >
            
              Get Service
            
          </Button>
        </Card>
        <VStack style={{ display: "grid" }}>
          <Card
            style={{
              height: "250px",
              width: "350px",
              backgroundColor: "#FFDA47",
              border: "none",
              borderRadius: "10px",
              marginLeft: "2%",
            }}
          >
            <HStack >
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
        </VStack>
      </HStack>
    </HStack>
  );
}
