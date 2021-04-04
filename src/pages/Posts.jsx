import AddPost from 'components/Post/AddPost';
import FilterPost from 'components/Post/FilterPost';
import Post from 'components/Post/Post';
import React from 'react';
import { useSelector } from 'react-redux';
import './Posts.scss';

const Posts = () => {
  const posts = useSelector(state => state.posts);
  return (
    <section className="post-section">
      <div className="body">
        <div className="filter-wrap">
          <FilterPost />
          <AddPost />
        </div>
        <div className="post-container">
          {posts.map(post => {
            return <Post key={post._id} post={post} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Posts;
