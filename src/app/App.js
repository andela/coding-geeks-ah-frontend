/* eslint-disable import/no-named-as-default */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import GetAllArticles from '../feature/articles/getArticles/GetAllArticlesComponent';
import GetSingleArticle from '../feature/articles/getSingleArticle/GetSingleArticleComponent';
import CreateArticle from '../feature/articles/createArticle/CreateArticleComponent';
import ProtectedRoutes from '../feature/protectedRoutes/ProtectedRoutesComponent';
import SignUp from '../feature/auth/signup/SignUpComponent';
import Login from '../feature/auth/login/LoginComponent';
import Profile from '../feature/profile/view_profile/ViewProfileComponent';
import UpdateProfile from '../feature/profile/update_profile/UpdateProfileComponent';
import ForgotPassword from '../feature/Reset Password/forgot password/ForgotPasswordComponent';
import ResetPassword from '../feature/Reset Password/reset password/ResetPasswordComponent';
import FollowUnfollowComponent from '../feature/followUnfollow/FollowUnfollowComponent';
import Home from '../feature/homePage/Home';

toast.configure();
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
        <ToastContainer />
        <Switch>
          <Route path="/forgot" component={ForgotPassword} />
          <Route
            path="/users/reset-password/:token"
            component={ResetPassword}
          />
          <Route exact path="/" component={GetAllArticles} />
          <ProtectedRoutes path="/Create" component={CreateArticle} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/profile" component={Profile} />
          <Route path="/update-profile" component={UpdateProfile} />
          <Route path="/Signup" component={SignUp} />
          <Route path="/profiles/:userName/follow" component={FollowUnfollowComponent} />
          <Route path="/profiles/:userName/unfollow" component={FollowUnfollowComponent} />
          <Route path="/articles/:slug" component={GetSingleArticle} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
