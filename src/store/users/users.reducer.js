import { USERS_ACTION_TYPES } from "./users.types";

const INITIAL_STATE = {
  users: [],
  userCalling: {},
  userCallingId: null,
  userCallingName: null
};

export const usersReducer = (state = INITIAL_STATE,action) => {
  const { type,payload } = action;
 
  switch (type) {
    case USERS_ACTION_TYPES.SET_CURRENT_USERS:
      return {
        ...state,
        users: payload
      }
    case USERS_ACTION_TYPES.SET_USER_CALLING:
      return {
        ...state,
        userCalling: payload.userCalling,
        userCallingId: payload.userCallingId,
        userCallingName: payload.userCallingName
      }
    default:
      return state;
  }
}