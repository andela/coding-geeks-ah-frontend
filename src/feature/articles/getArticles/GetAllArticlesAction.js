import axios from 'axios';
import { toast } from 'react-toastify';
import { GET_ARTICLES_SUCCESS, GET_ARTICLES_FAIL } from '../constants';
import { BACKEND_URL } from '../../../app/common/config/appConfig';

const getAllArticles = () => async dispatch => {
  try {
    const res = await axios.get(`${BACKEND_URL}/articles/`);

    dispatch({
      type: GET_ARTICLES_SUCCESS,
      payload: res.data
    });
    return true;
  } catch (err) {
    const error = (await err.response)
      ? err.response.data.error
      : 'SERVER ERROR!  Please contact the administartor';
    dispatch({ type: GET_ARTICLES_FAIL, payload: error });
    toast.error(error, { position: toast.POSITION.TOP_CENTER });
  }
};

export default getAllArticles;
