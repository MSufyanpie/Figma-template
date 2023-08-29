import React from 'react'
import {  Image,   Card } from '@chakra-ui/react'
import './ProductDesign.scss'
export default function ProductsDesign({id,Name,Price}) {
  return (
    <div
    className='prod-design-div'
    >
        <Card
        className='all-product-cards'
            px={'5%'}
            variant={'unstyled'}
             key={id}>
                <div className='content-div'>
                <Image height={'80px'} width={'80px'}
                src="src\assets\productImages\1.png" alt="" />
                <div className='child-div'>
                <h6>{Name}</h6>
                <span className='stars'>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
                <p className='price'><b>{Price}</b></p>
                </div>
                </div >
                <hr/>
                
            </Card>
    </div>
  )
}
