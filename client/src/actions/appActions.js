import {
  SET_AUTH,
  CHANGE_FORM,
  SENDING_REQUEST,
  SENDING_AUTH_REQUEST,
  SET_ERROR_MESSAGE,
  SET_DATA
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

export function loadData(path, name) {
  return dispatch => {
    dispatch(setData({ [name]: '' }))
    dispatch(sendingRequest(true))
    dispatch(setErrorMessage(''))
    fetch(`/api${path}`, { credentials: 'same-origin' })
      .then(res => {
        if (res.ok) return res.json()
        else throw new Error(res.statusText)
      })
      .then(data => {
        dispatch(sendingRequest(false))
        dispatch(setData({ [name]: data.message }))
      })
      .catch(error => {
        dispatch(sendingRequest(false))
        dispatch(setErrorMessage('Error loading data'))
      })
  }
}

export function loadMe() {
  return dispatch => {
    dispatch(sendingAuthRequest(true))
    dispatch(setErrorMessage(''))
    fetch('/api/me', { credentials: 'same-origin' })
      .then(res => {
        if (res.ok) return res.json()
        else throw new Error(res.statusText)
      })
      .then(data => {
        dispatch(sendingAuthRequest(false))
        dispatch(setAuthState(data.isLoggedIn))
      })
      .catch(error => {
        dispatch(sendingAuthRequest(false))
        dispatch(setErrorMessage('Error loading user'))
      })
  }
}

export function logout() {
  return dispatch => {
    dispatch(sendingRequest(true))
    dispatch(setErrorMessage(''))
    fetch('/api/logout', { credentials: 'same-origin' })
      .then(res => {
        if (res.ok) return res.json()
        else throw new Error(res.statusText)
      })
      .then(data => {
        dispatch(sendingRequest(false))
        dispatch(setAuthState(data.isLoggedIn))
      })
      .catch(error => {
        dispatch(sendingRequest(false))
        dispatch(setErrorMessage('Error logging out'))
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

function sendingAuthRequest(sending) {
  return { type: SENDING_AUTH_REQUEST, sending }
}

function setData(data) {
  return { type: SET_DATA, data }
}
