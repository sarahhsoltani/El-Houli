    import axios from "axios";
    import {
      REGISTER_SUCCESS,
      FAILED_REGISTER,
      USER_LOADED,
      AUTHENTIFICATION_ERROR,
      LOGIN_SUCCESS,
      fAILED_LOGIN,
      LOGOUT
    } from "./type";
    import { setAlert } from "./alert";
    import setAuthToken from "../../service/setAuthToken";
//Register
export const register = (
  name,
  email,
  password,
  role,
  phone
) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:4000/api/users/register", { name, email, password, role, phone});
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
    console.log("register")
  } catch (err) {
    const error = err.response.data.msg;
    error &&
     dispatch(setAlert(error, "danger"));
     dispatch({
      type: FAILED_REGISTER
    });
  }
};



export const loginUser = (email, password) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:4000/api/users/login", {
      email,
      password
    });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    const error = err.response.data.msg;
    error && dispatch(setAlert(error, "danger"));
    dispatch({
      type: fAILED_LOGIN
    });
  }
  console.log("loginn")
};

// logout user
export const logoutUser = () => dispatch => {
  dispatch({ type: LOGOUT });
  console.log('logout')
};


//corrent user
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("http://localhost:4000/api/users/current");
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
    console.log("res.data",res.data)
  } catch (err) {
    dispatch({
      type: AUTHENTIFICATION_ERROR
    });
  }
}; 

