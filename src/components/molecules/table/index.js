import React from 'react'

import { Container } from '../../styledComponents/containers'
import { SubHeader } from '../../styledComponents/typography'
import { danger, warning } from '../../styledComponents/variables'
import { STable, StyledTr, MainTd, ActionTd} from './table.style'

const ContentTable = ({ data, handleEdit, handleDelete, active, formIsVisible, editableDoc}) => {

  const renderActionButtons = (t) => {
    if (!formIsVisible) return (
      <>
        <ActionTd
          color={warning}
          onClick={() => handleEdit({
            formName: `edit-${active}`,
            doc: t
          })}
        >
          Edit
        </ActionTd>
        {active !== 'about' &&
          <ActionTd
            color={danger}
            onClick={() => handleDelete(t)}
          >
            Delete
        </ActionTd>
        }
      </>
    )
  }


  const renderTable = () => (
    data.map(t => (
      <StyledTr key={t.id} background={editableDoc.id === t.id ? '#e0e0e0' : ''} hover={formIsVisible ? false : true}>
        <MainTd width='60%'>{t.name}</MainTd>
        {renderActionButtons(t)}
      </StyledTr>
    ))
  )
  
  return (
    <Container display='flex' direction='column' width='30%' margin='40px 0 0 30px'>
      <SubHeader>Title</SubHeader>
      <Container 
        border='solid'
        padding='14px'
        radius='8px'
        disabled={formIsVisible ? true : false}
        width='70%'>
        <STable>
          <tbody>
            {renderTable()}
          </tbody>
        </STable>
      </Container>
    </Container>
  )
}

export default ContentTable
