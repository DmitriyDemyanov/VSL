import { USERS_ACTION_TYPES } from './users.types';

export const setCurrentUsers = (users) => ({ type: USERS_ACTION_TYPES.SET_CURRENT_USERS,payload: users });

export const setCallingUser = (user) => {
  const {id, firstName, familyName } = user;
  const userCallingId = id;
  const userCallingName = `${firstName} ${familyName}`;
  return {
    type: USERS_ACTION_TYPES.SET_USER_CALLING,
    payload: {
      userCalling: user,
      userCallingId,
      userCallingName
    }
  }
};