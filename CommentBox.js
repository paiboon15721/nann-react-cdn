class CommentBox extends React.PureComponent {
  state = {
    comment: ""
  };

  handleTextChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = () => {
    this.props.handleSubmit(this.state.comment);
    this.setState({ comment: "" });
  };

  render() {
    return (
      <React.Fragment>
        <textarea value={this.state.comment} onChange={this.handleTextChange} />
        <button onClick={this.handleSubmit}>Add Comment</button>
      </React.Fragment>
    );
  }
}
