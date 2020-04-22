import React, { useState, useEffect, useReducer } from 'react'
import { Form } from 'react-bootstrap'
import Select from 'react-select';

import { UPDATE_EVENT } from '../../../services/types'
import { useFormInput } from '../../../hooks'
import { FormWrapper, StyledForm, StyledFormGroup, StyledTextInput, StyledLabel } from '../../styledComponents/forms'
import { Container } from '../../styledComponents/containers'
import { SubHeader, Paragraph } from '../../styledComponents/typography'

const weekdaysList = [
  { value: 'Ma.', label: 'Ma.' },
  { value: 'Di.', label: 'Di.' },
  { value: 'Wo.', label: 'Wo.' },
  { value: 'Do.', label: 'Do.' },
  { value: 'Vr.', label: 'Vr.' },
  { value: 'Za.', label: 'Za.' },
  { value: 'Zo.', label: 'Zo.' },

]
function regularVenueReducer(state, action) {
  switch (action.type) {
    case 'set-venues':
      return action.payload
    case 'remove-venue':
      let newState = [...state]
      newState.splice(action.payload, 1)
      return newState
    case 'change-venue':
      return state.map((el, i) => i === action.payload.index ? action.payload.venue : el)
    case 'add-venue':
      return [...state, action.payload ]
    default:
      return state;
  }
}

const EditEvent = ({ event, closeForm, handleEdit }) => {    
  const name = useFormInput(event.name)
  const price = useFormInput(event.price)
  const description = useFormInput(event.description)
  const location = useFormInput(event.location || '')
  const date = useFormInput(event.date || '')
  const extraVenueLocation = useFormInput('')
  const [extraVenueWeekdays, setExtraVenueWeekdays] = useState([])
  const [regular, setRegular] = useState(event.regular)
  const [photo, setPhoto] = useState()
  const [showExtraVenue, setShowExtraVenue] = useState(false)
  const [regularVenue, dispatch] = useReducer(regularVenueReducer, event.regularVenue)

  // Change form values when therapy object changes
  useEffect(() => {
    setRegular(event.regular)
    setPhoto('')
    dispatch({
      type: 'set-venues',
      payload: event.regularVenue || []
    })
  }, [event])
  

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    setPhoto(file)
  }


  const handleSubmit = e => {
    e.preventDefault()

    const updatedEvent = {
      date: date.value,
      description: description.value,
      location: location.value,
      name: name.value,
      photo,
      photoUrl: event.photoUrl,
      price: parseInt(price.value),
      regular,
      regularVenue,
      id: event.id
    }

    handleEdit({
      type: UPDATE_EVENT,
      obj: updatedEvent
    })

  }

  const changeVenueLocation = ({ location, index}) => {
    let currVenue = regularVenue[index]
    currVenue.location = location
    changeVenue(currVenue, index) 
  }

  const changeVenueWeekdays = ({ weekdays, index }) => {
    let currVenue = regularVenue[index]
    currVenue.weekdays = weekdays.map(w => w.value)
    changeVenue(currVenue, index) 
  }

  const changeVenue = (venue, index) => {    
    let obj = {
      index,
      venue
    }
    dispatch({
      type: 'change-venue',
      payload: obj
    })
  }

  const saveNewVenue = () => {
    let extraVenue = {
      location: extraVenueLocation.value,
      weekdays: extraVenueWeekdays.map(w => w.value)
    }

    dispatch({
      type: 'add-venue',
      payload: extraVenue
    })
    setShowExtraVenue(false)
  }

  const renderWeekDays = (list) => {  
    if(list) {
      return list.map((t, i) => ({ value: t, label: t}))
    }  
  }

  const renderMoreVenuesBtn = () => {
    if (regular) {
      if (!showExtraVenue) return (
        <button type="button" className="btn btn-success" onClick={() => setShowExtraVenue(true)}>+</button>
      )
      else return (
        <button type="button" className="btn btn-dark" onClick={saveNewVenue}>Add</button>
      )
    }
  }

  const renderExtraVenue = () => {
    if (showExtraVenue) return (
      <StyledFormGroup justify='space-between' align='flex-end'>
        <Container>
          <StyledLabel>Location</StyledLabel>
          <StyledTextInput
            width='400px'
            className="form-control"
            {...extraVenueLocation}
          />
        </Container>
        <Container width='280px'>
          <StyledLabel>Weekdays</StyledLabel>
          <Select
            isMulti
            value={extraVenueWeekdays}
            onChange={e => setExtraVenueWeekdays(e)}
            options={weekdaysList}
          />
        </Container>
      </StyledFormGroup>
    )
    else return ''
  }

  const conditionalRenderVenue = () => {
    if(!regular) return (
      <StyledFormGroup justify='space-between'>
        <Container>
          <StyledLabel>Location</StyledLabel>
          <StyledTextInput width='400px' className="form-control" {...location} />
        </Container>
        <Container>
          <StyledLabel>Date</StyledLabel>
          <StyledTextInput type='date' className="form-control" {...date} />
        </Container>        
      </StyledFormGroup>
    )
    else {
      if(regularVenue) {        
        return regularVenue.map((venue, i) => (
          <StyledFormGroup justify='space-between' key={i} align='flex-end'>
            <Container>
              <StyledLabel>Location</StyledLabel>
              <StyledTextInput 
                width='400px' 
                className="form-control" 
                value={venue.location} 
                onChange={e => changeVenueLocation({ location: e.target.value, index: i})}
                />
            </Container>
            <Container width='280px'>
              <StyledLabel>Weekdays</StyledLabel>
              <Select
                isMulti
                value={renderWeekDays(venue.weekdays)}
                onChange={e => changeVenueWeekdays({ weekdays: e, index: i})}
                options={weekdaysList}
              />
            </Container>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => dispatch({
                type: 'remove-venue',
                payload: i
              })}>
              -
          </button>
          </StyledFormGroup>
        ))
      } 
    }
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
          {conditionalRenderVenue()}
          {renderMoreVenuesBtn()}
          {renderExtraVenue()}
          <Container margin='10px 0'>
            <button type="submit" className="btn btn-primary">Save</button>
          </Container>
        </StyledForm>
      </FormWrapper>
    )
  }

  return renderForm()

}
export default EditEvent