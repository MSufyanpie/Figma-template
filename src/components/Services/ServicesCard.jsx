import React from "react";
import { Card } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./ServicesCard.css";
import { Box, Button, HStack, Image, VStack } from "@chakra-ui/react";
import paws from "../../assets/Paws.png";


export default function ServicesCard() {
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
          style={{
            border: "none",
            width: "auto",
            justifyContent:'space-evenly'
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div>
              <Card
                className="card1"
                style={{
                  width: "100%",
                  background: "transparent",
                  backgroundColor: "#f5e6f3",
                }}
              >
                {/* <img src='src\assets\dog-training.png'></img> */}
                <Card.Header
                  style={{ background: "transparent", border: "none" }}
                >
                  <HStack textAlign={'center'}>
                    <Image
                      style={{ height: "50px", width: "50px" }}
                      src="src\assets\icons8-man-with-dog-48.png"
                    ></Image>
                    <h3>Walking & Sitting</h3>
                  </HStack>
                </Card.Header>
                <br />
                <Card.Body className="cardbody">
                  <p>
                    suspendisse potenti nullam ac tortor vitaePotenti nullam ac
                    tortor vitae purus faucibus ornare.{" "}
                  </p>
                  <p>
                    <b>From $15/hour</b>
                  </p>
                  <br />
                  <Button background={'transparent'} style={{ color: "#9C5BF5", textAlign: "center",border:'none' }}>
                    <b>Get Service</b>
                  </Button>
                </Card.Body>
              </Card>
            </div>

            {/* CARD2 */}

            <div className="card2">
              <Card
                style={{
                  width: "100%",
                  background: "transparent",
                  backgroundColor: "#f5e6f3",
                }}
              >
                <Card.Header
                  style={{ background: "transparent", border: "none" }}
                >
                  <HStack>
                    <Image
                      style={{ height: "50px", width: "50px" }}
                      src="src\assets\icons8-hair-brush-48.png"
                    ></Image>
                    <h3>Pet Grooming</h3>
                  </HStack>
                </Card.Header>
                <br />
                <Card.Body>
                  <p>
                    suspendisse potenti nullam ac tortor vitaePotenti nullam ac
                    tortor vitae purus faucibus ornare.{" "}
                  </p>
                  <p>
                    <b>From $39/complex</b>
                  </p>
                  <br />
                  <Button background={'transparent'} style={{ color: "#9C5BF5", textAlign: "center", }}>
                    <b>Get Service</b>
                  </Button>
                </Card.Body>
              </Card>
            </div>

            {/* Card 3 */}
            <div className="card3">
              <Card
                style={{
                  width: "100%",
                  background: "transparent",
                  backgroundColor: "#f5e6f3",
                }}
              >
                <Card.Header
                  style={{ background: "transparent", border: "none" }}
                >
                  <HStack>
                    <Image
                      style={{ height: "50px", width: "50px" }}
                      src="src\assets\icons8-trophy-48.png"
                    ></Image>
                    <h3>Pet Training</h3>
                  </HStack>
                </Card.Header>
                <br />
                <Card.Body>
                  <p>
                    suspendisse potenti nullam ac tortor vitaePotenti nullam ac
                    tortor vitae purus faucibus ornare.{" "}
                  </p>
                  <p>
                    <b>From $27/hour</b>
                  </p>
                  <br />
                  <Button background={'transparent'} style={{ color: "#9C5BF5", textAlign: "center" }}>
                    <b>Get Service</b>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <br />
          <br />

          {/* next 3 cards */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div className="card4">
              <Card
                style={{
                  width: "100%",
                  background: "transparent",
                  backgroundColor: "#f5e6f3",
                }}
              >
                {/* <img src='src\assets\dog-training.png'></img> */}
                <Card.Header
                  style={{ background: "transparent", border: "none" }}
                >
                  <HStack>
                    <Image
                      style={{ height: "50px", width: "50px" }}
                      src="src\assets\icons8-pet-taxi-64.png"
                    ></Image>

                    <h3>Pet Taxi</h3>
                  </HStack>
                </Card.Header>
                <br />
                <Card.Body>
                  <p>
                    suspendisse potenti nullam ac tortor vitaePotenti nullam ac
                    tortor vitae purus faucibus ornare.{" "}
                  </p>
                  <p>
                    <b>From $22/trip</b>
                  </p>
                  <br />
                  <Button background={'transparent'} style={{ color: "#9C5BF5", textAlign: "center" }}>
                    <b>Get Service</b>
                  </Button >
                </Card.Body>
              </Card>
            </div>

            {/* CARD2 */}

            <div className="card5">
              <Card
                style={{
                  width: "100%",
                  background: "transparent",
                  backgroundColor: "#f5e6f3",
                }}
              >
                <Card.Header
                  style={{ background: "transparent", border: "none" }}
                >
                  <HStack>
                    <Image
                      style={{ height: "50px", width: "50px" }}
                      src="src\assets\icons8-first-aid-box-66.png"
                    ></Image>
                    <h3>Health & Wellness</h3>
                  </HStack>
                </Card.Header>
                <br />
                <Card.Body >
                  <p>
                    suspendisse potenti nullam ac tortor vitaePotenti nullam ac
                    tortor vitae purus faucibus ornare.{" "}
                  </p>
                  <p>
                    <b>From $39/visit</b>
                  </p>
                  <br />
                  <Button background={'transparent'} style={{ color: "#9C5BF5", textAlign: "center" }}>
                    <b>Get Service</b>
                  </Button >
                </Card.Body>
              </Card>
            </div>

            {/* Card 3 */}
            <div className="card6">
              <Card
                style={{
                  width: "100%",
                  background: "transparent",
                  backgroundColor: "##f5e6f3",
                }}
              >
                <Card.Header
                  style={{ background: "transparent", border: "none" }}
                >
                  <HStack >
                    <Image
                      style={{ height: "50px", width: "50px" }}
                      src="src\assets\icons8-pet-house-64.png"
                    ></Image>
                    <h3>Pet Hotel</h3>
                  </HStack>
                </Card.Header>
                <br />
                <Card.Body>
                  <p>
                    suspendisse potenti nullam ac tortor vitaePotenti nullam ac
                    tortor vitae purus faucibus ornare.{" "}
                  </p>
                  <p>
                    <b>From $15/night</b>
                  </p>
                  <br />
                  <Button background={'transparent'} style={{ color: "#9C5BF5", textAlign: "center" }}>
                    <b>Get Service</b>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </Box>
  );
}
