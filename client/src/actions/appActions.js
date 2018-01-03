import { SET_AUTH, CHANGE_FORM, SENDING_REQUEST, SET_ERROR_MESSAGE, SET_DATA } from '../constants/AppConstants'

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
        dispatch(setData({ protected: data.message }))
      })
      .catch(error => {
        dispatch(sendingRequest(false))
        dispatch(setErrorMessage('Error loading data'))
      })
  }
}

export function loadHomeData() {
  return dispatch => {
    dispatch(sendingRequest(true))
    dispatch(setErrorMessage(''))
    fetch('/api/', { credentials: 'same-origin' })
      .then(res => {
        if (res.ok) return res.json()
        else throw new Error(res.statusText)
      })
      .then(data => {
        dispatch(sendingRequest(false))
        dispatch(setData({ home: data.message }))
      })
      .catch(error => {
        dispatch(sendingRequest(false))
        dispatch(setErrorMessage('Error loading data'))
      })
  }
}

export function setErrorMessage(message) {
  return { type: SET_ERROR_MESSAGE, message }
}

export function changeForm(newState) {
  return { type: CHANGE_FORM, newState }
}

function setAuthState(newState) {
  return { type: SET_AUTH, newState }
}

function sendingRequest(sending) {
  return { type: SENDING_REQUEST, sending }
}

function setData(data) {
  return { type: SET_DATA, data }
}
