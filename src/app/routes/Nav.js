/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../logo.png';
import Logout from '../../feature/auth/logout/Logout';
import { login } from '../../feature/auth/login/LoginAction';
import { social, authUser } from '../../feature/auth/socialLogin/SocialAction';

export class Navbar extends Component {
  redirectURL = () => {
    window.location.replace('/');
  }

  render() {
    const { search } = window.location;
    if (search) {
      if (search.includes('token')) {
        const token = search.replace('?token=', '');
        this.props.authUser(token);
        this.redirectURL();
      }
    }

    const { isAuthenticated, success } = this.props;
    return (
      <nav className="nav-wrapper">
        <Link to="/">
          <img src={logo} className="App-logo" alt="authors haven logo" />
        </Link>
        {(isAuthenticated || success)
          ? (
            <ul className="right">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Create">Create</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li className="last">
                <Logout />
              </li>
            </ul>
          ) : (
            <ul className="right">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Create">Create</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/Signup" className="last">
                SignUp
                </Link>
              </li>
            </ul>
          )}
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.login.isAuthenticated,
  success: state.social.success,
});

export default connect(
  mapStateToProps,
  { login, social, authUser }
)(Navbar);
