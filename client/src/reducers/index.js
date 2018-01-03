import { CHANGE_FORM, SET_AUTH, SENDING_REQUEST, SET_ERROR_MESSAGE, SET_PROTECTED_DATA } from 'constants/AppConstants'

const initialState = {
  formState: {
    email: '',
    password: ''
  },
  currentlySending: false,
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
    case SET_PROTECTED_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          protected: action.data
        }
      }
    default:
      return state
  }
}
