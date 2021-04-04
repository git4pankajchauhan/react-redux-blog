import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export const addPost = payload => {
  return {
    type: 'CREATE_POST',
    payload: payload,
  };
};

const initialState = {
  posts: [
    { _id: '60557b3a41078415d4fd1560', title: 'title', sub_title: 'tle2', tags: 'hello', content: 'a', __v: 0 },
    { _id: '60557b3e41078415d4fd1561', title: 'title', sub_title: 'tle2', tags: 'hello', content: 'aaaa', __v: 0 },
    { _id: '60557b4241078415d4fd1562', title: 'titledas', sub_title: 'tle2dasd', tags: 'hello', content: 'aaaa', __v: 0 },
    { _id: '60557b4941078415d4fd1564', title: 'titledas', sub_title: 'tle2dasddasd', tags: 'hellodads', content: 'aaaa', __v: 0 },
    { _id: '6055c024268fb63bc409011f', title: 'title', sub_title: 'a', tags: 'aaaa', content: 'ddaaa', __v: 0 },
  ],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_POST':
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
      break;
    default:
      return state;
  }
};

const store = createStore(postReducer, composeWithDevTools());

export default store;
