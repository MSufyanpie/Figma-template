import React, { useEffect } from "react";

import { AiOutlineArrowRight } from "react-icons/ai";
import "./ServicesCard.css";
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
import paws from "../../assets/Paws.png";
import { cart } from "../../App";
import Mandog from "../../assets/icons8-man-with-dog-48.png";
import brush from "../../assets/icons8-hair-brush-48.png";
import trophy from "../../assets/icons8-trophy-48.png";
import taxi from "../../assets/icons8-pet-taxi-64.png";
import house from "../../assets/icons8-pet-house-64.png";
import firstaid from "../../assets/icons8-first-aid-box-66.png";
import CardDesign from "./CardDesign";

export default function ServicesCard() {
  const row1 = [
    {
      image: Mandog,
      title: "Walking & Sitting",
      content:
        " suspendisse potenti nullam ac tortor vitaePotenti nullam actortor vitae purus faucibus ornare.",
      rate: "From $15/hour",
    },
    {
      image: brush,
      title: "Pet Grooming",
      content:
        " suspendisse potenti nullam ac tortor vitaePotenti nullam actortor vitae purus faucibus ornare.",
      rate: "From $39/complex",
    },
    {
      image: trophy,
      title: "Pet Training",
      content:
        " suspendisse potenti nullam ac tortor vitaePotenti nullam actortor vitae purus faucibus ornare.",
      rate: "From $27/hour",
    },
    {
      image: taxi,
      title: "Pet Taxi",
      content:
        " suspendisse potenti nullam ac tortor vitaePotenti nullam actortor vitae purus faucibus ornare.",
      rate: "From $22/trip",
    },
    {
      image: firstaid,
      title: "Health & Wellness",
      content:
        " suspendisse potenti nullam ac tortor vitaePotenti nullam actortor vitae purus faucibus ornare.",
      rate: "From $39/visit",
    },
    {
      image: house,
      title: "Pet Hotel",
      content:
        " suspendisse potenti nullam ac tortor vitaePotenti nullam actortor vitae purus faucibus ornare.",
      rate: "From $15/night",
    }
  ];
  const row2 = [
    {
      image: taxi,
      title: "Pet Taxi",
      content:
        " suspendisse potenti nullam ac tortor vitaePotenti nullam actortor vitae purus faucibus ornare.",
      rate: "From $22/trip",
    },
    {
      image: firstaid,
      title: "Health & Wellness",
      content:
        " suspendisse potenti nullam ac tortor vitaePotenti nullam actortor vitae purus faucibus ornare.",
      rate: "From $39/visit",
    },
    {
      image: house,
      title: "Pet Hotel",
      content:
        " suspendisse potenti nullam ac tortor vitaePotenti nullam actortor vitae purus faucibus ornare.",
      rate: "From $15/night",
    },
  ];
  return (
    <Box
      px={"18%"}
      display={"flex"}
      // alignItems={"center"}
      // justifyContent={"space-evenly"}
      height={"100vh"}
    >
      <div>
        <h5 style={{ textAlign: "center", color: "#9C5BF5" }}>OUR SERVICES</h5>
        <br />
        <h1 style={{ textAlign: "center" }}>All Pet Care Services</h1>
        <br />
        <br />

        <Card
          border={'none'}
        >
          <div  className="parent-container">
            
            {row1.map((data,index)=>{
              return (
                <CardDesign id={index} imageUrl={data.image} title={data.title} contentText={data.content} price={data.rate} />
              )
            })}
            
          </div>
          {/* <HStack>
            {row1.map((data, index) => {
              return (
                <div
                  key={index}
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <div>
                    <Card background={'transparent'} backgroundImage={'linear-gradient(316deg, #d4a7c9 0%, #e0e5e5 74%)'}>
                      <CardHeader
                        style={{ background: "transparent", border: "none" }}
                      >
                        <HStack textAlign={"center"}>
                          <Image
                            style={{ height: "50px", width: "50px" }}
                            src={data.image}
                          ></Image>
                          <h3>{data.title}</h3>
                        </HStack>
                      </CardHeader>
                      <br />
                      <CardBody className="cardbody">
                        <p>{data.content}</p>
                        <p>
                          <b>{data.rate}</b>
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
              );
            })}
          </HStack> */}

          <br />
          <br />

          {/* next 3 cards */}
          {/* <HStack>
            {row2.map((data, index) => {
              return (
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <div className="card4">
                    <Card
                     
                     background={'transparent'}
                     
                     backgroundImage={'linear-gradient(316deg, #d4a7c9 0%, #e0e5e5 74%)'}
                    >
                      <CardHeader
                        style={{ background: "transparent", border: "none" }}
                      >
                        <HStack>
                          <Image
                            style={{ height: "50px", width: "50px" }}
                            src={data.image}
                          ></Image>

                          <h3>{data.title}</h3>
                        </HStack>
                      </CardHeader>
                      <br />
                      <CardBody>
                        <p>{data.content}</p>
                        <p>
                          <b>{data.rate}</b>
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
                          <b>Get Service</b>
                        </Button>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              );
            })}
          </HStack> */}
        </Card>
      </div>
    </Box>
  );
}

