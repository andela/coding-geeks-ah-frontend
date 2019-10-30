
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Nav from './routes/NavBar';
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
import '../../node_modules/font-awesome/css/font-awesome.min.css';

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
          <section className="App-body">
            <Route path="/forgot" component={ForgotPassword} />
            <Route
              path="/users/reset-password/:token"
              component={ResetPassword}
            />
            <Route exact path="/" component={GetAllArticles} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/profile" component={Profile} />
            <Route path="/update-profile" component={UpdateProfile} />
            <Route path="/articles/:slug" component={GetSingleArticle} />
            <ProtectedRoutes path="/create" component={CreateArticle} />
            <Route path="/profiles/:userName/follow" component={FollowUnfollowComponent} />
            <Route path="/profiles/:userName/unfollow" component={FollowUnfollowComponent} />
          </section>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
