import React from 'react'
import NavBar from './Navbar'
import FirstTxtBox from './FirstTxtBox'
import HomeCard from './HomeCard'
import Images from './Images'
import LastCard from './LastCard'
import { SimpleGrid } from '@chakra-ui/react'

export default function Home() {
  return (
    <div>
        
        {/* <NavBar></NavBar><br/><br/><br/> */}
        <SimpleGrid
         columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
         padding={'10px'}
         spacing={20}
         alignContent={'space-between'}
         templateColumns={{
           base: '1fr',
           
         }}
        >
        <FirstTxtBox></FirstTxtBox><br/>
        <HomeCard></HomeCard>
        <Images></Images>
        </SimpleGrid>
        <LastCard></LastCard>
        

        
    </div>
  )
}
