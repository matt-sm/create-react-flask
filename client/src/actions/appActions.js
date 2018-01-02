import { SET_AUTH, CHANGE_FORM, SENDING_REQUEST, SET_ERROR_MESSAGE } from '../constants/AppConstants'

export function login(username, password) {
  return dispatch => {
    dispatch(sendingRequest(true))
    dispatch(setErrorMessage(''))
    fetch('/api/login', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ username, password })
    })
      .then(res => {
        if (res.ok) return res.json()
        else throw new Error(res.statusText)
      })
      .then(data => {
        dispatch(sendingRequest(false))
        dispatch(setAuthState(true))
      })
      .catch(error => {
        dispatch(sendingRequest(false))
        dispatch(setErrorMessage('Login failed'))
      })
  }
}

export function setAuthState(newState) {
  return { type: SET_AUTH, newState }
}

export function sendingRequest(sending) {
  return { type: SENDING_REQUEST, sending }
}

function setErrorMessage(message) {
  return { type: SET_ERROR_MESSAGE, message }
}

export function changeForm(newState) {
  return { type: CHANGE_FORM, newState }
}
