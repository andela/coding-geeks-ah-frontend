import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, BrowserRouter } from 'react-router-dom';
import momemt from 'moment';
import ReactHtmlParser from 'react-html-parser';
import GetSingleArticle from './GetSingleArticleAction';
import LikeDislikeArticle from '../likeDislikeArticles/LikeDislikeComponent';
import StarRating from '../starRating/StarRatingComponent';
import AverageRating from '../averageRating/AverageRatingComponent';
import DisabledStar from '../starRating/DisabledStarComponent';
import DefaultAvatar from '../../../app/common/images/avatar.png';
import ellipsis from '../../../app/common/images/ellipsis.png';
import bookmark from '../../../app/common/images/bookmark.png';
import ShareArticle from '../shareArticle/ShareArticleComponent';
import CommentCountComponent from '../../../app/common/CommentCount/CommentCountComponent';
import './GetSingleArticle.scss';

export class ViewSingleArticle extends Component {
  componentDidMount() {
    const { GetSingleArticle } = this.props;
    const { slug } = this.props.match.params;
    GetSingleArticle(slug);
    window.scrollTo(0, 0);
  }

  render() {
    const {
      article: {
        author = {},
        id,
        title,
        description,
        body,
        slug,
        likes,
        dislikes,
        createdAt,
        readTime,
        averageRatings,
        commentCount
      }
    } = this.props.article;
    const { userName, image } = author;
    const { user } = this.props.currentUser;
    const ownArticle = userName === user.username;
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
                <img src={bookmark} className="heading__bookmark" alt="" />{' '}
              </span>
              <span className="menu">
                <img src={ellipsis} className="heading__menu" alt=" " />
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
              <BrowserRouter>
                <Link to="#?" className="status__comment">
                  <CommentCountComponent
                    className="btn__commentCount"
                    count={commentCount}
                  />
                </Link>
              </BrowserRouter>
            </div>
            <div className="status__like">
              <span>
                <LikeDislikeArticle
                  likes={likes}
                  dislikes={dislikes}
                  slug={this.props.match.params.slug}
                  pathname={this.props.location.pathname}
                />
              </span>
            </div>
            <div className="status__rate">
              {ownArticle ? (
                <span className="status__rate">
                  <DisabledStar />
                </span>
              ) : (
                <span className="status__rate">
                  <StarRating
                    articleId={id}
                    pathname={this.props.location.pathname}
                    slug={slug}
                  />
                </span>
              )}
            </div>
          </div>
          <div className="tags-share-container">
            <div>
              <button type="button">Tags Carlos Tech Andela</button>
            </div>
            <div className="share-buttons">
              <ShareArticle />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ getSingleArticle, login }) => ({
  article: getSingleArticle,
  currentUser: login,
  isAuthenticated: login
});
const mapDispatchToProps = {
  GetSingleArticle
};

ViewSingleArticle.defaultProps = {
  location: {
    pathname: ''
  },
  match: {
    params: ''
  }
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewSingleArticle);
