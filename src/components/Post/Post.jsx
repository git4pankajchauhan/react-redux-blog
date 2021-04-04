import { Delete } from '@material-ui/icons';
import CustomButton from 'components/Button/CustomButton';
import React from 'react';
import { NavLink } from 'react-router-dom';
import themes from 'themes/themes';
import './Post.scss';

const Post = ({ post }) => {
  const { id, tags, title, sub_title } = post;
  return (
    <div className="post-box">
      <div className="post-info">
        <span className="tags">{tags}</span>
        <h2 className="title">{title}</h2>
        <p className="sub-title">{sub_title}</p>
      </div>
      <div className="btns-wrap">
        <CustomButton color={themes.colors.success}>Edit Post</CustomButton>
        <NavLink className="btn-link" to={`/post/${id}`}>
          <CustomButton color={themes.colors.default}>View Post</CustomButton>
        </NavLink>
        <CustomButton color={themes.colors.danger}>
          <Delete />
        </CustomButton>
      </div>
    </div>
  );
};

export default Post;
