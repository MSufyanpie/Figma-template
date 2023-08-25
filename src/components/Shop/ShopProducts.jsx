import { Box, Flex, HStack, Image, Link, VStack,SimpleGrid, Card } from '@chakra-ui/react'
import React from 'react'
import {  Container } from 'react-bootstrap'

export default function ShopProducts(props) {
  
    const products=[
        { Name:'Detachable Gravity Bowl Food Feeder',
          Price:'$30.12',
          
        },
        { Name:'Dog Collar for Every Size of  Dogs',
          Price:'$30.12',
        },
        { Name:'Pink Embossed Spike Collar',
          Price:'$30.12',
        }
    ]
    const products2=[
        { Name:'Black Leather Spike Dog Collar, Small',
          Price:'$30.12',
        },
        { Name:' Chew Toys for Every Size of Dog Chewers',
          Price:'$30.12',
        },
        { Name:'Jerky Strips Dog Treats',
          Price:'$30.12',
        }
    ]
    const products3=[
        { Name:'Carrying Bag for Cats Weighing up to 6 kg',
          Price:'$30.12',
        },
        { Name:'Teeth Cleaning Toy for Every Size of Dogs',
          Price:'$30.12',
        },
        { Name:'Rhinestone Pet Collar for Dogs',
          Price:'$30.12',
        }
    ]
  return (
    
    <Box px={'20%'} display={'flex'} alignItems={'center'} justifyContent={'center'} height={'120vh'}>
    
 <HStack>
 
 
        <VStack>
        <h2>Featured Products</h2>
        {products.map((data,index)=>{
            return (
                
            
            <Card
            mt={'10%'}
            variant={'unstyled'}
             key={index}>
                <HStack>
                <Image height={'100px'} width={'130px'}
                src="src\assets\productImages\1.png" alt="" />
                <VStack textAlign={'center'}>
                <h4>{data.Name}</h4>
                <span style={{color:'#e8e82e'}}>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
                <p style={{color:'#9C5BF5'}}><b>{data.Price}</b></p>
                </VStack>
                </HStack>
                <hr/>
            </Card>
            
            )
        }
        )}
        {/* </SimpleGrid> */}
    </VStack>
   
    <VStack>
    <h2>On Sale Products</h2>
        {products2.map((data,index)=>{
            return (
                
            <Card 
            ml={'8%'}
            mt={'10%'}
            variant={'unstyled'}
             key={index}>
              
                 <HStack>
                <Image height={'100px'} width={'130px'} src="src\assets\productImages\1.png" alt="" />
                <VStack textAlign={'center'}>
                <h4>{data.Name}</h4>
                <span style={{color:'#e8e82e'}}>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
                <p style={{color:'#9C5BF5'}}><b>{data.Price}</b></p>
                </VStack>
                </HStack>
                <hr/>
            </Card>
            
            )
        }
        )}
    </VStack>
    <VStack>
    <h2>Top Rated Products</h2>
        {products3.map((data,index)=>{
            return (
                
            <Card
            ml={'5%'}
            mt={'10%'}
            variant={'unstyled'}
             key={index}>
                 <HStack>
                <Image height={'100px'} width={'130px'} src="src\assets\productImages\1.png" alt="" />
                <VStack textAlign={'center'}>
                <h4>{data.Name}</h4>
                <span style={{color:'#e8e82e'}}>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
                <p style={{color:'#9C5BF5'}}><b>{data.Price}</b></p>
                
                </VStack>
                </HStack>
                <hr/>
            </Card>
           
            
            )
        }
        )}
    </VStack>
    </HStack>
    
    </Box>
  )
}
