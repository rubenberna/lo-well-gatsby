import { useState, useEffect } from 'react'

export const useFormInput = (initialValue) => {  
  const [value, setValue] = useState(initialValue || '')

  useEffect(() => {
    setValue(initialValue)
  },[initialValue])

  function handleChange(e) {  
    setValue(e.target.value)
  }

  return {
    value,
    onChange: handleChange
  }
}

