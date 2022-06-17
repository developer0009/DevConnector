import axios from "axios";
import { setAlert } from "./alert";
import { GET_POSTS, POST_ERROR } from "./types";
import { UPDATE_LIKES } from "./types";
export const getPosts = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:5000/api/post");
      console.log(res.data);
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
};
export const addLike = (id) => {
  return async (dispatch) => {
    // try {
    //   const res = await axios.put("http://localhost:5000/api/post/like" + id);
    //   dispatch({
    //     type: UPDATE_LIKES,
    //     payload: { id, likes: res.data },
    //   });
    // } catch (err) {
    //   dispatch({
    //     type: POST_ERROR,
    //     payload: { msg: err.response.statusText, status: err.response.status },
    //   });
    //   dispatch(setAlert(err.response.data, "danger"));
    // }
  };
};
export const removeLike = (id) => {
  return async (dispatch) => {
    // try {
    //   const res = await axios.put("http://localhost:5000/api/post/unlike" + id);
    //   dispatch({
    //     type: UPDATE_LIKES,
    //     payload: { id, likes: res.data },
    //   });
    // } catch (err) {
    //   dispatch({
    //     type: POST_ERROR,
    //     payload: { msg: err.response.statusText, status: err.response.status },
    //   });
    // }
  };
};
