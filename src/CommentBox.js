import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import style from './style';
import $ from 'jquery-ajax';


  class CommentBox extends Component {
    constructor(props) {
      super(props);
      this.state = { data: [] };
      this.handleCommentDelete = this.handleCommentDelete.bind(this);
      this.handleCommentUpdate = this.handleCommentUpdate.bind(this);
    }

    loadCommentsFromServer() {
    $.ajax({
      method: 'GET',
      url: this.props.url
    })
    .then((res) => {
      this.setState({ data: res });
    }, (err) => {
      console.log('error', err)
    })
  }

    handleCommentSubmit(comment) {
    $.ajax({
      method: 'POST',
      url: this.props.url,
      data: comment
    })
    .catch(err => {
      console.log(err);
      this.setState({ data: comment });
    });
  }

  handleCommentDelete(id) {
    $.ajax({
      method: 'DELETE',
      url: `${this.props.url}/${id}`
    })
    .then((res) => {
      console.log('Comment deleted');
    }, (err) => {
      console.error(err);
    });
  }

  handleCommentUpdate(id, comment) {
    //sends the comment id and new author/text to our api
    $.ajax({
      method: 'put',
      url: `${this.props.url}/${id}`,
      data: comment
    })
    .then(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }
componentDidMount(){
  this.loadCommentsFromServer()
  setInterval(this.CommentsFromServer. this.props. pollInterval)
}

  render() {
    return (
      <div style={ style.commentBox }>
        <h2 style={ style.title }>Comments:</h2>
      <CommentList
        onCommentDelete={ this.handleCommentDelete }
        onCommentUpdate={ this.handleCommentUpdate }
        data={ this.state.data }/>
      <CommentForm onCommentSubmit={ this.handleCommentSubmit }/>
      </div>
    )
  }
}
export default CommentBox;
