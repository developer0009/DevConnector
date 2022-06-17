import { post } from "request";
import { GET_POSTS, POST_ERROR, UPDATE_LIKES } from "../action/types";

const initialState = {
  posts: [],
  post: null,
  isLoading: true,
  error: {},
};

export const postReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        isLoading: false,
        posts: payload,
      };
    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map((st) =>
          st._id === payload._id ? { ...st, likes: payload.likes } : post
        ),
        isLoading: false,
      };
    case POST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
