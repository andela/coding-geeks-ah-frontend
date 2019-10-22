import { combineReducers } from 'redux';
import loginReducer from '../../feature/auth/login/LoginReducer';
import logoutReducer from '../../feature/auth/logout/LogoutReducer';
import SignUpReducer from '../../feature/auth/signup/SignUpReducer';
import ProfileReducer from '../../feature/profile/profile_reducers/ProfileReducers';
import forgotPasswordReducer from '../../feature/Reset Password/forgot password/forgotPasswordReducers';
import resetPasswordReducer from '../../feature/Reset Password/reset password/resetPasswordReducer';
import article from '../../feature/articles/createArticle/createArticleReducer';
import getAllArticles from '../../feature/articles/getArticles/GetAllArticleReducer';
import followReducer from '../../feature/followUnfollow/followUnfollowReducer';

import getSingleArticle from '../../feature/articles/getSingleArticle/GetSingleArticleReducer';
import socialReducer from '../../feature/auth/socialLogin/SocialReducer';

export default combineReducers({
  login: loginReducer,
  logout: logoutReducer,
  signup: SignUpReducer,
  profile: ProfileReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  crateArticle: article,
  getAllArticles,
  followAuthor: followReducer,
  getSingleArticle,
  social: socialReducer,
});
