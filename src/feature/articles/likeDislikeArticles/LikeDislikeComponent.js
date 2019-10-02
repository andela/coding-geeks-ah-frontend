/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { likeArticle, dislikeArticle } from './LikeDislikeAction';
import LikeButton from '../../../app/common/images/like.png';
import DislikeButton from '../../../app/common/images/dislike.png';
import './LikeDislike.scss';

export class LikeDislike extends Component {
  handleLike = () => {
    const { slug, likeArticle, isAuthenticated } = this.props;

    isAuthenticated
      ? likeArticle(slug)
      : toast.error('Please Login is Register to like this article', {
          position: toast.POSITION.TOP_CENTER
        });
  };

  handleDislike = () => {
    const { slug, dislikeArticle, isAuthenticated } = this.props;
    isAuthenticated
      ? dislikeArticle(slug)
      : toast.error('Please Login is Register to dislike this article', {
          position: toast.POSITION.TOP_CENTER
        });
  };

  render() {
    const { likes, dislikes } = this.props;

    return (
      <div className="likeDislike-box">
        <div className="likes">
          <img src={LikeButton} alt="" onClick={this.handleLike} id="likes" />
          <span className="likes__count">{likes}</span>
        </div>

        <div className="dislikes">
          <img
            src={DislikeButton}
            alt=""
            onClick={this.handleDislike}
            id="dislikes"
          />
          <span className="dislikes__count">{dislikes}</span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ login }) => ({
  isAuthenticated: login
});

export default connect(
  mapStateToProps,
  { likeArticle, dislikeArticle }
)(LikeDislike);
