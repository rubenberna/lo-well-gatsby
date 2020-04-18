import React, { useState, useCallback } from 'react'
import { Alert } from 'react-bootstrap'

import { auth } from '../../../../services/firebase'
import { useFormInput } from '../../../../hooks/index'
import { Container } from '../../../styledComponents/containers'
import { SubHeader } from '../../../styledComponents/typography'

const Login = ({ setUser }) => {
  const email = useFormInput('')
  const password = useFormInput('')
  const [showAlert, setShowAlert] = useState(false)

  const handleLogin = useCallback(
    async () => {
      try {
        await auth()
          .signInWithEmailAndPassword(email.value.toLowerCase(), password.value)
        setUser(auth().currentUser)
      } catch (e) {
        alert(e)
      }
    }, [email.value, password.value, setUser]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.value || !password.value) {
      setShowAlert(true)
    }
    else {
      setShowAlert(false)
      handleLogin()
    }
  }

  const renderAlert = () => {
    if (showAlert) return (
      <Alert variant='danger'>Please fill in all details</Alert>
    )
  }

  return (
    <Container display='flex' height='60vh' align='center' justify='center' direction='column'>
      {renderAlert()}
      <SubHeader margin='0 0 20px 0'>Login</SubHeader>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="input-email">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            id="input-email" 
            aria-describedby="emailHelp" 
            {...email}/>
        </div>
        <div className="form-group">
          <label htmlFor="input-password">Password</label>
          <input 
            type="password" 
            id="input-password" 
            className="form-control" 
            {...password}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </Container>
  )
}

export default Login