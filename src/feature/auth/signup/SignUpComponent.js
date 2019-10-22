/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import registerUser from './SignUpAction';
import SocialLogin from '../socialLogin/SocialComponent';
import './SignUpStyle.scss';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      userName: null,
      email: null,
      password: null,
      confirmPassword: null
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { createUser } = this.props;
    createUser(this.state);
  };

  render() {
    return (
      <div className="wrapper">
        <div className="heading">
          <h1 className="heading__title">Sign Up</h1>
          <p className="heading__body">
            Already have an account? &nbsp;
            <a href="/login" className="heading__link">
              Log In
            </a>
          </p>
        </div>
        <div className="flex-container">
          <div className="flex-container__left-section">
            <form className="flex-container__form" onSubmit={this.handleSubmit}>
              <div className="flex-container__field">
                <input
                  type="text"
                  id="firstName"
                  placeholder="Firstname"
                  onChange={this.handleChange}
                  required
                  className="flex-container__input"
                />
              </div>
              <div className="flex-container__field">
                <input
                  type="text"
                  id="lastName"
                  placeholder="Lastname"
                  required
                  onChange={this.handleChange}
                  className="flex-container__input"
                />
              </div>
              <div className="flex-container__field">
                <input
                  type="text"
                  id="userName"
                  placeholder="Username"
                  required
                  onChange={this.handleChange}
                  className="flex-container__input"
                />
              </div>
              <div className="flex-container__field">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  required
                  onChange={this.handleChange}
                  className="flex-container__input"
                />
              </div>
              <div className="flex-container__field">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  required
                  onChange={this.handleChange}
                  className="flex-container__input"
                />
              </div>
              <div className="flex-container__field">
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  required
                  onChange={this.handleChange}
                  className="flex-container__input"
                />
              </div>
              <button type="submit" className="flex-container__button">
                Sign Up
              </button>
            </form>
          </div>
          <div className="flex-container__right-section">
            <SocialLogin />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(registerUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
