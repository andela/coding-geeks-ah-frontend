/* eslint-disable comma-dangle */
/* eslint-disable quote-props */
import axios from 'axios';
import { toast } from 'react-toastify';
import * as userActionTypes from './LogoutActionTypes';
import { BACKEND_URL } from '../../../app/common/config/appConfig';

export const logoutSuccess = (message) => ({
  type: userActionTypes.LOGOUT_SUCCESS,
  payload: message,
});
export const logoutError = (error) => ({
  type: userActionTypes.LOGOUT_ERROR,
  payload: error,
});

export const logout = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  };
  try {
    const send = await axios
      .post(`${BACKEND_URL}/users/logout`, {}, axiosConfig);
    const { data } = send;
    const { message } = data;
    localStorage.clear();
    window.location.replace('/');
    toast.success(message);
    dispatch(logoutSuccess(message));
  } catch (error) {
    const message = (await error.response)
      ? error.response.data.error : 'Something wrong';
    toast.error(message);
    dispatch(logoutError(message));
  }
};
