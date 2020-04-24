import React, { useState, useEffect } from 'react'

import { UPDATE_THERAPIST } from '../../../services/types'
import { useFormInput } from '../../../hooks'
import { Container } from '../../styledComponents/containers'
import { SubHeader, Paragraph } from '../../styledComponents/typography'
import { FormWrapper, StyledForm, StyledFormGroup, StyledTextInput, StyledLabel } from '../../styledComponents/forms'

const EditTherapist = ({ therapist, closeForm, handleEdit }) => {
  const name = useFormInput(therapist.name)
  const email = useFormInput(therapist.email)
  const phone = useFormInput(therapist.phone)
  const intro = useFormInput(therapist.intro)
  const [photo, setPhoto] = useState()

  useEffect(() => {
    setPhoto('')
  }, [therapist])

  const handleSubmit = e => {
    e.preventDefault()

    const updatedTherapist = {
      email: email.value,
      intro: intro.value,
      name: name.value,
      phone: phone.value,
      photo,
      photoUrl: therapist.photoUrl,
      id: therapist.id
    }    

    handleEdit({
      type: UPDATE_THERAPIST,
      obj: updatedTherapist
    })
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    setPhoto(file)
  }

  const renderForm = () => (
    <FormWrapper>
      <Container display='flex' justify='space-between'>
        <SubHeader>Edit form</SubHeader>
        <button type="button" className="btn btn-secondary" onClick={closeForm}>exit</button>
      </Container>
      <StyledForm width='100%' onSubmit={handleSubmit}>
        <StyledFormGroup justify='space-between'>
          <Container>
            <StyledLabel>Name</StyledLabel>
            <StyledTextInput width='300px' className="form-control" {...name} />
          </Container>
          <Container>
            <StyledLabel>Email</StyledLabel>
            <StyledTextInput width='300px' type='email' className="form-control" {...email} />
          </Container>
        </StyledFormGroup>
        <StyledFormGroup direction='column'>
          <StyledLabel>Description</StyledLabel>
          <textarea
            className="form-control"
            rows="6"
            {...intro}
          />
        </StyledFormGroup>
        <StyledFormGroup margin='10px 0' direction='column'>
          <Paragraph>
            Current photo: <a href={therapist.photoUrl} target='_blank' rel="noopener noreferrer">click to see</a></Paragraph>
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
          <Container>
            <StyledLabel>Phone</StyledLabel>
            <StyledTextInput width='300px' className="form-control" {...phone} />
          </Container>
        </StyledFormGroup>
        <Container margin='10px 0'>
          <button type="submit" className="btn btn-primary">Save</button>
        </Container>
      </StyledForm>
    </FormWrapper>
  )

  return renderForm()
}

export default EditTherapist