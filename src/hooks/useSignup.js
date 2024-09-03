import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [errorSU, setErrorSU] = useState(null)
  const [isLoadingSU, setIsLoadingSU] = useState(null)
  const { dispatch } = useAuthContext()

  const signup = async (username, email, password, specialPhrase) => {
    setIsLoadingSU(true)
    setErrorSU(null)

    const response = await fetch('https://jugotradingwepappserver.onrender.com/api/user/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ username, email, password, specialPhrase })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoadingSU(false)
      setErrorSU(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoadingSU(false)
    }
  }

  return { signup, isLoadingSU, errorSU }
}