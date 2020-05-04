import React from 'react'
import FadeIn from 'react-fade-in'
import LazyLoad from 'react-lazyload'

import { Card } from 'react-bootstrap'
import { ReadMoreBtn } from '../../styledComponents/buttons'
import { StyledCard, StyledLink } from './cards.style'

const ProductCard = ({ product }) => {

  return (
    <FadeIn>
      <StyledCard style={{ width: '18rem' }}>
        <LazyLoad>
          <Card.Img variant="top" src={product.photoUrl} />
        </LazyLoad>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.intro}
          </Card.Text>
          <ReadMoreBtn variant="primary"><StyledLink to={product.slug}>I'm interested
        </StyledLink></ReadMoreBtn>
        </Card.Body>
      </StyledCard>
    </FadeIn>
  )
}

export default ProductCard