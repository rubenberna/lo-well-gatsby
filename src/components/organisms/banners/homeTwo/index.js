import React from 'react'

import { Container } from '../../../styledComponents/containers'
import { Header } from '../../../styledComponents/typography'
import ProductCard from '../../../molecules/cards/productCard'
import { CardsGallery } from './homeTwo.style'

const HomeBannerTwo = ({ data }) => {
  const { events } = data.events
  const { therapies } = data.therapies

  let allProducts = [...events, ...therapies]
  console.log(allProducts);
  
  
  return (
    <Container display='flex' justify='center' align='center' margin='50px 0'>
      <Container width='80%'>
        <Header>Your path to healing</Header>
        <CardsGallery>
          {allProducts.map((p, i) => <ProductCard key={i} product={p}/>)}
        </CardsGallery>
      </Container>
    </Container>
  )
}

export default HomeBannerTwo