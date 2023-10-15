// userTypeActions.js
export const SET_USER_TYPE = 'SET_USER_TYPE';

export const setUserType = (userType: string) => {
  return {
    type: SET_USER_TYPE,
    payload: userType,
  };
};
