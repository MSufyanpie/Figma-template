import React from 'react'
import ServicesCard from './ServicesCard'
import { SimpleGrid } from '@chakra-ui/react'
import LastCards from './LastCards'

export default function Services() {
  return (
    <div>
         <SimpleGrid
         columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
         padding={'10px'}
         spacing={20}
         alignContent={'space-between'}
         templateColumns={{
           base: '1fr',
           
         }}
        >
        <ServicesCard></ServicesCard>
        <LastCards></LastCards>
        </SimpleGrid>
    </div>
  )
}
