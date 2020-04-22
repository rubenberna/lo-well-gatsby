import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

import { useFormInput } from '../../../hooks'
import { FormWrapper, StyledForm, StyledFormGroup, StyledTextInput, StyledLabel } from '../../styledComponents/forms'
import { Container } from '../../styledComponents/containers'
import { SubHeader, Paragraph } from '../../styledComponents/typography'

const EditEvent = ({ event, closeForm, handleEdit }) => {
  const name = useFormInput(event.name)
  const price = useFormInput(event.price)
  const description = useFormInput(event.description)
  const [regular, setRegular] = useState(event.regular)
  const [photo, setPhoto] = useState()

  console.log(event);
  

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    setPhoto(file)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('submitted')
  }

  const renderForm = () => {
    return (
      <FormWrapper>
        <Container display='flex' justify='space-between'>
          <SubHeader>Edit form</SubHeader>
          <button type="button" className="btn btn-secondary" onClick={closeForm}>exit</button>
        </Container>
        <StyledForm width='100%' onSubmit={handleSubmit}>
          <Container display='flex' justify='space-between' width='60%' margin='10px 0'>
            <Container>
              <StyledLabel>Name</StyledLabel>
              <StyledTextInput width='300px' className="form-control" {...name} />
            </Container>
            <Container>
              <StyledLabel>Price</StyledLabel>
              <StyledTextInput width='50px' type='number' className="form-control" {...price} />
            </Container>
          </Container>
          <StyledFormGroup direction='column'>
            <StyledLabel>Description</StyledLabel>
            <textarea
              className="form-control"
              rows="6"
              {...description}
            />
          </StyledFormGroup>
          <StyledFormGroup margin='10px 0' direction='column'>
            <Paragraph>
              Current photo: <a href={event.photoUrl} target='_blank' rel="noopener noreferrer">click to see</a></Paragraph>
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="customFile" onChange={e => handleFileUpload(e)} />
              <label className="custom-file-label" htmlFor="customFile">{!photo ? 'New photo?' : photo.name}</label>
            </div>
            <Container margin='10px 0'>
              {photo &&
                <button type="button" className="btn btn-light" onClick={e => setPhoto('')}>Clear uploaded photo</button>
              }
            </Container>
          </StyledFormGroup>
          <StyledFormGroup>
            <Form.Check
              type="switch"
              id="custom-switch"
              label={regular ? 'Weekly event' : 'Occasional event'}
              checked={regular}
              onChange={() => setRegular(!regular)}
            />
          </StyledFormGroup>
        </StyledForm>
      </FormWrapper>
    )
  }

  return renderForm()

}
export default EditEvent