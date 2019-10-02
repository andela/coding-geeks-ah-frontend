import { config } from 'dotenv';
import axios from 'axios';
import { toast } from 'react-toastify';
import { CREATE_ARTICLE_SUCCESS, CREATE_ARTICLE_FAIL } from '../constants';
import { BACKEND_URL } from '../../../app/common/config/appConfig';

config();

const createArticle = (
  { title, description, tags, category, body },
  props
) => async dispatch => {
  const token = localStorage.getItem('token');
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  };
  let formData = {};
  formData.tags = tags || '';
  formData.category = category || '';

  formData = {
    title,
    description,
    body
  };

  try {
    const res = await axios.post(
      `${BACKEND_URL}/articles/`,
      formData,
      axiosConfig
    );
    dispatch({
      type: CREATE_ARTICLE_SUCCESS,
      payload: res.data
    });

    toast.success('You have successfully created your article.', {
      position: toast.POSITION.TOP_CENTER
    });
    setTimeout(() => {
      props.history.push('/');
    }, 1000);
  } catch (err) {
    const error = (await err.response)
      ? err.response.data.error
      : 'SERVER ERROR!  Please contact the administartor';
    dispatch({ type: CREATE_ARTICLE_FAIL, payload: error });
    toast.error(error, { position: toast.POSITION.TOP_CENTER });
  }
};
export default createArticle;
