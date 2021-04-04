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
          {posts.map(item => {
            return <Post key={item._id} id={item._id} tags={item.tags} sub_title={item.sub_title} title={item.title} content={item.content} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Posts;
