import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBookmarks, unbookmark } from './bookmarkAction';
import './bookmarks.scss';

export class Bookmarks extends Component {
  componentDidMount() {
    const { getBookmarks } = this.props;
    getBookmarks();
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps = (nextProps) => {
    const { bookmarks } = nextProps;
    this.setState(prevState => ({
      ...prevState,
      bookmarks: bookmarks.prevState
    }));
  }

  componentDidUpdate() {
    const { getBookmarks } = this.props;
    if (getBookmarks) {
      getBookmarks();
    }
    return true;
  }

  deleteBookmarkClick = (event) => {
    const { unbookmark } = this.props;
    const slug = event.target.name;
    unbookmark(slug);
  }

  render() {
    const { bookmarks } = this.props;
    // console.log(bookmarks);

    return (
      <>
        <div className="bookmarks-header"><h1>Bookmarks</h1></div>
        { bookmarks.length !== 0 ? (
          bookmarks.map(bookmark => (
            <div className="bookmarks">
              <div className="bookmarks__card">
                <Link
                  to={`/articles/${bookmark.Article.slug}`}
                  key={bookmark.Article.slug}
                  className="bookamarks__link"
                >
                  <h3>{bookmark.Article.title}</h3>

                  <p>
                    {bookmark.Article.description}
                  </p>
                </Link>
              </div>
              <button type="submit" name={bookmark.Article.slug} className="bookmark-button" onClick={this.deleteBookmarkClick}>Remove</button>

            </div>
          ))
        ) : (
          <div className="bookmark__error">
            <h1>
              Sorry No Bookmarks Found At The Moment.
              {' '}
              <br />
              Please Create one or comeback later!!!
            </h1>
          </div>
        )}
      </>

    );
  }
}

const mapStateToProps = ({ bookmarking, getAllArticles }) => ({
  bookmarks: bookmarking.bookmarks,
  loading: getAllArticles.loading,
  articles: getAllArticles.articles,
});

const mapDispatchToProps = {
  getBookmarks,
  unbookmark
};

export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks);
