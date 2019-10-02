/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import momemt from 'moment';
import ReactHtmlParser from 'react-html-parser';
import GetSingleArticle from './GetSingleArticleAction';
import LikeDislikeArticle from '../likeDislikeArticles/LikeDislikeComponent';
import StarRating from '../starRating/StarRatingComponent';
import AverageRating from '../averageRating/AverageRatingComponent';
import {
  likeArticle,
  dislikeArticle
} from '../likeDislikeArticles/LikeDislikeAction';
import DefaultAvatar from '../../../app/common/images/avatar.png';
import ellipsis from '../../../app/common/images/ellipsis.png';
import bookmark from '../../../app/common/images/bookmark.png';
import './GetSingleArticle.scss';

export class ViewSingleArticle extends Component {
  componentDidMount() {
    const { GetSingleArticle } = this.props;
    const { slug } = this.props.match.params;
    GetSingleArticle(slug);
  }

  handleLike = () => {
    const { slug } = this.props.match.params;
    const token = localStorage.getItem('token');
    const { likeArticle } = this.props;

    if (!token) {
      return toast.error('Please Login is Register to like this article', {
        position: toast.POSITION.TOP_CENTER
      });
    }
    likeArticle(slug);
  };

  handleDislike = () => {
    const { slug } = this.props.match.params;
    const token = localStorage.getItem('token');
    const { dislikeArticle } = this.props;
    if (!token) {
      return toast.error('Please Login is Register to Dislike this article', {
        position: toast.POSITION.TOP_CENTER
      });
    }
    dislikeArticle(slug);
  };

  render() {
    const {
      article: {
        author = {},
        id,
        title,
        description,
        body,
        likes,
        dislikes,
        createdAt,
        readTime,
        averageRatings
      }
    } = this.props.article;
    const { userName, image } = author;
    return (
      <div className="wrapper">
        <div className="heading">
          <div className="heading__left">
            <div className="heading__image">
              <img
                src={image || DefaultAvatar}
                className="heading__img"
                alt="user"
              />
            </div>
            <div className="heading__user">
              <span className="heading__name">{userName}</span>
              <br />
              <span className="heading__munite">
                {momemt(createdAt)
                  .startOf('hour')
                  .fromNow()}
              </span>
              {'  '}
              <span className="heading__munite">{readTime}.</span>
              <span>
                <div className="heading__avarageRating">
                  <AverageRating avarageRatings={averageRatings} />
                </div>
              </span>
            </div>
          </div>
          <div className="heading__right">
            <div className="heading__right-item">
              <span className="bookmark">
                {' '}
                <img src={bookmark} alt="" />{' '}
              </span>
              <span className="menu">
                <img src={ellipsis} alt=" " />
              </span>
            </div>
          </div>
        </div>
        <div className="body">
          <div className="body__title">
            <h2>{title}</h2>
          </div>
          <div className="body__description">
            <p className="body__description-content">{description}</p>
          </div>
          <div className="body__article-body">{ReactHtmlParser(body)}</div>
          <hr />
          <div className="status">
            <div className="status__stats">
              <span>7 reads</span>
            </div>
            <div className="status__comment">
              <Link to="#?" className="status__comment">
                4 comments
              </Link>
            </div>
            <div className="status__like">
              <span>
                <LikeDislikeArticle
                  className="likes-dislikes"
                  handleDislike={this.handleDislike}
                  handleLike={this.handleLike}
                  likes={likes}
                  dislikes={dislikes}
                />
              </span>
            </div>
            <div className="status__rate">
              <span className="status__rate">
                <StarRating
                  articleId={id}
                  pathname={this.props.location.pathname}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ getSingleArticle }) => ({
  article: getSingleArticle
});

export default connect(
  mapStateToProps,
  { likeArticle, dislikeArticle, GetSingleArticle }
)(ViewSingleArticle);
