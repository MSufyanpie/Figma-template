import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Image,
  Input,
  List,
  ListIcon,
  ListItem,

  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  AiFillPhone,
  AiOutlineArrowRight,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import "./Footer.scss";
export default function Footer() {
  return (
    <Box
    className="ft-Box"
    style={{ backgroundColor: "#FBF9FF" }}>
      <div className="footerdiv">
        <Box px={"2%"}>
          <Card
            className="ft-card1"
            background={"transparent"}
            variant={"unstyled"}
            boxSize={"300px"}
          >
            <VStack>
              <HStack>
                <Image
                  style={{ height: "30px", width: "30px" }}
                  src="src\assets\kutta.png"
                ></Image>
                <h4 className="c-headings">Pet Bonz</h4>
              </HStack>
              <div className="card1-text">
                <p>
                  Tristique nulla aliquet enim tortor at auctor urna nunc. Massa
                  enim nec dui nunc mattis enim ut tellus. Sed ut perspiciatis
                  unde ...
                </p>
              </div>

              <div className="card1-cont">
                <AiFillPhone className="phone-icon" />
                <h4> (913) 756-3126</h4>
                <p>Got Questions? Call us 24/7</p>
              </div>
            </VStack>
          </Card>
        </Box>
        <Card
          className="ft-card2"
          variant={"unstyled"}
          background={"transparent"}
          boxSize={"320px"}
        >
          <CardHeader>
            <h4 className="c-headings">Working Hours</h4>
          </CardHeader>
          <CardBody
          className="card2-body"
          mb={"30px"} boxSize={"180px"}>
            <div className="card2-cont">
              <HStack>
                <p>Mon-Fri: </p>
                <p>
                  <b>7am-6pm</b>
                </p>
              </HStack>
              <HStack>
                <p>Saturday:</p>
                <p>
                  <b>9am-4pm</b>
                </p>
              </HStack>
              <HStack>
                <p>Sunday:</p>
                <p>
                  <b>Closed</b>
                </p>
              </HStack>
            </div>
          </CardBody>
        </Card>

        <Card
          className="ft-card3"
          background={"transparent"}
          variant={"unstyled"}
          mb={"2px"}
          boxSize={"350px"}
        >
          <CardHeader
            background={"transparent"}
            variant={"unstyled"}
            textAlign={"center"}
          >
            <h4 className="c-headings">Useful Link</h4>
          </CardHeader>
          <CardBody className="card3-body">
            <HStack>
              <List
              
              variant={""}>
                <ListItem>
                  <ListIcon as={BsDot} color={"red"}></ListIcon>Home
                </ListItem>
                <ListItem>
                  <ListIcon as={BsDot} color={"red"}></ListIcon>About
                </ListItem>
                <ListItem>
                  <ListIcon as={BsDot} color={"red"}></ListIcon>Services
                </ListItem>
                <ListItem>
                  <ListIcon as={BsDot} color={"red"}></ListIcon>Shop
                </ListItem>
              </List>
              <List variant={""}>
                <ListItem>
                  <ListIcon as={BsDot} color={"red"}></ListIcon>FAQ
                </ListItem>
                <ListItem>
                  <ListIcon as={BsDot} color={"red"}></ListIcon>Gallery
                </ListItem>
                <ListItem>
                  <ListIcon as={BsDot} color={"red"}></ListIcon>Delivery
                </ListItem>
                <ListItem>
                  <ListIcon as={BsDot} color={"red"}></ListIcon>Store
                </ListItem>
              </List>
            </HStack>
          </CardBody>
        </Card>
        <Box px={"5%"}>
          <Card
            className="ft-card4"
            background={"transparent"}
            variant={"unstyled"}
            mb={"30px"}
            boxSize={"320px"}
          >
            <h4 className="c-headings">News Letter</h4>
            <p>
              Be first in the queue! Get our latest news straight to your inbox.
            </p>
            <HStack>
              <Input placeholder="Email"></Input>
              <Button backgroundColor={"purple"}>
                <AiOutlineArrowRight className="arrow-icon" />
              </Button>
            </HStack>
            <br />
            <HStack>
              <AiFillFacebook className="social_icons"></AiFillFacebook>
              <AiFillInstagram className="social_icons"></AiFillInstagram>
              <AiFillTwitterCircle className="social_icons"></AiFillTwitterCircle>
              <AiOutlineWhatsApp className="social_icons"></AiOutlineWhatsApp>
            </HStack>
          </Card>
        </Box>
      </div>

      <div style={{ textAlign: "center" }}>
        <hr />

        <p>NOOT © All rights reserved Copyrights 2023</p>
      </div>
    </Box>
  );
}
