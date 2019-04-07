import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class CommentBox extends Component {
  state = { comment: "" };
  handleChange = evt => {
    this.setState({ comment: evt.target.value });
  };
  handleSubmit = evt => {
    evt.preventDefault();

    // TODO - Call an action creator
    // And save the comment
    this.props.saveComment(this.state.comment)
    this.setState({ comment: "" });
  };
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea
          value={this.state.comment}
          onChange={this.handleChange}
          name=""
          id=""
          cols="30"
          rows="10"
        />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button onClick={this.props.fetchComments}>Fetch copmment</button>
      </div>
    );
  }
}
// const mapStateToProps = state => ({});

// const mapDispatchToProps = {};

export default connect(
  null,
  actions
)(CommentBox);
