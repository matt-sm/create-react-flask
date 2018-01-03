import {
  SET_AUTH,
  CHANGE_FORM,
  SENDING_REQUEST,
  SET_ERROR_MESSAGE,
  SET_PROTECTED_DATA
} from '../constants/AppConstants'

export function login(username, password) {
  return dispatch => {
    dispatch(sendingRequest(true))
    dispatch(setErrorMessage(''))
    fetch('/api/login', {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
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

export function loadProtectedData() {
  return dispatch => {
    dispatch(sendingRequest(true))
    dispatch(setErrorMessage(''))
    fetch('/api/protected', { credentials: 'same-origin' })
      .then(res => {
        if (res.ok) return res.json()
        else throw new Error(res.statusText)
      })
      .then(data => {
        dispatch(sendingRequest(false))
        dispatch(setProtectedData(data.message))
      })
      .catch(error => {
        dispatch(sendingRequest(false))
        dispatch(setErrorMessage('Error loading data'))
      })
  }
}

export function setAuthState(newState) {
  return { type: SET_AUTH, newState }
}

export function sendingRequest(sending) {
  return { type: SENDING_REQUEST, sending }
}

export function setErrorMessage(message) {
  return { type: SET_ERROR_MESSAGE, message }
}

function setProtectedData(data) {
  //console.log(data)
  return { type: SET_PROTECTED_DATA, data }
}

export function changeForm(newState) {
  return { type: CHANGE_FORM, newState }
}
