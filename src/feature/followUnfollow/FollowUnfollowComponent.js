/* eslint-disable camelcase */
/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getFollowing, followAuthor, unfollowAuthor } from './followUnfollowAction';
import './followUnfollow.scss';

export class FollowUnfollowComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonState: '',
      unfollowButtonStyle: {
        backgroundColor: '#4887C2',
        color: 'white',
      }
    };
  }

  UNSAFE_componentWillMount = () => {
    const { props } = this;
    props.getFollowing();
  }

  componentDidUpdate = () => {
    this.submitFollowOrUnFollow();
  };

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    const { following } = nextProps;
    const { username: authorUsername, authorId } = this.props;
    let buttonState = 'Follow';

    following.map(({ username, following }) => {
      if (username && username.toLowerCase() === (authorUsername || '').toLowerCase()) {
        buttonState = 'Unfollow';
      } else if (following && Number.parseInt(following, 10) === Number.parseInt(authorId, 10)) {
        buttonState = 'Unfollow';
      }
      return true;
    });

    return this.setState(prevState => ({
      ...prevState,
      buttonState
    }));
  }

  submitFollowOrUnFollow = () => {
    const {
      loggedInUser, pathname, history
    } = this.props;

    return !loggedInUser.isAuthenticated ? history.push(`/login?redirectTo=${pathname}`) : true;
  }

    handleClick = () => {
      const { buttonState } = this.state;
      const { followAuthor, unfollowAuthor, username } = this.props;
      this.setState(prevState => ({
        ...prevState,
        buttonState: buttonState.toLowerCase() === 'unfollow' ? 'Follow' : prevState.buttonState
      }));
      return buttonState.toLowerCase() === 'follow' ? followAuthor(username) : unfollowAuthor(username);
    }

    render() {
      const { buttonState, unfollowButtonStyle } = this.state;

      return (
        <div>
          <div className="Follow__button">
            <button className="button" style={buttonState.toLowerCase() === 'unfollow' ? unfollowButtonStyle : {}} type="button" onClick={this.handleClick} value={buttonState}>{buttonState}</button>
          </div>
        </div>
      );
    }
}

const mapStateToProps = state => ({
  following: state.followAuthor.following,
  follow: state.followAuthor.follow,
  loggedInUser: state.login
});

export default connect(
  mapStateToProps,
  { getFollowing, followAuthor, unfollowAuthor }
)(withRouter(FollowUnfollowComponent));
