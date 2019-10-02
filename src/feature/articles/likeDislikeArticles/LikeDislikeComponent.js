/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import LikeButton from '../../../app/common/images/like.png';
import DislikeButton from '../../../app/common/images/dislike.png';
import './LikeDislike.scss';

export function LikeDislike({
  handleLike, handleDislike, likes, dislikes
}) {
  return (
    <div className="likeDislike-box">
      <div className="likes">
        <img src={LikeButton} alt="" onClick={handleLike} />
        <span className="likes__count">{likes}</span>
      </div>

      <div className="dislikes">
        <img src={DislikeButton} alt="" onClick={handleDislike} />
        <span className="dislikes__count">{dislikes}</span>
      </div>
    </div>
  );
}

export default LikeDislike;
