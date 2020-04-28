import React from 'react'

import { Card } from 'react-bootstrap'
import { ReadMoreBtn } from '../../styledComponents/buttons'
import { StyledCard, StyledLink } from './cards.style'

const ProductCard = ({ product }) => {

  return (
    <StyledCard style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.photoUrl} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.intro}
        </Card.Text>
        <ReadMoreBtn variant="primary"><StyledLink to={product.slug}>I'm interested
        </StyledLink></ReadMoreBtn>
      </Card.Body>
    </StyledCard>
  )
}

export default ProductCard