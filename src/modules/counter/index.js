import {
    INCREMENT_REQUESTED,
    INCREMENT,
    DECREMENT_REQUESTED,
    DECREMENT,
} from './types';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_REQUESTED:
        return {
            ...state,
            isIncrementing: true
        }

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }

    default:
      return state
  }
}

export default reducer;
