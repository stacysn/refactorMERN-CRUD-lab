import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import style from './style';
import $ from 'jquery-ajax';


class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  handleCommentSubmit(comment) {
  $.ajax({
    method: 'POST',
    url: this.props.url,
    data: comment
  })
  .catch(err => {
    console.log(err);
    this.setState({ data: comments });
  });
}
  render() {
    return (
      <div style={ style.commentBox }>
        <h2>Comments:</h2>
      <CommentList data={ this.state.data }/>
      <CommentForm />
      </div>
    )
  }
}

export default CommentBox;
