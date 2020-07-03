import { LOGOUT, LOGIN } from './actions';

const initialState = {
  token: '',
  user: {},
  isAuth: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        token: payload.token,
        user: payload.user,
        isAuth: true,
      };
    case LOGOUT:
      return { ...initialState };

    default:
      return state;
  }
};

export default reducer;
