/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import Modal from './FollowModal';
import { getFollowing, getFollowers } from '../followUnfollow/followUnfollowAction';
import './Follow.scss';

class FollowListComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      lists: [],
      type: ''
    };
  }

  componentDidMount() {
    const {
      getFollowing,
      getFollowers,
      params
    } = this.props;
    const { username } = params;
    getFollowers(username);
    getFollowing(username);
  }

  openModal = (value, type) => {
    if (value.length !== 0) {
      this.setState({ modalIsOpen: true, lists: value, type });
    }
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { modalIsOpen, lists, type } = this.state;
    const { followingList, isAuthenticated } = this.props;
    const { following, followers } = followingList;
    return isAuthenticated ? (
      <div className="follow-container">
        <button
          type="button"
          onClick={() => { this.openModal(followers, 'Followers'); }}
          className="follow-container__follow-btn"
        >
          <span className="follow-number">{followers.length}</span>
          followers
        </button>
        <button
          type="button"
          onClick={() => { this.openModal(following, 'Following'); }}
          className="follow-container__follow-btn"
        >
          <span className="follow-number">{following.length}</span>
          following
        </button>
        <Modal
          show={modalIsOpen}
          userLists={lists}
          close={this.closeModal}
          type={type}
        />
      </div>
    ) : null;
  }
}

const mapStateToProps = (state) => ({
  followingList: state.followAuthor,
  isAuthenticated: state.login.isAuthenticated
});

const mapDispatchToProps = {
  getFollowing,
  getFollowers
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowListComponent);

// import React from 'react';
// import './Follow.scss';

// export function FollowListComponent() {
//   return (
//     <div className="follow-container">
//       <button type="button" className="follow-container__follow-btn">
//         <span className="follow-number">123</span>
//         Follwers
//       </button>
//       <button type="button" className="follow-container__follow-btn">
//         <span className="follow-number">123</span>
//         Following
//       </button>
//     </div>
//   );
// }

// export default FollowListComponent;
