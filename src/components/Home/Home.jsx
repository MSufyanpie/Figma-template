import React from 'react'
import NavBar from './Navbar'
import FirstTxtBox from './FirstTxtBox'
import HomeCard from './HomeCard'
import Images from './Images'
import LastCard from './LastCard'

export default function Home() {
  return (
    <div>
        
        {/* <NavBar></NavBar><br/><br/><br/> */}
        
        <FirstTxtBox></FirstTxtBox><br/>
        <HomeCard></HomeCard>
        <Images></Images>
        <LastCard></LastCard>

        
    </div>
  )
}
