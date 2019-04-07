import { SAVE_COMMENT, FETCH_COMMENTS } from "../actions/types";
import { bindActionCreators } from "../../../../../../Library/Caches/typescript/3.3/node_modules/redux";
const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_COMMENT:
      return [...state, payload];
    case FETCH_COMMENTS:
      const comments = payload.data.map(comment => comment.name)
      return [...state, ...comments]
    default:
      return state;
  }
};
