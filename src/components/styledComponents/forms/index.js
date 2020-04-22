import styled from 'styled-components'

export const StyledForm = styled.form`
  width: ${({ width }) => width};
`

export const StyledFormGroup = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify};
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  padding: 7px;
`
export const StyledTextInput = styled.input`
  width: ${({ width }) => width};
`

export const StyledLabel = styled.label`

`

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-self: flex-start;
  margin: 60px 10px 20px 0;
  padding: 20px;
  border: 2px dashed;
  border-radius: 5px;
`