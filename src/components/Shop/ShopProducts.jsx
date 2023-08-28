import { Box, Flex, HStack, Image, Link, VStack,SimpleGrid, Card } from '@chakra-ui/react'
import React from 'react'
import {  Container } from 'react-bootstrap'
import ProductsDesign from './ProductsDesign'
import './ProductDesign.css'
export default function ShopProducts() {

  
    const products=[
        { Name:'Detachable Gravity Bowl Food Feeder',
          Price:'$30.12',
          
        },
        { Name:'Dog Collar for Every Size of  Dogs',
          Price:'$30.12',
        },
        { Name:'Pink Embossed Spike Collar ',
          Price:'$30.12',
        },
        { Name:'Black Leather Spike Dog Collar, Small',
        Price:'$30.12',
      },
      { Name:' Chew Toys for Every Size of Dog',
        Price:'$30.12',
      },
      { Name:' Duck Jerky Strips Treats For Dogs ',
        Price:'$30.12',
      },
      { Name:'Carrying Bag  Weighing  6 kg',
      Price:'$30.12',
    },
    { Name:'Teeth Cleaning Toy for Dogs',
      Price:'$30.12',
    },
    { Name:'Rhinestone Pet Collar for Dogs',
      Price:'$30.12',
    }
    ]
    
  return (
    
    <Box  px={'20%'} height={'120vh'}>

       <HStack>
        <h4 style={{marginLeft:'3%'}}>
          Featured Products
        </h4>
        <h4 style={{marginLeft:'7%'}}>
          On Sale Products
        </h4>
        <h4 style={{marginLeft:'10%'}}>
          Top Rated Products
        </h4>
       </HStack>
        <div className='parent-container'>
        {products.map((data,index)=>{
            return (
                <ProductsDesign
                id={index}
                Name={data.Name}
                Price={data.Price}
                />     
            )
        }
        )}
        </div>   
    </Box>
  )
}
