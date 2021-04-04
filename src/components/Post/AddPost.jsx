import { Add } from '@material-ui/icons';
import CustomButton from 'components/Button/CustomButton';
import CustomDrawer from 'components/Drawer/CustomDrawer';
import { CustomInput, CustomTextArea } from 'components/Input/CustomInput';
import React, { useState } from 'react';
import themes from 'themes/themes';
import { useDispatch } from 'react-redux';
import { addPost } from 'store';

const AddPost = () => {
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    title: '',
    sub_title: '',
    tags: '',
    content: '',
  });

  const inputChange = e => {
    const { name, value } = e.target;
    setPost(preVal => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const createPost = e => {
    e.preventDefault();
    dispatch(addPost(post));
  };
  return (
    <CustomDrawer btnText="Create New Post" icon={<Add />} label="Edit Profile">
      <form action="" method="post" onSubmit={createPost}>
        <CustomInput type="text" name="title" onChange={inputChange} placeholder="Enter Title" />
        <CustomInput type="text" name="sub_title" onChange={inputChange} placeholder="Enter Sub Title" />
        <CustomInput type="text" name="tags" onChange={inputChange} placeholder="Enter Tags" />
        <CustomTextArea type="text" name="content" onChange={inputChange} placeholder="Enter Content" />
        {/* {message && <div className="message">{message}</div>} */}
        <CustomButton color={themes.colors.success}>Submit</CustomButton>
      </form>
    </CustomDrawer>
  );
};

export default AddPost;
