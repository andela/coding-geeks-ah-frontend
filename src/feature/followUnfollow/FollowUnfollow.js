/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { followAuthor, unfollowAuthor } from './followUnfollowAction';

class FollowComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      follow: undefined,
      buttonState: 'Follow'
    };
  }

  componentDidUpdate = () => {
    this.submitFollowOrUnFollow();
  };

  submitFollowOrUnFollow = () => {
    const { buttonState } = this.state;
    const {
      LoggedInUser, pathname, history, followAuthor, unfollowAuthor, username
    } = this.props;

    if (!LoggedInUser.isAuthenticated) {
      return history.push(`/login?redirectTo=${pathname}`);
    }
    return buttonState.toLowerCase() === 'unfollow' ? followAuthor(username) : unfollowAuthor(username);
  }

    handleClick = ({ target }) => {
      this.setState(prevState => ({
        ...prevState,
        follow: true,
        buttonState: target.value.toLowerCase() === 'follow' ? 'Unfollow' : 'Follow'
      }));
    }

    render() {
      const { follow, buttonState } = this.state;
      console.log('follow', follow);

      return (
        <div>
          <div>
            <button type="button" onClick={this.handleClick} value={buttonState}>{buttonState}</button>
          </div>
        </div>
      );
    }
}

const mapStateToProps = state => ({
  follow: state.follow,
  LoggedInUser: state.login
});

export default connect(
  mapStateToProps,
  { followAuthor, unfollowAuthor }
)(withRouter(FollowComponent));
