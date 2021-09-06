import axios from 'axios';
import { GET_USERS, DELETE_USER } from './type';

export const getUsers = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:4000/api/users/allUser');

    dispatch({
      type: GET_USERS,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = id => async dispatch => {
  try {
    await axios.delete(`http://localhost:4000/api/users/deleteUser/${id}`);
    dispatch({
      type: DELETE_USER,
      payload: id
    });
    console.log('delete user action')
    dispatch(getUsers);
  } catch (error) {
    console.log(error);
  }
};
