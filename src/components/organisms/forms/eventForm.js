import React, { useState, useEffect, useReducer } from 'react'
import _ from 'lodash'
import moment from 'moment'
import { Form } from 'react-bootstrap'
import Select from 'react-select'
import TimePicker from 'rc-time-picker'
import 'rc-time-picker/assets/index.css'

import { UPDATE_EVENT, CREATE_EVENT } from '../../../services/types'
import { useFormInput } from '../../../hooks'
import { FormWrapper, StyledForm, StyledFormGroup, StyledTextInput, StyledLabel } from '../../styledComponents/forms'
import { Container } from '../../styledComponents/containers'
import { SubHeader, Paragraph } from '../../styledComponents/typography'
import { weekdaysList } from '../../_helpers'
import { FormAlert } from '../../molecules/alerts'
moment.locale('nl-be');

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
      return [...state, action.payload]
    default:
      return state;
  }
}

const now = moment().hour(0).minute(0);

const initialVenue = [
  { location: '', weekdays: '', time: now.toISOString() }
]

const format = 'h:mm a';


const EventForm = ({ event, closeForm, handleFormSubmission, typeOfAction }) => {
  const name = useFormInput(event?.name || '')
  const intro = useFormInput(event?.intro || '')
  const price = useFormInput(event?.price || '0')
  const description = useFormInput(event?.description || '')
  const location = useFormInput(event?.location || '')
  const date = useFormInput(event?.date || '')
  const [time, setTime] = useState(event?.time || now)
  const extraVenueLocation = useFormInput('')
  const [extraVenueWeekdays, setExtraVenueWeekdays] = useState('')
  const [extraVenueTime, setExtraVenueTime] = useState(now)
  const [regular, setRegular] = useState(event?.regular || false)
  const [photo, setPhoto] = useState()
  const [showExtraVenue, setShowExtraVenue] = useState(false)
  const [regularVenue, dispatch] = useReducer(regularVenueReducer, event?.regularVenue || '')
  const [validForm, setValidForm] = useState('')

  // Change form values when therapy object changes
  useEffect(() => {
    setRegular(event?.regular || false)
    setPhoto('')
    dispatch({
      type: 'set-venues',
      payload: event?.regularVenue || ''
    })
  }, [event])


  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    setPhoto(file)
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    const type = typeOfAction === 'edit-events' ? UPDATE_EVENT : CREATE_EVENT

    const eventObj = {
      date: date.value,
      description: description.value,
      time: time.toISOString(),
      location: location.value,
      name: name.value,
      intro: intro.value,
      photo,
      slug: `/${name.value.toLowerCase().split(' ').join('-')}`,
      photoUrl: event?.photoUrl || '',
      price: price.value || 0,
      regular,
      regularVenue: regularVenue || initialVenue,
      id: event?.id || ''
    }

    let valid = validate(eventObj)

    if (!valid) {
      setValidForm('danger')
    } else {
      setValidForm('success')
      setTimeout(() => handleFormSubmission({
        type,
        obj: eventObj
      }), 5000)
    }
  }

  const validate = (eventObj) => {
    let validationObj = _.omit(eventObj, ['id', 'photoUrl', 'photo', 'date', 'time', 'location', 'regularVenue', 'regular'])

    if (!event && !photo) return false
    if (!regular && (!date.value || !location.value || !time)) return false
    if (regular && !regularVenue[0]) return false

    function checkIfEmpty(el) {
      return el.length > 0 || typeof el === 'number'
    }

    let complete = Object.values(validationObj).every(checkIfEmpty)
    return complete
  }

  const changeVenueLocation = ({ location, index }) => {
    let currVenue = regularVenue[index]
    currVenue.location = location
    changeVenue(currVenue, index)
  }

  const changeVenueWeekdays = ({ weekdays, index }) => {    
    let currVenue = regularVenue[index]
    currVenue.weekdays = weekdays.value
    changeVenue(currVenue, index)
  }

  const changeVenueTime = ({ time, index }) => {    
    let currVenue = regularVenue[index]
    currVenue.time = time.toISOString()
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
      weekdays: extraVenueWeekdays.value,
      time: extraVenueTime.toISOString()
    }

    dispatch({
      type: 'add-venue',
      payload: extraVenue
    })
    setShowExtraVenue(false)
  }

  const renderWeekDays = (day) => {
    return { value: day, label: day }
  }

  const formTitle = typeOfAction === 'edit-events' ? 'Edit event' : 'Create event';

  const renderMoreVenuesBtn = () => {
    if (regular) {
      if (!showExtraVenue) return (
        <button type="button" className="btn btn-light" onClick={() => setShowExtraVenue(true)}>Add venue</button>
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
        <Container width='140px'>
          <StyledLabel>Weekdays</StyledLabel>
          <Select
            value={extraVenueWeekdays}
            onChange={e => setExtraVenueWeekdays(e)}
            options={weekdaysList}
          />
        </Container>
        <Container width='95px'>
          <StyledLabel>At what time</StyledLabel>
          <TimePicker
            className='timePicker'
            format={format}
            value={moment(extraVenueTime)}
            onChange={setExtraVenueTime}
            showSecond={false}
          />
        </Container>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => setShowExtraVenue(false)}>
          -
            </button>
      </StyledFormGroup>
    )
    else return ''
  }

  const conditionalRenderVenue = () => {
    if (!regular) return (
      <StyledFormGroup justify='space-between'>
        <Container>
          <StyledLabel>Location</StyledLabel>
          <StyledTextInput width='400px' className="form-control" {...location} />
        </Container>
        <Container>
          <StyledLabel>Date</StyledLabel>
          <StyledTextInput type='date' className="form-control" {...date} />
        </Container>
        <Container width='95px'>
          <StyledLabel>At what time</StyledLabel>
          <TimePicker
            className='timePicker'
            format={format}
            value={time}
            onChange={setTime}
            showSecond={false}
          />
        </Container>
      </StyledFormGroup>
    )
    else {
      if (regularVenue) {       
        return regularVenue.map((venue, i) => (
          <div key={i}>
            {venue.location &&
              <StyledFormGroup justify='space-between' align='flex-end'>
                <Container>
                  <StyledLabel>Location</StyledLabel>
                  <StyledTextInput
                    width='400px'
                    className="form-control"
                    value={venue.location}
                    onChange={e => changeVenueLocation({ location: e.target.value, index: i })}
                  />
                </Container>
                <Container width='140px'>
                  <StyledLabel>Weekday</StyledLabel>
                  <Select
                    value={renderWeekDays(venue.weekdays)}
                    onChange={e => changeVenueWeekdays({ weekdays: e, index: i })}
                    options={weekdaysList}
                  />
                </Container>
                <Container width='95px'>
                  <StyledLabel>At what time</StyledLabel>
                  <TimePicker
                    className='timePicker'
                    format={format}
                    value={moment(venue.time)}
                    onChange={e => changeVenueTime({ time: e, index: i})}
                    showSecond={false}
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
            }
          </div>
        ))
      }
    }
  }


  const renderForm = () => {
    return (
      <>
        <FormAlert show={validForm} setShow={setValidForm} />
        <FormWrapper
          validForm={validForm}
          onFocus={() => setValidForm('')}>
          <Container display='flex' justify='space-between'>
            <SubHeader>{formTitle}</SubHeader>
            <button type="button" className="btn btn-secondary" onClick={closeForm}>exit</button>
          </Container>
          <StyledForm width='100%' onSubmit={handleSubmit}>
            <Container display='flex' justify='space-between' width='90%' margin='10px 0'>
              <Container>
                <StyledLabel>Name</StyledLabel>
                <StyledTextInput width='300px' className="form-control" {...name} />
              </Container>
              <Container>
                <StyledLabel>Price</StyledLabel>
                <StyledTextInput width='250px' className="form-control" {...price} />
              </Container>
            </Container>
            <StyledFormGroup direction='column'>
              <StyledLabel>Homepage intro</StyledLabel>
              <StyledTextInput className="form-control" {...intro} />
            </StyledFormGroup>
            <StyledFormGroup direction='column'>
              <StyledLabel>Description</StyledLabel>
              <textarea
                className="form-control"
                rows="6"
                {...description}
              />
            </StyledFormGroup>
            <StyledFormGroup margin='10px 0' direction='column'>
              {event &&
                <Paragraph>
                  Current photo: <a href={event.photoUrl} target='_blank' rel="noopener noreferrer">click to see</a>
                </Paragraph>
              }
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
      </>
    )
  }

  return renderForm()

}
export default EventForm