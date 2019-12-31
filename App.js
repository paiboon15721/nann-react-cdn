class App extends React.PureComponent {
  state = {
    comments: []
  };

  handleSubmit = comment => {
    this.setState(state => ({ comments: [...state.comments, comment] }));
  };

  render() {
    return (
      <div>
        <CommentBox handleSubmit={this.handleSubmit} />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}
