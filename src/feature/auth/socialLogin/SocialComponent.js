import dotenv from 'dotenv';
import { connect } from 'react-redux';
import React from 'react';
import { BACKEND_URL } from '../../../app/common/config/appConfig';
import './Social.scss';
import { social } from './SocialAction';

dotenv.config();

/**
 * @description This component describes the look and feel of Social login buttons
 * @returns {Object} Google, Facebook and Twitter buttons
 */
export const SocialLogin = (props) => (
  <>
    <div className="social-login-div">
      <button
        type="button"
        className="social-login-link social-btn"
        name="google"
        onClick={() => {
          const { social: redirectURL } = props;
          redirectURL(`${BACKEND_URL}/auth/google`);
        }}
      >
        <img

          className="social-login-img"
          src="./images/login-with-google-icon-3.jpg"
          alt="facebook"
        />
      </button>
      <button
        type="button"
        className="social-login-link social-btn"
        name="google"
        onClick={() => {
          const { social: redirectURL } = props;
          redirectURL(`${BACKEND_URL}/auth/facebook`);
        }}
      >
        <img

          className="social-login-img"
          src="./images/login-with-facebook-icon.jpg"
          alt="facebook"
        />
      </button>
      <button
        type="button"
        className="social-login-link social-btn"
        name="google"
        onClick={() => {
          const { social: redirectURL } = props;
          redirectURL(`${BACKEND_URL}/auth/twitter`);
        }}
      >
        <img
          className="social-login-img"
          src="./images/twitter_login.png"
          alt="facebook"
        />
      </button>
    </div>
  </>
);

const mapStateToProps = (state) => ({
  success: state.social.success,
});

const SocialAuth = connect(
  mapStateToProps,
  { social }
)(SocialLogin);


export default SocialAuth;
