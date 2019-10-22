import axios from 'axios';
import { toast } from 'react-toastify';
import { GET_ARTICLES_SUCCESS, GET_ARTICLES_FAIL, LOADING } from '../constants';
import { BACKEND_URL } from '../../../app/common/config/appConfig';

const getAllArticles = () => async dispatch => {
  try {
    dispatch({
      type: LOADING,
      payload: true
    });
    // const res = await axios.get('http://localhost:4000/api/v1/articles/');
    // console.log(res);

    const res = await axios.get(`${BACKEND_URL}/articles/`);

    dispatch({
      type: GET_ARTICLES_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const error = (await err.response)
      ? err.response.data.error
      : 'SERVER ERROR!  Please contact the administartor';
    dispatch({ type: GET_ARTICLES_FAIL, payload: error });
    toast.error(error, { position: toast.POSITION.TOP_CENTER });
  }
};

export default getAllArticles;
