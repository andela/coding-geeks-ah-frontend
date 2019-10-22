/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { updateUserProfile } from './UpdateProfileAction';
import './UpdateProfileStyle.scss';

export class UpdateProfileComponent extends Component {
  constructor(props) {
    super(props);
    const { authenticated } = this.props;
    this.state = {
      user: authenticated.username,
      userName: null,
      bio: null,
      image: null
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleFileUpload = e => {
    this.setState({
      image: e.target.files[0]
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { bio, image } = this.state;
    if (!bio && !image) {
      toast.error('No data provided', {
        position: toast.POSITION.TOP_CENTER
      });
    } else {
      const { updateProfile } = this.props;
      updateProfile(this.state);
    }
  };

  render() {
    return (
      <div>
        <h1 className="title">Update Profile</h1>
        <div className="grid-container">
          <form className="grid-container__form" onSubmit={this.handleSubmit}>
            <label className="grid-container__label">Bio</label>
            <br />
            <textarea
              rows="5"
              cols="60"
              type="text"
              id="bio"
              onChange={this.handleChange}
              className="grid-container__textarea"
            />
            <br />
            <label className="grid-container__label">Image</label>
            <br />
            <input
              type="file"
              onChange={this.handleFileUpload}
              className="grid-container__file"
            />
            <br />
            <button type="submit" className="grid-container__btn">
              Update
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  authenticated: state.login.user,
  profile: state.profile
});

const mapDispatchToProps = dispatch => ({
  updateProfile: profile => dispatch(updateUserProfile(profile))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateProfileComponent);
