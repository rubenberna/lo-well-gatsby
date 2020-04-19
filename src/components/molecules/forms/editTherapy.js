import React, { useState, useReducer } from 'react'

import { useFormInput } from '../../../hooks'
import { Container } from '../../styledComponents/containers';
import { SubHeader, Paragraph } from '../../styledComponents/typography'
import { StyledForm, StyledFormGroup, StyledTextInput, StyledLabel } from '../../styledComponents/forms' 

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
    default:
      return state;
  }
}


const EditTherapy = ({ therapy }) => {
  console.log('therapy Edit: ', therapy);
  const name = useFormInput(therapy.name)
  const heading = useFormInput(therapy.heading)
  const extraP = useFormInput('')
  const [paragraphs, dispatch] = useReducer(paragraphsReducer, therapy.paragraphs)
  const [showExtraP, setShowExtraP] = useState(false)

  const changeParagraph = ({text, index}) => {
    let obj= {
      index,
      text
    }    
    dispatch({
      type: 'change-paragraph',
      payload: obj
    })
  }

  const renderMoreParagraphsBtn = () => {
    if(!showExtraP) return (
      <button type="button" className="btn btn-success" onClick={() => setShowExtraP(true)}>+</button>
    )
    else return (
      <button type="button" className="btn btn-dark" onClick={saveNewParagraph}>Save</button>
    )
  }

  const saveNewParagraph = () => {
    dispatch({
      type: 'add-paragraph',
      payload: extraP.value
    })
    setShowExtraP(false)
  }


  const renderParagraphs = () => 
    paragraphs.map((p, i) => (
      <StyledFormGroup direction='column' key={i}>
        <StyledLabel>Paragraph {i + 1}</StyledLabel>
        <Container display='flex' align='baseline'>
          <textarea 
            className="form-control" 
            rows="3" 
            value={p} 
            onChange={e => changeParagraph({ text: e.target.value, index: i })}/>
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

  const renderExtraP = () => {
    if(showExtraP) return (
      <Container margin='10px 0'>
        <Paragraph>Extra paragraph</Paragraph>
        <Container display='flex' align='baseline'>
          <textarea 
            className="form-control" 
            rows="3" 
            {...extraP}/>
          <button 
            type="button" 
            className="btn btn-danger" 
            onClick={() => setShowExtraP(false)}>-</button>
        </Container>
      </Container>
    )
    else return ''
  }

  const renderForm = () => {
    return (
      <Container 
        display='flex'
        width='50%'
        justify='center'
        direction='column'
        alignSelf='flex-start'
        margin='60px 0'
        padding='20px'
        border='2px dashed'
        radius='5px'
        >
        <SubHeader>Edit form</SubHeader>
        <StyledForm width='100%'>
          <StyledFormGroup direction='column'>
            <StyledLabel>Name</StyledLabel>
            <StyledTextInput width='300px' className="form-control" {...name}/>
          </StyledFormGroup>
          <StyledFormGroup direction='column'>
            <StyledLabel>Heading</StyledLabel>
            <StyledTextInput className="form-control" {...heading}/>
          </StyledFormGroup>
          {renderParagraphs()}
          {renderMoreParagraphsBtn()}
          {renderExtraP()}
        </StyledForm>
      </Container>
    )
  }

  return renderForm()

}
export default EditTherapy
