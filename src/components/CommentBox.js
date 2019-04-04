import React, { Component } from "react";

class CommentBox extends Component {
  state = { comment: "" };
  handleChange = evt => {
    this.setState({ comment: evt.target.value });
  };
  handleSubmit = evt => {
    evt.preventDefault();

    // TODO - Call an action creator
    // And save the comment
    this.setState({ comment: "" });
  };
  render() {
    return (
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
          <button>Sumbit Comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
