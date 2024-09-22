import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { PostCard } from '../Postcard/index';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map(post => (
      <PostCard
        key={post.id}
        title={post.title}
        body={post.body}
        id={post.id}
        cover={post.cover}
      />
    ))}
  </div>
);

Posts.defaultProps = {
  posts: [],
}

// Posts.propTypes = {
//   posts: PropTypes.array,
// }

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }))
}
