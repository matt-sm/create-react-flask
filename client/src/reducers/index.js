import { CHANGE_FORM, SET_AUTH, SENDING_REQUEST, SET_ERROR_MESSAGE } from 'constants/AppConstants'

const initialState = {
  formState: {
    email: '',
    password: ''
  },
  currentlySending: false,
  loggedIn: false,
  errorMessage: ''
}

export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return {
        ...state,
        formState: {
          ...state.formState,
          ...action.newState
        }
      }
    case SET_AUTH:
      return {
        ...state,
        loggedIn: action.newState
      }
    case SENDING_REQUEST:
      return {
        ...state,
        currentlySending: action.sending
      }
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.message
      }
    default:
      return state
  }
}
