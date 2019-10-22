/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import QueryString from 'query-string';
import { login } from './LoginAction';
import Social from '../socialLogin/SocialComponent';
import './Login.scss';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  componentDidMount = () => {
    this.setState(prevState => ({ ...prevState }));
  };

  componentDidUpdate = () => {
    this.redirectOnSuccess();
  };

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  redirectOnSuccess = () => {
    const { isAuthenticated, location } = this.props;
    const { redirectTo } = QueryString.parse(location.search);
    return isAuthenticated ? this.props.history.push(redirectTo || '/profile') : null;
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.login(email, password);
  };

  render() {
    const { email, password } = this.state;
    return (
      <section className="main-section-login">
        <div className="row">
          <div className="login-row">
            <h1>Log In</h1>
            <p>
              New to Authors Haven?
              {' '}
              <span>
                <a href="/signup" className="sign-up-link">
                  Sign Up
                </a>
              </span>
            </p>
          </div>
          <div className="main-login-row clearfix">
            <div className="form-control col">
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={this.onChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={this.onChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="reset-control">
                    <a href="/forgot" className="reset-link">
                      Forgot Password?
                    </a>
                  </div>
                  <br />
                  <button type="submit" className="loginBtn">
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className="social-login-control col">
              <Social />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.login.isAuthenticated
});

Login.defaultProps = {
  location: {
    search: ''
  }
};

export default connect(
  mapStateToProps,
  { login }
)(Login);
