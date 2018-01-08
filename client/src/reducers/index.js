import {
  CHANGE_FORM,
  SET_AUTH,
  SENDING_REQUEST,
  LOADING_AUTH,
  SET_ERROR_MESSAGE,
  SET_DATA
} from 'constants/AppConstants'

const initialState = {
  formState: {
    email: '',
    password: ''
  },
  currentlySending: false,
  loadingAuth: false,
  loggedIn: false,
  errorMessage: '',
  data: {
    home: '',
    protected: ''
  }
}

export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return changeForm(state, action)
    case SET_AUTH:
      return setAuth(state, action)
    case SENDING_REQUEST:
      return sendingRequest(state, action)
    case LOADING_AUTH:
      return loadingAuth(state, action)
    case SET_ERROR_MESSAGE:
      return setErrorMessage(state, action)
    case SET_DATA:
      return setData(state, action)
    default:
      return state
  }
}

function changeForm(state, action) {
  return {
    ...state,
    formState: {
      ...state.formState,
      ...action.newState
    }
  }
}

function setAuth(state, action) {
  return {
    ...state,
    loggedIn: action.newState
  }
}

function sendingRequest(state, action) {
  return {
    ...state,
    currentlySending: action.sending
  }
}

function loadingAuth(state, action) {
  return {
    ...state,
    loadingAuth: action.sending
  }
}

function setErrorMessage(state, action) {
  return {
    ...state,
    errorMessage: action.message
  }
}

function setData(state, action) {
  return {
    ...state,
    data: {
      ...state.data,
      ...action.data
    }
  }
}
