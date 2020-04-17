import React from 'react'

import { Container } from '../../styledComponents/containers'
import { SubHeader } from '../../styledComponents/typography'
import { danger, warning } from '../../styledComponents/variables'
import { STable, StyledTr, MainTd, ActionTd} from './table.style'

const ContentTable = ({ data }) => {
  console.log(data);

  const renderTable = () => (
    data.map(t => (
      <StyledTr key={t.id}>
        <MainTd width='60%'>{t.name}</MainTd>
        <ActionTd 
          color={warning}
          >
          Edit
        </ActionTd>
        <ActionTd 
          color={danger}
          >
          Delete
        </ActionTd>
      </StyledTr>
    ))
  )
  
  return (
    <Container display='flex' direction='column' width='100%' margin='40px 0 0 30px'>
      <SubHeader>Title</SubHeader>
      <Container 
        border='solid'
        padding='14px'
        radius='8px'
        width='35%'>
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

      // <StyledList>
      //   {data.map(t => 
      //     <StyledLi key={t.id}>
      //     {t.name}{' '}Edit{' '}Delete
      //   </StyledLi>)}
      // </StyledList>