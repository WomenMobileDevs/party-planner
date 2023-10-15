// userTypeReducer.js

import {SET_USER_TYPE} from './Actions';

const initialState = '';

const userTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_TYPE:
      return action.payload;
    default:
      return state;
  }
};

export default userTypeReducer;
