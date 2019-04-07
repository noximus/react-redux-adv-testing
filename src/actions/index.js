import axios from "axios";
import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";


export const saveComment = payload => ({
  type: SAVE_COMMENT,
  payload
});

export function fetchComments() {
  const response = axios.get("http://jsonplaceholder.typicode.com/comments");
  return {
    type: FETCH_COMMENTS,
    payload: response
  };
}
