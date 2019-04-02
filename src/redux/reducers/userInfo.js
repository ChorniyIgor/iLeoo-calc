import { UPDATE_USER_INFO } from "../actions/userInfo";

const initialState = {
  email: "",
  name: "",
  lastName: "",
  message: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_INFO: {
      return {
        ...state,
        ...action.userInfo
      };
    }
    default:
      return { ...state };
  }
};
