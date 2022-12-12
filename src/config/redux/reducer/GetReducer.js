const initialstate = {
  users: [],
};

export const getReducers = (state = initialstate, action) => {
  if (action.type === "GET_DATA_SUCCESS") {
    return {
      ...state,
      users: action.payload,
    };
  }
  return state;
};
