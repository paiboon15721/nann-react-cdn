class CommentList extends React.PureComponent {
  render() {
    return (
      <ul>
        {this.props.comments.map(v => (
          <li>{v}</li>
        ))}
      </ul>
    );
  }
}
