/* eslint-disable no-nested-ternary */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { retrieveProfile } from './ViewProfileAction';
import './ViewProfileStyle.scss';
import notFound from '../img/no-image.jpeg';

const ProfileComponent = props => {
  const { authenticated, getProfile, profile } = props;
  const image = profile.profile.image ? profile.profile.image : notFound;
  const bio = profile.profile.bio ? profile.profile.bio : 'No Bio';
  if (!profile.profile.userName) {
    getProfile(authenticated.username);
  }
  return profile.profile.userName ? (
    <div>
      <h1 className="title">User Profile</h1>
      <div className="grid-container">
        <div className="grid-container__cover">
          <img
            src={image}
            alt="avatar"
            className="grid-container__avatar"
          />
        </div>
        <div className="grid-container__profile-info">
          <p className="grid-container__username">{`${profile.profile.userName}`}</p>
          <p className="grid-container__bio">{`${bio}`}</p>
        </div>
        <Link to="/update-profile" className="grid-container__link">
          Edit Profile
        </Link>
      </div>
    </div>
  ) : (
    <p className="grid-container__loading">Loading...</p>
  );
};

export const mapStateToProps = state => ({
  authenticated: state.login.user,
  profile: state.profile
});

export const mapDispatchToProps = dispatch => ({
  getProfile: user => {
    dispatch(retrieveProfile(user));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileComponent);
