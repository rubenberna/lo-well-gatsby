import React, { useState, useReducer, useEffect } from 'react'
import Select from 'react-select';

import { UPDATE_THERAPY, CREATE_THERAPY } from '../../../services/types'
import { useFormInput } from '../../../hooks'
import { Container } from '../../styledComponents/containers';
import { SubHeader, Paragraph } from '../../styledComponents/typography'
import { FormWrapper, StyledForm, StyledFormGroup, StyledTextInput, StyledLabel } from '../../styledComponents/forms'

function paragraphsReducer(state, action) {
  switch (action.type) {
    case 'add-paragraph':
      return [...state, action.payload]
    case 'remove-paragraph':
      let newState = [...state];
      newState.splice(action.payload, 1)
      return newState
    case 'change-paragraph':
      return state.map((el, i) => i === action.payload.index ? action.payload.text : el)
    case 'set-paragraphs':
      return action.payload
    default:
      return state;
  }
}


const TherapyForm = ({ therapy, closeForm, therapists, handleFormSubmission, typeOfAction }) => {

  const name = useFormInput(therapy?.name || '')
  const heading = useFormInput(therapy?.heading || '')
  const price = useFormInput(therapy?.price || '')
  const extraP = useFormInput('')
  const [selectedTherapists, setSelectedTherapists] = useState([])
  const [photo, setPhoto] = useState()
  const [paragraphs, dispatch] = useReducer(paragraphsReducer, [])
  const [showExtraP, setShowExtraP] = useState(false)

  // Change form values when therapy object changes
  useEffect(() => {
    setPhoto('')
    setSelectedTherapists(therapy?.therapists.map(t => ({ value: t, label: t })) || [])
    dispatch({
      type: 'set-paragraphs',
      payload: therapy?.paragraphs || []
    })
  }, [therapy])

  const changeParagraph = ({ text, index }) => {
    let obj = {
      index,
      text
    }
    dispatch({
      type: 'change-paragraph',
      payload: obj
    })
  }


  const saveNewParagraph = () => {
    dispatch({
      type: 'add-paragraph',
      payload: extraP.value
    })
    setShowExtraP(false)
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    setPhoto(file)
  }

  const renderMoreParagraphsBtn = () => {
    if(!paragraphs.length) return ''
    if (!showExtraP) return (
      <button type="button" className="btn btn-success" onClick={() => setShowExtraP(true)}>+</button>
    )
    else return (
      <button type="button" className="btn btn-dark" onClick={saveNewParagraph}>Save</button>
    )
  }

  const renderExistingParagraphs = () => (
    paragraphs.map((p, i) => (
      <StyledFormGroup direction='column' key={i}>
        <StyledLabel>Paragraph {i + 1}</StyledLabel>
        <Container display='flex' align='baseline'>
          <textarea
            className="form-control"
            rows="3"
            value={p}
            onChange={e => changeParagraph({ text: e.target.value, index: i })} />
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => dispatch({
              type: 'remove-paragraph',
              payload: i
            })}>
            -
          </button>
        </Container>
      </StyledFormGroup>
    ))
  )

  const renderFirstParagraph = () => {
    if(!paragraphs.length) return (
      <>
        <Container margin='10px 0'>
          <Paragraph>First Paragraph</Paragraph>
          <Container display='flex' align='baseline' margin='0 0 10px 0'>
            <textarea
              className="form-control"
              rows="3"
              {...extraP} />
          </Container>
          <button 
            type="button" 
            className="btn btn-dark" 
            onClick={saveNewParagraph}>
            Save
          </button>
        </Container>
      </>
    )
  }

  const renderExtraP = () => {
    if (showExtraP) return (
      <Container margin='10px 0'>
        <Paragraph>Extra paragraph</Paragraph>
        <Container display='flex' align='baseline'>
          <textarea
            className="form-control"
            rows="3"
            {...extraP} />
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => setShowExtraP(false)}>-</button>
        </Container>
      </Container>
    )
    else return ''
  }

  const optionsList = therapists.map(t => ({ value: t.name, label: t.name }))

  const handleSubmit = (e) => {
    e.preventDefault();
    const type = typeOfAction === 'edit-therapies' ? UPDATE_THERAPY : CREATE_THERAPY

    const therapyObj = {
      name: name.value,
      heading: heading.value,
      price: price.value,
      paragraphs,
      slug: `/${name.value.toLowerCase().split(' ').join('-')}`,
      photo,
      therapists: selectedTherapists.map(t => t.value),
      id: therapy?.id || '',
      photoUrl: therapy?.photoUrl || ''
    }

    handleFormSubmission({
      type,
      obj: therapyObj
    })
  }

  const formTitle = typeOfAction === 'edit-therapies' ? 'Edit therapy' : 'Create therapy';

  const renderForm = () => {
    return (
      <FormWrapper>
        <Container display='flex' justify='space-between'>
          <SubHeader>{formTitle}</SubHeader>
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
            <StyledLabel>Heading</StyledLabel>
            <StyledTextInput className="form-control" {...heading} />
          </StyledFormGroup>
          {renderExistingParagraphs()}
          {renderFirstParagraph()}
          {renderMoreParagraphsBtn()}
          {renderExtraP()}
          <Container margin='10px 0'>
            {
              therapy &&
              <Paragraph>
                Current photo: {' '}
              <a href={therapy.photoUrl} target='_blank' rel="noopener noreferrer">
                  click to see
              </a>
              </Paragraph>
            }
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="customFile" onChange={e => handleFileUpload(e)}/>
              <label className="custom-file-label" htmlFor="customFile">{!photo ? 'New photo?' : photo.name}</label>
            </div>
            <Container margin='10px 0'>
              {photo &&
                <button type="button" className="btn btn-light" onClick={e => setPhoto('')}>Clear uploaded photo</button>
              }
            </Container>
          </Container>
          <Container margin='10px 0'>
          <Paragraph>Current therapists:</Paragraph>
            <Select
              isMulti
              value={selectedTherapists}
              onChange={e => setSelectedTherapists(e)}
              options={optionsList}
            />
          </Container>
          <button type="submit" className="btn btn-primary">Save</button>
        </StyledForm>
      </FormWrapper>
    )
  }

  return renderForm()

}
export default TherapyForm



