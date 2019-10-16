import axios from 'axios';
import { toast } from 'react-toastify';
import {
  FOLLOW_AUTHOR_SUCCESS, UNFOLLOW_AUTHOR_SUCCESS, FOLLOW_AUTHOR_FAIL, UNFOLLOW_AUTHOR_FAIL
} from './followUnfollowTypes';
import { BACKEND_URL } from '../../app/common/config/appConfig';

export const followAuthor = (username) => async (dispatch) => {
  const token = localStorage.getItem('token');
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  };
  try {
    const res = await axios.post(
      `${BACKEND_URL}/profiles/${username}/follow`, {}, axiosConfig
    );

    dispatch({
      type: FOLLOW_AUTHOR_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const erroMessage = (await error.response) ? error.response.data.error : 'Network Error';
    toast.error(erroMessage, { position: toast.POSITION.TOP_CENTER });
    dispatch({ type: FOLLOW_AUTHOR_FAIL, payload: erroMessage });
  }
};

export const unfollowAuthor = (username) => async (dispatch) => {
  const token = localStorage.getItem('token');
  console.log(token);
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  };
  try {
    const res = await axios.delete(
      `${BACKEND_URL}/profiles/${username}/unfollow`, axiosConfig
    );

    dispatch({
      type: UNFOLLOW_AUTHOR_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const erroMessage = (await error.response) ? error.response.data.error : 'Network Error';
    toast.error(erroMessage, { position: toast.POSITION.TOP_CENTER });
    dispatch({ type: UNFOLLOW_AUTHOR_FAIL, payload: erroMessage });
  }
};
