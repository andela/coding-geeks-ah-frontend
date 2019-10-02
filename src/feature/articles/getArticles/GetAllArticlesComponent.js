/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import momemt from 'moment';
import backgroundImage from '../../../app/common/images/backgroundImage.jpg';
import getImage from '../../../app/helpers/getImage';
import defautImage from '../../../app/common/images/defaultImage.png';
import avatar from '../../../app/common/images/avatar.png';
import getAllArticles from './GetAllArticlesAction';
import LikeDilsikeArticle from '../likeDislikeArticles/LikeDislikeComponent';
import './GetAllArticles.scss';

export class GetAllArticles extends Component {
  componentDidMount() {
    this.props.getAllArticles();
  }

  render() {
    const { articles, loading } = this.props;
    return (
      <>
        {/* <Home /> */}
        <div className="mainDiv">
          <div className="main--banner">
            <div className="main--banner__text">
              <h1 className="heading__3">
                Authors <br />
                Haven
              </h1>
              <h3 className="heading__4">Create and Read Articles</h3>
            </div>
            <img className="main--banner__img" src={backgroundImage} alt="" />
          </div>

          {loading ? (
            <span className="loader">LOADING...</span>
          ) : (
            <div className="main-content">
              {articles.length !== 0 ? (
                articles.map(article => (
                  <Link
                    to={`/articles/${article.slug}`}
                    key={article.slug}
                    className="link"
                  >
                    <div className="article article-main--wrapper">
                      <div className="article__image">
                        <img
                          className="article__image-box"
                          src={
                            getImage(article.body)
                              ? getImage(article.body)
                              : defautImage
                          }
                          alt=""
                        />
                      </div>
                      <div className="body-wrapper article__content">
                        <div className="user--wrapper">
                          <div className="user__avatar">
                            <img
                              className={
                                article.author.image ? 'user__avatar-box' : ''
                              }
                              src={
                                article.author.image
                                  ? article.author.image
                                  : avatar
                              }
                              alt=""
                            />
                          </div>
                          <div className="user__name">
                            {article.author.userName}
                          </div>
                          <div className="article-time">
                            <div className="article__timePublished">
                              {momemt(article.createdAt)
                                .startOf('hour')
                                .fromNow()}
                            </div>
                            <div className="article__readTime">
                              {article.readTime}
                            </div>
                          </div>
                        </div>
                        <div className="article--wrapper">
                          <div className="article__title">{article.title}</div>
                          <div className="article__description">
                            {article.description}
                          </div>
                        </div>
                        <hr className="divider" />
                        <LikeDilsikeArticle
                          className="btn__likesDislikes"
                          likes={article.likes}
                          dislikes={article.dislikes}
                        />
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="article__error">
                  <h2>
                    Sorry No Articles Found At The Moment. <br />
                    Please Create one or comeback later!!!
                  </h2>
                </div>
              )}
            </div>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.getAllArticles.articles,
  loading: state.getAllArticles.loading
});

export default connect(
  mapStateToProps,
  { getAllArticles }
)(GetAllArticles);
