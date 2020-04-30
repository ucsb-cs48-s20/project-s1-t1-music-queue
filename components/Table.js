function Table(props) {
  return (
    <tr>
      <td>{props.song}</td>
      <td>{props.score}</td>
      <td>
        <button>upvote</button>
      </td>
      <td>
        <button>downvote</button>
      </td>
    </tr>
  );
}

export default Table;
