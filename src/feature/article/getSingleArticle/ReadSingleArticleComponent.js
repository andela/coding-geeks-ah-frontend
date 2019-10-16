/* eslint-disable import/no-named-as-default */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import StarRating from '../starRating/StarRatingComponent';
import AverageRating from '../averageRating/AverageRatingComponent';
import FollowComponent from '../../followUnfollow/FollowUnfollow';

class SingleArticle extends Component {
  constructor() {
    super();

    this.state = {
      username: 'kate',
      avarageRatings: 3.5,
      articleId: 1,
    };
  }

  render() {
    return (
      <div>
        <div>
          <AverageRating avarageRatings={this.state.avarageRatings} />
        </div>
        <div>
          <StarRating
            articleId={this.state.articleId}
            pathname={this.props.location.pathname}
          />
        </div>
        <div>
          <FollowComponent
            username={this.state.username}
            pathname={this.props.location.pathname}
          />
        </div>
      </div>
    );
  }
}

SingleArticle.defaultProps = {
  location: {
    pathname: ''
  }
};


export default SingleArticle;
