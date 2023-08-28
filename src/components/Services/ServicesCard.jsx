import "./ServicesCard.scss";
import {
  Box,
  Button,
  Card,
} from "@chakra-ui/react";
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
  
  return (
    
    <Box
      className="services-box" 
    >
      <div
      className="services-div"
      
      >
        <h5 className="our-services">OUR SERVICES</h5>
        <br />
        <h1 className="txt" >All Pet Care Services</h1>
        <br />
        
        <Card
          className="services-cards"
          
        >
          <div  className="parent-container">
            
            {row1.map((data,index)=>{
              return (
                <CardDesign
                
                id={index} 
                imageUrl={data.image} 
                title={data.title} 
                contentText={data.content} 
                price={data.rate}
                className="card-container" />
              )
            })}
            
          </div>
        

         

        </Card>
      </div>
    </Box>
  );
}

