import React from "react";
import './ServicesCard.scss'
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    HStack,
    Image,
  
    Text,
    
  } from "@chakra-ui/react";


const CardDesign = ({id, imageUrl, title,contentText,price}) =>{

    return(
         
            <div
              key={id}
              style={{  justifyContent: "space-evenly",
                        maxWidth:'33.33%',
                        padding:'0 3px',
                        border:'none',
                        marginBottom:'15px'
                      
            
            }}
            >
              <div
              style={{  
           
              border:'none',
              }}
              >
                <Card 
                  border={'none'}
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