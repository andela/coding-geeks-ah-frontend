/* eslint-disable import/no-named-as-default */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import GetAllArticles from '../feature/articles/getArticles/GetAllArticlesComponent';
import CreateArticle from '../feature/articles/createArticle/CreateArticleComponent';
import ProtectedRoutes from '../feature/protectedRoutes/ProtectedRoutesComponent';
import Nav from './routes/Nav';
import SignUp from '../feature/auth/signup/SignUpComponent';
import Login from '../feature/auth/login/LoginComponent';
import ForgotPassword from '../feature/Reset Password/forgot password/ForgotPasswordComponent';
import ResetPassword from '../feature/Reset Password/reset password/ResetPasswordComponent';
import SingleArticle from '../feature/article/getSingleArticle/ReadSingleArticleComponent';
import FollowComponent from '../feature/followUnfollow/FollowUnfollow';

toast.configure();
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Nav />
        </header>
        <ToastContainer />
        <Switch>
          <Route path="/forgot" component={ForgotPassword} />
          <Route
            path="/users/reset-password/:token"
            component={ResetPassword}
          />
          <Route exact path="/" component={GetAllArticles} />
          <Route path="/login" component={Login} />
          <Route path="/Signup" component={SignUp} />
          <Route path="/articles/:slug" component={SingleArticle} />
          <ProtectedRoutes path="/Create" component={CreateArticle} />
          <Route path="/profiles/:userName/follow" component={FollowComponent} />
          <Route path="/profiles/:userName/unfollow" component={FollowComponent} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
