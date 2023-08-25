import React from "react";

import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    HStack,
    Image,
    SimpleGrid,
    Text,
    VStack,
    grid,
  } from "@chakra-ui/react";

// id={index} imageUrl={data.image} title={data.title} contentText={data.content} price={data.rate}
const CardDesign = ({id, imageUrl, title,contentText,price}) =>{

    return(
         
            <div
              key={id}
              style={{  justifyContent: "space-evenly", }}
            >
              <div>
                <Card 
                
                  background={'transparent'}
                 
                 backgroundImage={'linear-gradient(316deg, #d4a7c9 0%, #e0e5e5 74%)'}
                  
                >
                  <CardHeader
                    style={{ background: "transparent", border: "none" }}
                  >
                    <HStack textAlign={"center"}>
                      <Image
                        style={{ height: "50px", width: "50px" }}
                        src={imageUrl}
                      ></Image>
                      <h3>{title}</h3>
                    </HStack>
                  </CardHeader>
                  <br />
                  <CardBody className="cardbody">
                    <p>{contentText}</p>
                    <p>
                      <b>{price}</b>
                    </p>
                    <br />
                    <Button
                    _hover={{color:'goldenrod'}}
                      background={"transparent"}
                      color={'purple'}
                      textAlign={'center'}
                     variant={'unstyled'}
                     fontWeight={'bold'}
                    >
                      <Text>Get Service</Text>
                    </Button>
                  </CardBody>
                </Card>
              </div>
            </div>
      
    )
}
export default CardDesign;