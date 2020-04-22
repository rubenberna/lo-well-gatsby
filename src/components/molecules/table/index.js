import React from 'react'

import { Container } from '../../styledComponents/containers'
import { SubHeader } from '../../styledComponents/typography'
import { STable, StyledTr, MainTd} from './table.style'

const ContentTable = ({ data, handleEditSelection, active, formIsVisible, editableDoc}) => {

  const renderTable = () => (
    data.map(t => (
      <StyledTr 
        key={t.id} 
        background={editableDoc.id === t.id ? '#e0e0e0' : ''} 
        cursor='pointer'
        >
        <MainTd 
          width='20%'
          onClick={() => handleEditSelection({
            formName: `edit-${active}`,
            doc: t
          })}
          >{t.name}
        </MainTd>
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
